import { GraphRule } from "@/components/ui/graph-frame";

type MonographHeadingProps = {
  num: string;
  id: string;
  title: string;
  kicker?: string;
};

export function MonographHeading({
  num,
  id,
  title,
  kicker,
}: MonographHeadingProps) {
  return (
    <header
      id={id}
      className="scroll-mt-10 pt-10 first:pt-2 pb-4"
    >
      <div className="flex items-baseline justify-between gap-4 pb-2">
        <div className="flex items-baseline gap-3">
          <span className="text-xs tracking-widest text-graph-accent uppercase tabular-nums">
            {num}
          </span>
          <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
            {title}
          </h2>
        </div>
        {kicker ? (
          <span className="hidden text-xs tracking-wider text-graph-muted uppercase sm:inline">
            {kicker}
          </span>
        ) : null}
      </div>
      <GraphRule />
    </header>
  );
}
