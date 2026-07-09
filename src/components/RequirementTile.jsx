function stateFor(status) {
  const s = status.toLowerCase();
  if (s.includes("missing")) return "danger";
  if (s.includes("complete") || s.includes("uploaded") || s.includes("received"))
    return "success";
  return "warning";
}

const dotStyles = {
  success: "bg-[var(--color-success-text)]",
  warning: "bg-[var(--color-warning-text)]",
  danger: "bg-[var(--color-danger-text)]",
};

export default function RequirementTile({ label, status }) {
  const state = stateFor(status);

  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-muted px-3.5 py-2.5">
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotStyles[state]}`} />
      <div className="min-w-0">
        <p className="truncate text-[12.5px] font-semibold text-ink">{label}</p>
        <p className="truncate text-[12px] text-ink-soft">{status}</p>
      </div>
    </div>
  );
}
