import * as React from "react";

import { PROJECTS, type ProjectEntry } from "@/data/projects";
import type { Lang } from "@/lib/preferences";

const COPY = {
  en: {
    showMore: (n: number) => `Show ${n} more projects`,
    showLess: "Hide extra entries",
    repo: "repo ↗",
    ongoing: "ongoing",
  },
  pt: {
    showMore: (n: number) => `Mostrar mais ${n} projetos`,
    showLess: "Ocultar projetos extras",
    repo: "repo ↗",
    ongoing: "em andamento",
  },
} as const;

function ProjectRow({ project, lang }: { project: ProjectEntry; lang: Lang }) {
  const copy = COPY[lang];
  const highlights = project.highlights[lang];

  return (
    <article className="pub">
      <div className="pub-top">
        <h3 className="pub-title">{project.title[lang]}</h3>
        <span className="pub-meta">
          {project.year[lang]}
          {project.github ? (
            <>
              {" · "}
              <a href={project.github} target="_blank" rel="noreferrer">
                {copy.repo}
              </a>
            </>
          ) : project.ongoing ? (
            ` · ${copy.ongoing}`
          ) : null}
        </span>
      </div>

      {highlights.length === 1 ? (
        <p className="pub-desc">{highlights[0]}</p>
      ) : (
        <ul className="pub-bullets">
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      <div className="pub-tags">{project.technologies.join(" · ")}</div>
    </article>
  );
}

export function ProjectList({ lang }: { lang: Lang }) {
  const [expanded, setExpanded] = React.useState(false);
  const copy = COPY[lang];
  const featured = PROJECTS.filter((p) => p.featured);
  const extra = PROJECTS.filter((p) => !p.featured);

  return (
    <div>
      {featured.map((project) => (
        <ProjectRow key={project.id} project={project} lang={lang} />
      ))}

      {expanded ? (
        <div className="extra-wrap">
          {extra.map((project) => (
            <ProjectRow key={project.id} project={project} lang={lang} />
          ))}
        </div>
      ) : null}

      {extra.length > 0 ? (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="no-print more-btn"
        >
          {expanded ? copy.showLess : copy.showMore(extra.length)}
        </button>
      ) : null}
    </div>
  );
}
