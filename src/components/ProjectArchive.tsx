import * as React from "react";

import {
  Graph,
  GraphBody,
  GraphRule,
} from "@/components/ui/graph-frame";
import { PROJECTS } from "@/data/projects";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";

const COPY = {
  en: {
    title: "PROJECTS",
    repo: "GitHub Repo ↗",
    ongoing: "[ ongoing ]",
  },
  pt: {
    title: "PROJETOS",
    repo: "Repositório GitHub ↗",
    ongoing: "[ em andamento ]",
  },
} as const;

export function ProjectArchive() {
  const lang = useLang();
  const copy = COPY[lang];

  return (
    <div className="my-plate">
      <Graph title={copy.title}>
        <GraphBody className="flex flex-col gap-5">
          {PROJECTS.map((project, index) => {
            const highlights = project.highlights[lang];
            return (
              <React.Fragment key={project.id}>
                {index > 0 ? <GraphRule /> : null}
                <article className="flex flex-col gap-2">
                  <div className="grid grid-cols-1 items-baseline gap-x-6 gap-y-1 sm:grid-cols-[minmax(0,1fr)_auto]">
                    <h3
                      className={cn(
                        "text-sm font-semibold",
                        project.ongoing ? "text-graph-accent" : "text-foreground"
                      )}
                    >
                      <span className="mr-2 font-normal text-graph-muted tabular-nums">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      {project.title[lang]}
                    </h3>

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="no-prose-link shrink-0 text-xs text-foreground underline decoration-dashed decoration-graph-frame underline-offset-4 hover:text-graph-accent hover:decoration-graph-accent"
                      >
                        {copy.repo}
                      </a>
                    ) : (
                      <span className="shrink-0 text-xs text-graph-accent">
                        {copy.ongoing}
                      </span>
                    )}
                  </div>

                  {highlights.length === 1 ? (
                    <p className="text-sm leading-relaxed text-foreground">
                      {highlights[0]}
                    </p>
                  ) : (
                    <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-foreground">
                      {highlights.map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-4 before:absolute before:left-0 before:text-graph-muted before:content-['-']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="text-xs italic text-graph-muted">
                    {project.technologies.join(" · ")}
                  </p>
                </article>
              </React.Fragment>
            );
          })}
        </GraphBody>
      </Graph>
    </div>
  );
}
