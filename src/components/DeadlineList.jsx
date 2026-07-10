const accentColors = {
  danger: "var(--color-danger-text)",
  warning: "var(--color-warning-text)",
};

export default function DeadlineList({ deadlines }) {
  return (
    <section className="rounded-[18px] border border-border bg-surface p-5">
      <h3 className="text-[15px] font-semibold text-ink">Upcoming deadlines</h3>

      <div className="mt-4 flex flex-col gap-3">
        {deadlines.map((d) => {
          const accent = accentColors[d.accent];

          return (
            <a
              key={d.id}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex cursor-pointer items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 transition-colors hover:border-ink-faint/50 hover:bg-surface-muted"
            >
              <div className="flex shrink-0 flex-col items-center leading-none">
                <span
                  className="font-display text-[34px] leading-none tracking-[0.01em]"
                  style={{ color: accent ?? "var(--color-ink)" }}
                >
                  {d.day}
                </span>
                <span
                  className="mt-1 font-display text-[12px] leading-none tracking-[0.1em]"
                  style={{ color: accent ?? "var(--color-ink-faint)" }}
                >
                  {d.month}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className="text-[13px] font-medium"
                  style={{ color: accent ?? "var(--color-ink-faint)" }}
                >
                  {d.timeRemaining}
                </p>
                <p className="mt-1 truncate text-[19px] font-semibold text-ink">{d.title}</p>
                <p className="mt-1 text-[13px] text-ink-soft">{d.metadata}</p>
                <p className="mt-3 text-[10.5px] font-semibold uppercase tracking-wide text-ink-faint">
                  {d.provider}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
