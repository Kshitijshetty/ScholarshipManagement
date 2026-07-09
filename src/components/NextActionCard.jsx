import { UploadDocIcon } from "./icons";

export default function NextActionCard({ onUpload, onViewApplications }) {
  return (
    <section className="flex flex-col justify-between gap-6 rounded-[18px] border border-border bg-surface p-7 sm:flex-row sm:items-center">
      <div className="flex items-start gap-4">
        <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-ink-faint sm:flex">
          <UploadDocIcon />
        </span>
        <div className="min-w-0">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-warning-bg)] px-2.5 py-1 text-[13px] font-medium text-[var(--color-warning-text)]">
            Missing requirement 
          </span>

          <h2 className="mt-3 font-display text-[28px] uppercase leading-[0.95] tracking-[0.01em] text-ink">
            Upload your transcript
          </h2>

          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
                Needed for
              </p>
              <p className="mt-0.5 text-[14px] font-semibold text-ink">
                STEM Leadership Scholarship
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
                Deadline
              </p>
              <p className="mt-0.5 text-[14px] font-semibold text-ink">
                Jul 13
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-x-5 gap-y-3 sm:flex-col sm:items-end">
        <button
          onClick={onUpload}
          className="rounded-lg bg-primary px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-primary-hover"
        >
          Upload transcript
        </button>
        {/* <button
          onClick={onViewApplications}
          className="text-[13px] font-medium text-ink-soft underline decoration-ink-faint/40 underline-offset-4 hover:text-ink hover:decoration-ink/50"
        >
          View affected applications
        </button> */}
      </div>
    </section>
  );
}
