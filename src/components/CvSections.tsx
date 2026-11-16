import * as React from "react";

import type { CvCopy } from "@/data/cv";

export function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="sec">
      <div className="sec-head">
        <h2>
          <span className="sec-num">{num}</span>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function EntryRow({
  period,
  heading,
  org,
  summary,
  stack,
}: {
  period: string;
  heading: string;
  org: string;
  summary: string;
  stack?: string;
}) {
  return (
    <div className="entry">
      <div className="entry-date">{period}</div>
      <div>
        <h3 className="entry-title">
          {heading} <span className="entry-org">— {org}</span>
        </h3>
        <p className="entry-desc">{summary}</p>
        {stack ? <p className="entry-stack">{stack}</p> : null}
      </div>
    </div>
  );
}

export function AboutSection({ copy, thesisTitle }: { copy: CvCopy; thesisTitle: string }) {
  return (
    <Section id="about" num="01" title={copy.sectionTitles.about}>
      <p className="bio-lead">{copy.bio}</p>
      <div className="thesis-box">
        <div className="thesis-label">{copy.thesisLabel}</div>
        <p>
          <strong>{thesisTitle}</strong> — {copy.thesisSummary}
        </p>
      </div>
      <div className="interests">
        {copy.interestsLabel}: {copy.interests.join(" · ")}
      </div>
    </Section>
  );
}

export function ExperienceSection({ copy }: { copy: CvCopy }) {
  return (
    <Section id="experience" num="02" title={copy.sectionTitles.experience}>
      <div>
        {copy.experience.map((item) => (
          <EntryRow
            key={`${item.period}-${item.org}`}
            period={item.period}
            heading={item.role}
            org={item.org}
            summary={item.summary}
            stack={item.stack}
          />
        ))}
      </div>
    </Section>
  );
}

export function EducationSection({ copy }: { copy: CvCopy }) {
  return (
    <Section id="education" num="03" title={copy.sectionTitles.education}>
      <div>
        {copy.education.map((item) => (
          <EntryRow
            key={`${item.period}-${item.org}`}
            period={item.period}
            heading={item.degree}
            org={item.org}
            summary={item.detail}
          />
        ))}
      </div>
    </Section>
  );
}

export function SkillsSection({ copy }: { copy: CvCopy }) {
  return (
    <Section id="skills" num="05" title={copy.sectionTitles.skills}>
      <div>
        {copy.toolkit.map((row) => (
          <div key={row.group} className="skill-row">
            <div className="skill-k">{row.group}</div>
            <div className="skill-v">{row.items}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
