import * as React from "react";

export function useActiveSection(ids: string[], initial = "about") {
  const [active, setActive] = React.useState(initial);

  React.useEffect(() => {
    if (ids.length === 0) return;
    let rafId = 0;

    function update() {
      rafId = 0;
      const atBottom =
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;

      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      const trigger = Math.min(200, window.innerHeight * 0.28);
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= trigger) {
          current = id;
        }
      }

      setActive(current);
    }

    function schedule() {
      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids]);

  return active;
}
