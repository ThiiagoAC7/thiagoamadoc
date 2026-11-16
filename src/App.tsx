import * as React from "react";

import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  Section,
  SkillsSection,
} from "@/components/CvSections";
import { ProjectList } from "@/components/ProjectList";
import { SidebarRail } from "@/components/SidebarRail";
import { CV_DATA } from "@/data/cv";
import { PROJECTS } from "@/data/projects";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  applyLang,
  applyTheme,
  readInitialLang,
  readInitialTheme,
  type Lang,
  type ThemeMode,
} from "@/lib/preferences";

const SECTION_IDS = CV_DATA.en.sections.map((s) => s.id);
const THESIS_ID = "co-commenter-networks";

export function App() {
  const [theme, setTheme] = React.useState<ThemeMode>(readInitialTheme);
  const [lang, setLang] = React.useState<Lang>(readInitialLang);
  const activeSection = useActiveSection(SECTION_IDS);

  const copy = CV_DATA[lang];
  const thesisTitle = PROJECTS.find((p) => p.id === THESIS_ID)?.title[lang] ?? "";
  const baseUrl = import.meta.env.BASE_URL;

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

  return (
    <div className="shell">
      <SidebarRail
        copy={copy}
        lang={lang}
        theme={theme}
        activeSection={activeSection}
        photoHref={`${baseUrl}photo.JPEG`}
        resumeHref={`${baseUrl}resume.pdf`}
        curriculoHref={`${baseUrl}curriculo.pdf`}
        onSelectLang={setLang}
        onToggleTheme={toggleTheme}
      />

      <main className="main-col">
        <AboutSection copy={copy} thesisTitle={thesisTitle} />
        <ExperienceSection copy={copy} />
        <EducationSection copy={copy} />

        <Section id="projects" num="04" title={copy.sectionTitles.projects}>
          <ProjectList lang={lang} />
        </Section>

        <SkillsSection copy={copy} />

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
