import * as React from "react";
import clsx from "clsx";

import type { CvCopy } from "@/data/cv";
import { routeHref, type Lang, type PageRoute, type ThemeMode } from "@/lib/preferences";

type SidebarRailProps = {
  copy: CvCopy;
  lang: Lang;
  theme: ThemeMode;
  route: PageRoute;
  baseUrl: string;
  activeSection: string;
  photoHref: string;
  resumeHref: string;
  curriculoHref: string;
  onNavigate: (route: PageRoute) => void;
  onSelectLang: (lang: Lang) => void;
  onToggleTheme: () => void;
};

function isPlainLeftClick(e: React.MouseEvent<HTMLAnchorElement>) {
  return e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}

export function SidebarRail({
  copy,
  lang,
  theme,
  route,
  baseUrl,
  activeSection,
  photoHref,
  resumeHref,
  curriculoHref,
  onNavigate,
  onSelectLang,
  onToggleTheme,
}: SidebarRailProps) {
  const cvUrl = routeHref("cv", baseUrl);
  const wallpapersUrl = routeHref("wallpapers", baseUrl);

  function handleRouteClick(target: PageRoute) {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isPlainLeftClick(e)) return;
      e.preventDefault();
      onNavigate(target);
    };
  }

  return (
    <aside className="rail">
      <div className="rail-head">
        <a href={cvUrl} onClick={handleRouteClick("cv")} className="avatar-slot">
          <img src={photoHref} alt="Thiago Amado Costa" className="avatar-img" />
        </a>
        <div>
          <h1 className="rail-name">
            <a href={cvUrl} onClick={handleRouteClick("cv")} className="rail-name-link">
              Thiago Amado Costa
            </a>
          </h1>
          <p className="rail-sub">
            {copy.degreeLine}
            <br />
            {copy.locationLine}
          </p>
        </div>
      </div>

      <nav aria-label={copy.navAriaLabel} className="no-print rail-nav">
        {route === "cv" ? (
          <>
            {copy.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={clsx(activeSection === section.id && "is-active")}
              >
                <span>{section.num}.</span> {section.label}
              </a>
            ))}
            <a
              href={wallpapersUrl}
              onClick={handleRouteClick("wallpapers")}
              className="rail-page-link"
            >
              <span>→</span> {copy.wallpapersLabel}
            </a>
          </>
        ) : (
          <>
            <a href={cvUrl} onClick={handleRouteClick("cv")}>
              {copy.backToCvLabel}
            </a>
            <a
              href={wallpapersUrl}
              onClick={handleRouteClick("wallpapers")}
              className="is-active"
            >
              <span>•</span> {copy.wallpapersLabel}
            </a>
          </>
        )}
      </nav>

      <div className="rail-links">
        <a href="mailto:thiagoamadocosta@gmail.com">{copy.emailLabel}</a>
        <a href="https://github.com/ThiiagoAC7" target="_blank" rel="noreferrer">
          github ↗
        </a>
        <a
          href="https://www.linkedin.com/in/thiagoamadocosta/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin ↗
        </a>
        <a
          href={resumeHref}
          target="_blank"
          rel="noreferrer"
          className={clsx(lang === "en" && "is-primary-doc")}
        >
          resume.pdf ↗
        </a>
        <a
          href={curriculoHref}
          target="_blank"
          rel="noreferrer"
          className={clsx(lang === "pt" && "is-primary-doc")}
        >
          curriculo.pdf ↗
        </a>
      </div>

      <div className="no-print rail-controls">
        <div className="lang-switch" role="group" aria-label={copy.langAriaLabel}>
          {(["en", "pt"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => onSelectLang(code)}
              aria-pressed={lang === code}
              className={clsx("lang-btn", lang === code && "is-active")}
            >
              {code}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? copy.themeAriaLight : copy.themeAriaDark}
          className="theme-btn"
        >
          {theme === "dark" ? copy.themeToLight : copy.themeToDark}
        </button>
      </div>
    </aside>
  );
}
