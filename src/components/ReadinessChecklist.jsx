function StateIcon({ state }) {
  if (state === "complete") {
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-success-text)] text-white">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6.2 5 8.7l4.5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (state === "in-progress") {
    return (
      <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-warning-text)]">
        <span
          className="absolute inset-0 rounded-full"
          style={{ background: "conic-gradient(var(--color-warning-text) 180deg, transparent 180deg)" }}
        />
      </span>
    );
  }
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-danger-bg)] text-[var(--color-danger-text)]">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path d="M3 3l6 6M9 3 3 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function ReadinessChecklist({ items }) {
  return (
    <section className="rounded-[18px] border border-border bg-surface p-5">
      <h3 className="text-[15px] font-semibold text-ink">Application readiness</h3>
      <ul className="mt-3 space-y-1">
        {items.map((item) => (
          <li
            key={item.label}
            className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 ${
              item.state === "missing" ? "bg-[var(--color-danger-bg)]/60" : ""
            }`}
          >
            <StateIcon state={item.state} />
            <span
              className={`text-[13.5px] ${
                item.state === "missing"
                  ? "font-medium text-[var(--color-danger-text)]"
                  : item.state === "complete"
                    ? "text-ink-soft"
                    : "text-ink"
              }`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
