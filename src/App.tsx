import * as React from "react";
import clsx from "clsx";

import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  Section,
  SkillsSection,
} from "@/components/CvSections";
import { ProjectList } from "@/components/ProjectList";
import { SidebarRail } from "@/components/SidebarRail";
import { WallpapersPage } from "@/components/WallpapersPage";
import { CV_DATA } from "@/data/cv";
import { PROJECTS } from "@/data/projects";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  applyLang,
  applyTheme,
  readInitialLang,
  readInitialTheme,
  readRoute,
  routeHref,
  type Lang,
  type PageRoute,
  type ThemeMode,
} from "@/lib/preferences";

const SECTION_IDS = CV_DATA.en.sections.map((s) => s.id);
const EMPTY_IDS: string[] = [];
const THESIS_ID = "co-commenter-networks";

export function App() {
  const [theme, setTheme] = React.useState<ThemeMode>(readInitialTheme);
  const [lang, setLang] = React.useState<Lang>(readInitialLang);
  const [route, setRoute] = React.useState<PageRoute>(() => readRoute());
  const activeSection = useActiveSection(route === "cv" ? SECTION_IDS : EMPTY_IDS);

  const copy = CV_DATA[lang];
  const thesisTitle = PROJECTS.find((p) => p.id === THESIS_ID)?.title[lang] ?? "";
  const baseUrl = import.meta.env.BASE_URL;

  React.useEffect(() => {
    applyLang(lang, route);
  }, [lang, route]);

  React.useEffect(() => {
    function onPopState() {
      setRoute(readRoute());
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = React.useCallback(
    (next: PageRoute) => {
      const targetUrl = routeHref(next, baseUrl);
      if (readRoute(window.location.pathname) !== next) {
        window.history.pushState(null, "", targetUrl);
      }
      setRoute(next);
      window.scrollTo({ top: 0, behavior: "auto" });
    },
    [baseUrl]
  );

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  }, []);

  return (
    <div className={clsx("shell", route === "wallpapers" && "is-wide")}>
      <SidebarRail
        copy={copy}
        lang={lang}
        theme={theme}
        route={route}
        baseUrl={baseUrl}
        activeSection={activeSection}
        photoHref={`${baseUrl}photo.JPEG`}
        resumeHref={`${baseUrl}resume.pdf`}
        curriculoHref={`${baseUrl}curriculo.pdf`}
        onNavigate={navigate}
        onSelectLang={setLang}
        onToggleTheme={toggleTheme}
      />

      <main className={clsx("main-col", route === "wallpapers" && "is-wide")}>
        {route === "wallpapers" ? (
          <WallpapersPage lang={lang} baseUrl={baseUrl} />
        ) : (
          <>
            <AboutSection copy={copy} thesisTitle={thesisTitle} />
            <ExperienceSection copy={copy} />
            <EducationSection copy={copy} />

            <Section id="projects" num="04" title={copy.sectionTitles.projects}>
              <ProjectList lang={lang} />
            </Section>

            <SkillsSection copy={copy} />
          </>
        )}

        <footer className="page-foot">
          <span>
            Thiago Amado Costa · {copy.locationLine}
          </span>
          <span>
            {copy.languagesLabel}: {copy.languagesValue}
          </span>
        </footer>
      </main>
    </div>
  );
}

export default App;
