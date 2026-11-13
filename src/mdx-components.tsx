import { Callout } from "@/components/callout";
import { GraphFlow } from "@/components/graph-flow";
import { GraphSpec } from "@/components/graph-spec";
import { GraphStat } from "@/components/graph-stat";
import { GraphTimeline } from "@/components/graph-timeline";
import { MonographHeading } from "@/components/MonographHeading";
import { ProjectArchive } from "@/components/ProjectArchive";
import { Quote } from "@/components/quote";
import { Terminal } from "@/components/terminal";
import { withMdxcn } from "@/lib/mdx";

export const mdxComponents = withMdxcn(
  {
    Callout,
    Quote,
    Terminal,
    GraphTimeline,
    GraphFlow,
    GraphSpec,
    GraphStat,
    Section: MonographHeading,
    ProjectArchive,
  },
  { footnotes: false }
);
