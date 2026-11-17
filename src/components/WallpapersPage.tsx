import * as React from "react";
import clsx from "clsx";

import {
  WALLPAPERS,
  WALLPAPERS_RAW_BASE,
  WALLPAPERS_REPO,
  WALLPAPER_CATEGORIES,
  type WallpaperEntry,
} from "@/data/wallpapers";
import type { Lang } from "@/lib/preferences";

const COPY = {
  en: {
    title: "Wallpapers",
    lead: "Desktop wallpapers from my Linux setup, grouped by palette and theme. Thumbnails load locally; selecting an image previews and downloads the full-resolution source.",
    repoLabel: "ThiiagoAC7/wallpapers ↗",
    all: "all",
    filterPlaceholder: "filter by name...",
    clearFilter: "clear",
    showing: (shown: number, total: number) => `${shown} of ${total}`,
    empty: "No wallpapers match that filter.",
    reset: "Reset filters",
    download: "Download",
    downloading: "Saving...",
    openRaw: "Open original ↗",
    viewGitHub: "GitHub ↗",
    prev: "← prev",
    next: "next →",
    close: "esc",
    closeAria: "Close wallpaper preview",
    loadingOriginal: "loading original...",
    downloadAria: (name: string) => `Download ${name}`,
    previewAria: (name: string) => `Preview ${name}`,
  },
  pt: {
    title: "Wallpapers",
    lead: "Papéis de parede do meu ambiente Linux, organizados por paleta e tema. As miniaturas carregam localmente; ao selecionar uma imagem, a versão original em alta resolução é exibida e fica disponível para download.",
    repoLabel: "ThiiagoAC7/wallpapers ↗",
    all: "todos",
    filterPlaceholder: "filtrar por nome...",
    clearFilter: "limpar",
    showing: (shown: number, total: number) => `${shown} de ${total}`,
    empty: "Nenhum wallpaper corresponde ao filtro.",
    reset: "Limpar filtros",
    download: "Baixar",
    downloading: "Baixando...",
    openRaw: "Abrir original ↗",
    viewGitHub: "GitHub ↗",
    prev: "← ant",
    next: "próx →",
    close: "esc",
    closeAria: "Fechar visualização do wallpaper",
    loadingOriginal: "carregando original...",
    downloadAria: (name: string) => `Baixar ${name}`,
    previewAria: (name: string) => `Visualizar ${name}`,
  },
} as const;

function rawUrl(path: string) {
  return `${WALLPAPERS_RAW_BASE}/${path.split("/").map(encodeURIComponent).join("/")}`;
}

function githubUrl(path: string) {
  return `${WALLPAPERS_REPO}/blob/main/${path.split("/").map(encodeURIComponent).join("/")}`;
}

