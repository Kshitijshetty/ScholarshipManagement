const badgeStyles = {
  urgent: "bg-[var(--color-danger-bg)] text-[var(--color-danger-text)]",
  medium: "bg-[var(--color-warning-bg)] text-[var(--color-warning-text)]",
  ready: "bg-[var(--color-success-bg)] text-[var(--color-success-text)]",
};

export default function ActionPanel({ panel, priority, onPrimaryAction, onSecondaryAction }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-surface-muted p-4">
      <div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11.5px] font-semibold uppercase tracking-wide text-ink-faint">
            {panel.title}
          </p>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${badgeStyles[priority]}`}
          >
            {panel.badge}
          </span>
        </div>

        <p className="mt-3 text-[14px] font-semibold text-ink">{panel.task}</p>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">
          {panel.description}
        </p>
      </div>

      <div className="mt-4 flex flex-col items-start gap-2">
        <button
          onClick={onPrimaryAction}
          className="w-full rounded-lg bg-primary px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-primary-hover"
        >
          {panel.primaryAction}
        </button>
        {panel.secondaryAction && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSecondaryAction?.();
            }}
            className="text-[12.5px] font-medium text-ink-soft underline decoration-ink-faint/40 underline-offset-4 hover:text-ink hover:decoration-ink/50"
          >
            {panel.secondaryAction}
          </a>
        )}
      </div>
    </div>
  );
}
