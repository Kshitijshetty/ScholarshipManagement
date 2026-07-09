import { BellIcon } from "./icons";

export default function DashboardHeader({ student }) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-ink">
          Welcome back, Maya
        </h1>
        {/* <p className="mt-1 text-[14px] text-ink-soft">
          You have 3 scholarship tasks to review before your next deadline.
        </p> */}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={(e) => e.preventDefault()}
          className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-ink-soft transition-colors hover:bg-surface-muted hover:text-ink"
        >
          <BellIcon width={17} height={17} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[var(--color-warning-text)]" />
        </button>
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface py-1 pl-1 pr-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-soft text-[11.5px] font-semibold text-primary">
            {student.initials}
          </span>
          <span className="text-[13px] font-medium text-ink">
            {student.name}
          </span>
        </div>
      </div>
    </div>
  );
}
