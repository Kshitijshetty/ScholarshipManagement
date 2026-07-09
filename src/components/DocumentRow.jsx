const badgeStyles = {
  complete: "bg-[var(--color-success-bg)] text-[var(--color-success-text)]",
  missing: "bg-[var(--color-danger-bg)] text-[var(--color-danger-text)]",
};

function StatusIcon({ state }) {
  if (state === "missing") {
    return (
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-[var(--color-danger-text)]">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
          <path d="M14 3v5h5" />
        </svg>
      </span>
    );
  }
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-success-bg)] text-[var(--color-success-text)]">
      <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 6.2 5 8.7l4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function DocumentRow({
  label,
  badge,
  state,
  note,
  fileName,
  buttonLabel,
  onButtonClick,
  prominent,
  children,
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        prominent
          ? "border-[var(--color-danger-text)]/25 bg-[var(--color-danger-bg)]/35"
          : "border-border bg-surface-muted"
      }`}
    >
      <div className="flex items-center gap-3">
        <StatusIcon state={state} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[13.5px] font-semibold text-ink">{label}</p>
            <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${badgeStyles[state]}`}>
              {badge}
            </span>
          </div>
          {fileName && <p className="mt-0.5 truncate text-[12px] text-ink-soft">{fileName}</p>}
          {note && (
            <p className="mt-0.5 text-[12px] font-medium text-[var(--color-danger-text)]">{note}</p>
          )}
        </div>
        {buttonLabel && (
          <button
            onClick={onButtonClick}
            className="shrink-0 rounded-lg border border-border bg-surface px-3.5 py-2 text-[12.5px] font-semibold text-ink-soft transition-colors hover:bg-surface-muted hover:text-ink"
          >
            {buttonLabel}
          </button>
        )}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
