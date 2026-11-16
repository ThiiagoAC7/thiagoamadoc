import clsx from "clsx";

import type { CvCopy } from "@/data/cv";
import type { Lang, ThemeMode } from "@/lib/preferences";

type SidebarRailProps = {
  copy: CvCopy;
  lang: Lang;
  theme: ThemeMode;
  activeSection: string;
  photoHref: string;
  resumeHref: string;
  curriculoHref: string;
  onSelectLang: (lang: Lang) => void;
  onToggleTheme: () => void;
};

export function SidebarRail({
  copy,
  lang,
  theme,
  activeSection,
  photoHref,
  resumeHref,
  curriculoHref,
  onSelectLang,
  onToggleTheme,
}: SidebarRailProps) {
  return (
    <aside className="rail">
      <div className="rail-head">
        <div className="avatar-slot">
          <img src={photoHref} alt="Thiago Amado Costa" className="avatar-img" />
        </div>
        <div>
          <h1 className="rail-name">Thiago Amado Costa</h1>
          <p className="rail-sub">
            {copy.degreeLine}
            <br />
            {copy.locationLine}
          </p>
        </div>
      </div>

      <nav aria-label={copy.navAriaLabel} className="no-print rail-nav">
        {copy.sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={clsx(activeSection === section.id && "is-active")}
          >
            <span>{section.num}.</span> {section.label}
          </a>
        ))}
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
