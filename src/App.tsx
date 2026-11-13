import * as React from "react";
import { MDXProvider } from "@mdx-js/react";

import { GraphFrameProvider, GraphRule } from "@/components/ui/graph-frame";
import CVContentEn from "@/content/cv.en.mdx";
import CVContentPt from "@/content/cv.pt.mdx";
import {
  applyLang,
  LangProvider,
  readInitialLang,
  type Lang,
} from "@/lib/lang";
import { mdxComponents } from "@/mdx-components";
import { cn } from "@/lib/utils";

type ThemeMode = "light" | "dark";

const UI_COPY = {
  en: {
    indexHeading: "Index",
    degreeLine: "M.Sc. CS · PUC Minas",
    navAriaLabel: "Curriculum sections",
    jumpAriaLabel: "Jump to section",
    langAriaLabel: "Language selection",
    docsHeading: "Documents & Links",
    badge: "CURRICULUM",
    subtitleParts: [
      "Master's Student in Computer Science",
      "Data Science",
      "Machine Learning",
      "NLP & Graph Theory",
    ],
    emailLabel: "email ↗",
    themeToLight: "☀ light",
    themeToDark: "☾ dark",
    themeAriaLight: "Switch to light mode",
    themeAriaDark: "Switch to dark mode",
    sections: [
      { num: "01", id: "abstract", label: "Abstract" },
      { num: "02", id: "trajectory", label: "Trajectory" },
      { num: "03", id: "research", label: "Research" },
      { num: "04", id: "projects", label: "Projects" },
      { num: "05", id: "stack", label: "Toolkit" },
    ],
  },
  pt: {
    indexHeading: "Índice",
    degreeLine: "Mestrado CC · PUC Minas",
    navAriaLabel: "Seções do currículo",
    jumpAriaLabel: "Ir para seção",
    langAriaLabel: "Seleção de idioma",
    docsHeading: "Documentos & Links",
    badge: "CURRÍCULO",
    subtitleParts: [
      "Mestrando em Ciência da Computação",
      "Ciência de Dados",
      "Machine Learning",
      "PLN & Teoria dos Grafos",
    ],
    emailLabel: "e-mail ↗",
    themeToLight: "☀ claro",
    themeToDark: "☾ escuro",
    themeAriaLight: "Mudar para modo claro",
    themeAriaDark: "Mudar para modo escuro",
    sections: [
      { num: "01", id: "abstract", label: "Resumo" },
      { num: "02", id: "trajectory", label: "Trajetória" },
      { num: "03", id: "research", label: "Pesquisa" },
      { num: "04", id: "projects", label: "Projetos" },
      { num: "05", id: "stack", label: "Ferramentas" },
    ],
  },
} as const;

