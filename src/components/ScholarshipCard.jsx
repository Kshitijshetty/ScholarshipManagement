import ScholarshipVisual from "./ScholarshipVisual";
import RequirementTile from "./RequirementTile";
import ActionPanel from "./ActionPanel";

const statusBadgeStyles = {
  urgent: "bg-[var(--color-danger-bg)] text-[var(--color-danger-text)]",
  medium: "bg-[var(--color-warning-bg)] text-[var(--color-warning-text)]",
  ready: "bg-[var(--color-success-bg)] text-[var(--color-success-text)]",
};

export default function ScholarshipCard({ scholarship, onPrimaryAction, onSecondaryAction }) {
  return (
    <article className="flex min-h-[220px] overflow-hidden rounded-[18px] border border-border bg-surface">
      <div className="hidden w-[28%] shrink-0 md:block">
        <ScholarshipVisual variant={scholarship.visual} />
      </div>

      <div className="flex min-w-0 flex-[1_1_48%] flex-col justify-center gap-3 p-6">
        <h3 className="font-display text-[38px] font-bold uppercase leading-[0.95] tracking-[0.01em] text-ink lg:text-[42px]">
          {scholarship.title}
        </h3>

        <p className="text-[13px] font-medium text-ink-soft">
          {scholarship.provider}
        </p>

        <div className="flex items-center gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
              Award
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-ink-soft">
              {scholarship.award}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
              Deadline
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-ink-soft">
              {scholarship.deadline}
            </p>
          </div>
        </div>

        <span
          className={`w-fit rounded-full px-2.5 py-0.5 text-[12px] font-medium ${statusBadgeStyles[scholarship.priority]}`}
        >
          {scholarship.status}
        </span>

        <div className="flex items-center gap-2.5">
          <div className="h-1.5 w-40 max-w-full overflow-hidden rounded-full bg-surface-muted">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${scholarship.progress}%` }}
            />
          </div>
          <span className="font-feature-tabular text-[12px] font-medium text-ink-faint">
            {scholarship.progress}% complete
          </span>
        </div>

        <div className="mt-1 flex flex-wrap gap-2.5">
          {scholarship.requirements.map((req) => (
            <RequirementTile key={req.label} label={req.label} status={req.status} />
          ))}
        </div>
      </div>

      <div className="w-[24%] shrink-0 border-l border-border p-4">
        <ActionPanel
          panel={scholarship.actionPanel}
          priority={scholarship.priority}
          onPrimaryAction={onPrimaryAction}
          onSecondaryAction={onSecondaryAction}
        />
      </div>
    </article>
  );
}
