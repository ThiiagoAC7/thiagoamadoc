import rawWallpapers from "./wallpapers.json";

export const WALLPAPERS_REPO = "https://github.com/ThiiagoAC7/wallpapers";
export const WALLPAPERS_RAW_BASE = "https://raw.githubusercontent.com/ThiiagoAC7/wallpapers/main";

type RawWallpaper = {
  path: string;
  width: number;
  height: number;
  bytes: number;
  sha: string;
};

export type WallpaperEntry = {
  id: string;
  title: string;
  filename: string;
  category: string;
  path: string;
  thumb: string;
  width: number;
  height: number;
  bytes: number;
};

function toEntry(raw: RawWallpaper): WallpaperEntry {
  const slash = raw.path.indexOf("/");
  const category = raw.path.slice(0, slash);
  const filename = raw.path.slice(slash + 1);
  const stem = filename.slice(filename.lastIndexOf("/") + 1).replace(/\.[^.]+$/, "");
  const thumbPath = raw.path.replace(/\.[^.]+$/, ".webp");

  return {
    id: `${category}/${stem}`,
    title: stem.replace(/[_-]+/g, " ").trim(),
    filename,
    category,
    path: raw.path,
    thumb: `wallpapers/thumbs/${thumbPath}`,
    width: raw.width,
    height: raw.height,
    bytes: raw.bytes,
  };
}

export const WALLPAPERS: WallpaperEntry[] = (rawWallpapers as RawWallpaper[]).map(toEntry);

export const WALLPAPER_CATEGORIES = Array.from(
  new Set(WALLPAPERS.map((w) => w.category)),
).sort();

export type WallpaperCategory = (typeof WALLPAPER_CATEGORIES)[number];