function formatBytes(bytes: number) {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MiB`;
  }
  return `${Math.round(bytes / 1024)} KiB`;
}

async function triggerDownload(item: WallpaperEntry) {
  const url = rawUrl(item.path);
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("download failed");
    const blob = await resp.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = item.filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  } catch {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export function WallpapersPage({ lang, baseUrl }: { lang: Lang; baseUrl: string }) {
  const copy = COPY[lang];
  const [category, setCategory] = React.useState<string>("all");
  const [query, setQuery] = React.useState("");
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [rawLoaded, setRawLoaded] = React.useState(false);
  const [downloadingId, setDownloadingId] = React.useState<string | null>(null);

  const counts = React.useMemo(() => {
    const map = new Map<string, number>();
    for (const item of WALLPAPERS) {
      map.set(item.category, (map.get(item.category) ?? 0) + 1);
    }
    return map;
  }, []);

  const filtered = React.useMemo(() => {
    const needle = query.trim().toLowerCase();
    return WALLPAPERS.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (!needle) return true;
      return (
        item.title.toLowerCase().includes(needle) ||
        item.filename.toLowerCase().includes(needle) ||
        item.category.toLowerCase().includes(needle)
      );
    });
  }, [category, query]);

  const selectedIndex = React.useMemo(() => {
    if (!selectedId) return -1;
    return filtered.findIndex((item) => item.id === selectedId);
  }, [filtered, selectedId]);

  const selected = selectedIndex >= 0 ? filtered[selectedIndex] : null;

  React.useEffect(() => {
    setRawLoaded(false);
  }, [selected?.id]);

  React.useEffect(() => {
    if (!selected) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedId(null);
      } else if (e.key === "ArrowLeft" && filtered.length > 1) {
        const prev = (selectedIndex - 1 + filtered.length) % filtered.length;
        setSelectedId(filtered[prev].id);
      } else if (e.key === "ArrowRight" && filtered.length > 1) {
        const next = (selectedIndex + 1) % filtered.length;
        setSelectedId(filtered[next].id);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, selectedIndex, filtered]);

  async function handleDownload(item: WallpaperEntry) {
    if (downloadingId === item.id) return;
    setDownloadingId(item.id);
    try {
      await triggerDownload(item);
    } finally {
      setDownloadingId((curr) => (curr === item.id ? null : curr));
    }
  }

  return (
    <section className="sec wp-page">
      <div className="sec-head wp-head">
        <h2>{copy.title}</h2>
        <span className="wp-head-meta">
          {WALLPAPERS.length} ·{" "}
          <a href={WALLPAPERS_REPO} target="_blank" rel="noreferrer">
            {copy.repoLabel}
          </a>
        </span>
      </div>

      <p className="wp-lead">{copy.lead}</p>

      <div className="wp-toolbar">
        <div className="wp-cats" role="tablist" aria-label={copy.title}>
          <button
            type="button"
            role="tab"
            aria-selected={category === "all"}
            onClick={() => setCategory("all")}
            className={clsx("wp-cat-btn", category === "all" && "is-active")}
          >
            {copy.all} ({WALLPAPERS.length})
          </button>
          {WALLPAPER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={category === cat}
              onClick={() => setCategory(cat)}
              className={clsx("wp-cat-btn", category === cat && "is-active")}
            >
              {cat} ({counts.get(cat) ?? 0})
            </button>
          ))}
        </div>

        <div className="wp-search-wrap">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={copy.filterPlaceholder}
            aria-label={copy.filterPlaceholder}
            className="wp-search"
          />
          {query || category !== "all" ? (
            <span className="wp-count">{copy.showing(filtered.length, WALLPAPERS.length)}</span>
          ) : null}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="wp-empty">
          <p>{copy.empty}</p>
          <button
            type="button"
            onClick={() => {
              setCategory("all");
              setQuery("");
            }}
            className="more-btn"
          >
            {copy.reset}
          </button>
        </div>
      ) : (
        <div className="wp-grid">
          {filtered.map((item) => (
            <article key={item.id} className="wp-card">
              <button
                type="button"
                onClick={() => setSelectedId(item.id)}
                aria-label={copy.previewAria(item.title)}
                className="wp-thumb-btn"
              >
                <img
                  src={`${baseUrl}${item.thumb}`}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="wp-thumb"
                />
              </button>
              <div className="wp-card-foot">
                <div className="wp-card-text">
                  <div className="wp-card-title" title={item.filename}>
                    {item.title}
                  </div>
                  <div className="wp-card-sub">
                    {item.width}×{item.height} · {item.category}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleDownload(item)}
                  aria-label={copy.downloadAria(item.filename)}
                  title={copy.downloadAria(item.filename)}
                  disabled={downloadingId === item.id}
                  className="wp-dl-btn"
                >
                  {downloadingId === item.id ? "…" : "↓"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {selected ? (
        <div
          className="no-print wp-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedId(null);
          }}
        >
          <div className="wp-dialog">
            <div className="wp-dialog-head">
              <div className="wp-dialog-title-wrap">
                <strong className="wp-dialog-title">{selected.filename}</strong>
                <span className="wp-dialog-meta">
                  {selected.category} · {selected.width}×{selected.height} ·{" "}
                  {formatBytes(selected.bytes)} · {selectedIndex + 1}/{filtered.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                aria-label={copy.closeAria}
                className="wp-btn"
              >
                {copy.close}
              </button>
            </div>

            <div className="wp-dialog-stage">
              <div
                className="wp-stage-frame"
                style={{ "--wp-ratio": String(selected.width / selected.height) } as React.CSSProperties}
              >
                <img
                  src={`${baseUrl}${selected.thumb}`}
                  alt=""
                  aria-hidden="true"
                  className="wp-stage-img wp-stage-thumb"
                />
                <img
                  key={selected.id}
                  src={rawUrl(selected.path)}
                  alt={selected.title}
                  onLoad={() => setRawLoaded(true)}
                  className={clsx("wp-stage-img wp-stage-raw", rawLoaded && "is-loaded")}
                />
              </div>
              {!rawLoaded ? <span className="wp-stage-status">{copy.loadingOriginal}</span> : null}
            </div>

            <div className="wp-dialog-foot">
              <div className="wp-dialog-nav">
                <button
                  type="button"
                  disabled={filtered.length <= 1}
                  onClick={() => {
                    const prev = (selectedIndex - 1 + filtered.length) % filtered.length;
                    setSelectedId(filtered[prev].id);
                  }}
                  className="wp-btn"
                >
                  {copy.prev}
                </button>
                <button
                  type="button"
                  disabled={filtered.length <= 1}
                  onClick={() => {
                    const next = (selectedIndex + 1) % filtered.length;
                    setSelectedId(filtered[next].id);
                  }}
                  className="wp-btn"
                >
                  {copy.next}
                </button>
              </div>

              <div className="wp-dialog-actions">
                <a href={githubUrl(selected.path)} target="_blank" rel="noreferrer" className="wp-link-btn">
                  {copy.viewGitHub}
                </a>
                <a href={rawUrl(selected.path)} target="_blank" rel="noreferrer" className="wp-link-btn">
                  {copy.openRaw}
                </a>
                <button
                  type="button"
                  onClick={() => handleDownload(selected)}
                  disabled={downloadingId === selected.id}
                  className="wp-btn is-primary"
                >
                  {downloadingId === selected.id ? copy.downloading : copy.download}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