function readInitialTheme(): ThemeMode {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(mode: ThemeMode) {
  document.documentElement.classList.toggle("dark", mode === "dark");
  document.documentElement.setAttribute("data-theme", mode);
  try {
    localStorage.setItem("tac-theme", mode);
  } catch {
    // ignore storage restriction
  }
}

export function App() {
  const [theme, setTheme] = React.useState<ThemeMode>(readInitialTheme);
  const [lang, setLang] = React.useState<Lang>(readInitialLang);
  const [activeSection, setActiveSection] = React.useState<string>("abstract");

  const copy = UI_COPY[lang];
  const Content = lang === "pt" ? CVContentPt : CVContentEn;

  const baseUrl = import.meta.env.BASE_URL;
  const resumeHref = `${baseUrl}resume.pdf`;
  const curriculoHref = `${baseUrl}curriculo.pdf`;
  const primaryPdfHref = lang === "pt" ? curriculoHref : resumeHref;
  const primaryPdfLabel = lang === "pt" ? "curriculo.pdf ↗" : "resume.pdf ↗";

  React.useEffect(() => {
    applyLang(lang);
  }, [lang]);

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  }, []);

  React.useEffect(() => {
    const elements = UI_COPY[lang].sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-12% 0px -65% 0px", threshold: 0 }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [lang]);

  return (
    <LangProvider lang={lang}>
      <div className="min-h-screen bg-background text-foreground">
        {/* running header bar */}
        <div className="no-print border-b border-border bg-background/95 backdrop-blur-xs">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 text-xs sm:px-8">
            <div className="flex items-center gap-3 text-graph-muted">
              <span className="font-semibold tracking-tight text-foreground">
                Thiago Amado Costa
              </span>
              <span aria-hidden="true" className="hidden text-graph-frame sm:inline">
                |
              </span>
              <span className="hidden sm:inline">Belo Horizonte, BR</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div
                className="flex items-center border border-border"
                role="group"
                aria-label={copy.langAriaLabel}
              >
                {(["en", "pt"] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={cn(
                      "cursor-pointer px-2 py-0.5 uppercase transition-colors",
                      lang === code
                        ? "bg-graph-accent/12 text-graph-accent"
                        : "text-graph-muted hover:text-foreground"
                    )}
                  >
                    {code}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? copy.themeAriaLight : copy.themeAriaDark}
                className="cursor-pointer border border-border px-2.5 py-0.5 text-foreground transition-colors hover:border-graph-accent hover:text-graph-accent"
              >
                {theme === "dark" ? copy.themeToLight : copy.themeToDark}
              </button>

              <a
                href={primaryPdfHref}
                target="_blank"
                rel="noreferrer"
                className="border border-graph-accent/50 bg-graph-accent/10 px-2.5 py-0.5 text-graph-accent transition-colors hover:bg-graph-accent hover:text-background"
              >
                {primaryPdfLabel}
              </a>
            </div>
          </div>
        </div>

        {/* subtle drafting field backdrop framing the center reading sheet */}
        <div className="monograph-field">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <div className="grid grid-cols-1 gap-10 border-x border-border bg-background px-4 py-10 sm:px-8 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-12 lg:px-10 lg:py-14">
              {/* left marginalia rail */}
              <aside className="no-print hidden lg:sticky lg:top-10 lg:block lg:self-start">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1 border-l-2 border-graph-accent pl-3">
                    <span className="text-[11px] tracking-widest text-graph-muted uppercase">
                      {copy.indexHeading}
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      Thiago Amado Costa
                    </span>
                    <span className="text-xs text-graph-muted">
                      {copy.degreeLine}
                    </span>
                  </div>

                  <nav aria-label={copy.navAriaLabel} className="hidden lg:block">
                    <ol className="flex flex-col gap-1.5 text-xs">
                      {copy.sections.map((s) => {
                        const active = activeSection === s.id;
                        return (
                          <li key={s.id}>
                            <a
                              href={`#${s.id}`}
                              className={cn(
                                "flex items-center justify-between py-1 transition-colors",
                                active
                                  ? "font-semibold text-graph-accent"
                                  : "text-graph-muted hover:text-foreground"
                              )}
                            >
                              <span>
                                <span className="mr-2 tabular-nums">{s.num}</span>
                                {s.label}
                              </span>
                              <span
                                aria-hidden="true"
                                className={cn(
                                  "text-[10px]",
                                  active ? "text-graph-accent" : "text-transparent"
                                )}
                              >
                                ◀
                              </span>
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  </nav>

                  <GraphRule className="hidden lg:block" />

                  <div className="hidden flex-col gap-1.5 text-xs lg:flex">
                    <span className="text-[11px] tracking-widest text-graph-muted uppercase">
                      {copy.docsHeading}
                    </span>
                    <a
                      href={resumeHref}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "hover:text-graph-accent",
                        lang === "en" ? "text-foreground" : "text-graph-muted"
                      )}
                    >
                      resume.pdf (EN) ↗
                    </a>
                    <a
                      href={curriculoHref}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "hover:text-graph-accent",
                        lang === "pt" ? "text-foreground" : "text-graph-muted"
                      )}
                    >
                      curriculo.pdf (PT) ↗
                    </a>
                    <a
                      href="https://github.com/ThiiagoAC7"
                      target="_blank"
                      rel="noreferrer"
                      className="text-graph-muted hover:text-graph-accent"
                    >
                      github.com/ThiiagoAC7 ↗
                    </a>
                    <a
                      href="https://www.linkedin.com/in/thiagoamadocosta/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-graph-muted hover:text-graph-accent"
                    >
                      linkedin ↗
                    </a>
                    <a
                      href="mailto:thiagoamadocosta@gmail.com"
                      className="text-graph-muted hover:text-graph-accent"
                    >
                      {copy.emailLabel}
                    </a>
                  </div>
                </div>
              </aside>

              {/* main sheet */}
              <main className="min-w-0 max-w-[76ch]">
                {/* masthead */}
                <header className="pb-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-graph-muted">
                    <span className="border border-border bg-surface px-2 py-0.5 text-foreground">
                      {copy.badge}
                    </span>
                  </div>

                  <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Thiago Amado Costa
                  </h1>

                  <p className="mt-2 text-sm text-graph-muted sm:text-base">
                    {copy.subtitleParts.map((part, i) => (
                      <React.Fragment key={part}>
                        {i > 0 ? <span className="text-graph-frame"> / </span> : null}
                        {part}
                      </React.Fragment>
                    ))}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                    <a
                      href="mailto:thiagoamadocosta@gmail.com"
                      className="text-foreground underline decoration-dashed decoration-graph-frame underline-offset-4 hover:text-graph-accent hover:decoration-graph-accent"
                    >
                      thiagoamadocosta@gmail.com
                    </a>
                    <span aria-hidden="true" className="text-graph-frame">
                      ·
                    </span>
                    <a
                      href="https://github.com/ThiiagoAC7"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground underline decoration-dashed decoration-graph-frame underline-offset-4 hover:text-graph-accent hover:decoration-graph-accent"
                    >
                      GitHub
                    </a>
                    <span aria-hidden="true" className="text-graph-frame">
                      ·
                    </span>
                    <a
                      href="https://www.linkedin.com/in/thiagoamadocosta/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground underline decoration-dashed decoration-graph-frame underline-offset-4 hover:text-graph-accent hover:decoration-graph-accent"
                    >
                      LinkedIn
                    </a>
                  </div>

                  {/* mobile quick section jump strip */}
                  <nav
                    aria-label={copy.jumpAriaLabel}
                    className="no-print mt-5 flex flex-wrap gap-1.5 lg:hidden"
                  >
                    {copy.sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="border border-border bg-surface px-2 py-0.5 text-xs text-foreground hover:border-graph-accent hover:text-graph-accent"
                      >
                        {s.num} {s.label}
                      </a>
                    ))}
                  </nav>
                </header>

                <GraphFrameProvider frame="box">
                  <MDXProvider components={mdxComponents}>
                    <article className="monograph-prose">
                      <Content />
                    </article>
                  </MDXProvider>
                </GraphFrameProvider>

                <footer className="mt-14 pt-6 text-xs text-graph-muted">
                  <GraphRule className="mb-4" />
                  <div>
                    <span>Thiago Amado Costa · Belo Horizonte, MG</span>
                  </div>
                </footer>
              </main>
            </div>
          </div>
        </div>
      </div>
    </LangProvider>
  );
}

export default App;
