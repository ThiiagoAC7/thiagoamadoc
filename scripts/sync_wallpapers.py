#!/usr/bin/env python3
import json
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageOps

REPO = "ThiiagoAC7/wallpapers"
BRANCH = "main"
TREE_URL = f"https://api.github.com/repos/{REPO}/git/trees/{BRANCH}?recursive=1"
RAW_BASE = f"https://raw.githubusercontent.com/{REPO}/{BRANCH}"
HEADERS = {"User-Agent": "thiagoamadoc-sync"}
IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp"}
THUMB_WIDTH = 640
THUMB_QUALITY = 78

ROOT = Path(__file__).resolve().parent.parent
THUMBS_DIR = ROOT / "public" / "wallpapers" / "thumbs"
DATA_FILE = ROOT / "src" / "data" / "wallpapers.json"


def fetch_tree():
    req = urllib.request.Request(TREE_URL, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.load(resp)["tree"]


def load_cache():
    if not DATA_FILE.exists():
        return {}
    items = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    return {item["path"]: item for item in items}


def thumb_path(rel_path):
    p = Path(rel_path)
    return THUMBS_DIR / p.parent / f"{p.stem}.webp"


def process_entry(blob, cached):
    """
    download and build a webp thumbnail for one wallpaper unless its sha is cached.

    params:
    - blob: github tree entry dict
    - cached: previous entry dict or none

    returns:
    - tuple: (metadata dict, status "cached" or "generated")
    """
    rel_path = blob["path"]
    dest = thumb_path(rel_path)

    if cached and cached.get("sha") == blob["sha"] and dest.exists():
        return cached, "cached"

    encoded = urllib.parse.quote(rel_path, safe="/")
    req = urllib.request.Request(f"{RAW_BASE}/{encoded}", headers=HEADERS)
    with urllib.request.urlopen(req, timeout=60) as resp:
        raw = resp.read()

    with Image.open(BytesIO(raw)) as img:
        img = ImageOps.exif_transpose(img)
        width, height = img.size
        img.thumbnail((THUMB_WIDTH, height), Image.Resampling.LANCZOS)

        has_alpha = img.mode in ("RGBA", "LA") or (
            img.mode == "P" and "transparency" in img.info
        )
        img = img.convert("RGBA" if has_alpha else "RGB")

        dest.parent.mkdir(parents=True, exist_ok=True)
        img.save(dest, format="WEBP", quality=THUMB_QUALITY, method=4)

    entry = {
        "path": rel_path,
        "width": width,
        "height": height,
        "bytes": blob.get("size", len(raw)),
        "sha": blob["sha"],
    }
    return entry, "generated"


def prune_stale_thumbs(active_paths):
    if not THUMBS_DIR.exists():
        return 0
    removed = 0
    for file in THUMBS_DIR.rglob("*.webp"):
        if file not in active_paths:
            file.unlink()
            removed += 1
    return removed


def main():
    blobs = sorted(
        (
            item
            for item in fetch_tree()
            if item["type"] == "blob"
            and "/" in item["path"]
            and Path(item["path"]).suffix.lower() in IMAGE_EXTS
        ),
        key=lambda b: b["path"].lower(),
    )

    cache = load_cache()
    with ThreadPoolExecutor(max_workers=8) as pool:
        results = list(
            pool.map(lambda b: process_entry(b, cache.get(b["path"])), blobs)
        )

    entries = [entry for entry, _ in results]
    generated = sum(1 for _, status in results if status == "generated")
    cached = len(entries) - generated
    removed = prune_stale_thumbs({thumb_path(e["path"]) for e in entries})

    DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    DATA_FILE.write_text(
        json.dumps(entries, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )

    thumb_bytes = sum(thumb_path(e["path"]).stat().st_size for e in entries)
    print(
        f"synced {len(entries)} wallpapers "
        f"(generated={generated}, cached={cached}, removed={removed}, "
        f"thumbs={thumb_bytes / (1024 * 1024):.2f} MiB)"
    )


if __name__ == "__main__":
    main()
