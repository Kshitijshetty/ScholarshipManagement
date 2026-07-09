export default function StatCard({
  icon: Icon,
  label,
  metric,
  supportingLabel,
  helperText,
  buttonLabel,
  onButtonClick,
}) {
  return (
    <div className="flex h-full flex-col rounded-[18px] border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-2">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-ink-soft">
          <Icon width={19} height={19} />
        </span>
        <span className="pt-1 text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
          {label}
        </span>
      </div>

      <div className="mt-4">
        <p className="font-display text-[36px] leading-none tracking-[0.01em] text-ink">
          {metric}
        </p>
        <p className="mt-1.5 text-[13px] font-medium text-ink-soft">
          {supportingLabel}
        </p>
      </div>

      <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-ink-faint">
        {helperText}
      </p>

      <button
        onClick={onButtonClick}
        className="mt-4 self-start rounded-lg border border-border px-4 py-2 text-[12.5px] font-medium text-ink-soft transition-colors hover:bg-surface-muted hover:text-ink"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
