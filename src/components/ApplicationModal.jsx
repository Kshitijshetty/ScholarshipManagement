import { useEffect, useRef, useState } from "react";
import DocumentRow from "./DocumentRow";

const personalFields = [
  ["Full name", "Maya Patel"],
  ["Student ID", "RIT-204918"],
  ["Email", "maya.patel@rit.edu"],
  ["School", "Rochester Institute of Technology"],
  ["Major", "Computer Science"],
  ["Year", "Sophomore"],
  ["GPA", "3.72"],
];

const eligibilityQuestions = [
  ["Are you currently enrolled full-time?", "Yes"],
  ["Are you majoring in a STEM field?", "Yes"],
  ["Do you meet the minimum 3.0 GPA requirement?", "Yes"],
  ["Are you planning to enroll next semester?", "Yes"],
];

const essayPrompt = "Describe a time you demonstrated leadership in a STEM-related project.";
const essayAnswer =
  "During my sophomore year, I led a small student team building a campus resource finder for first-year students. My role was to organize research sessions, define the main user flows, and coordinate weekly design reviews with engineering students. The experience helped me understand how leadership in STEM is not only about technical ability, but also about communication, planning, and making sure the final solution works for real users.";

function EditLink({ children }) {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="mt-4 inline-block text-[12.5px] font-medium text-ink-soft underline decoration-ink-faint/40 underline-offset-4 hover:text-ink hover:decoration-ink/50"
    >
      {children}
    </a>
  );
}

function Header({ onClose, progress, statusLabel, statusReady }) {
  return (
    <div className="border-b border-border px-7 py-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-[36px] uppercase leading-[0.95] tracking-[0.01em] text-ink">
            STEM Leadership Scholarship
          </h2>
          <p className="mt-1.5 text-[13px] font-medium text-ink-soft">National STEM Foundation</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-surface-muted hover:text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">Award</p>
          <p className="mt-0.5 text-[14px] font-semibold text-ink-soft">$2,500</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">Deadline</p>
          <p className="mt-0.5 text-[14px] font-semibold text-ink-soft">Jul 13</p>
        </div>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[12px] font-medium ${
            statusReady
              ? "bg-[var(--color-success-bg)] text-[var(--color-success-text)]"
              : "bg-[var(--color-danger-bg)] text-[var(--color-danger-text)]"
          }`}
        >
          {statusLabel}
        </span>
        <div className="flex items-center gap-2.5">
          <div className="h-1.5 w-32 overflow-hidden rounded-full bg-surface-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-feature-tabular text-[12px] font-medium text-ink-faint">
            {progress}% complete
          </span>
        </div>
      </div>
    </div>
  );
}

function RequirementBanner({ submitted, uploaded, onUploadClick }) {
  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-[var(--color-success-text)]/20 bg-[var(--color-success-bg)] px-5 py-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-success-text)] text-white">
          <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6.2 5 8.7l4.5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div>
          <p className="text-[13.5px] font-semibold text-[var(--color-success-text)]">
            Application submitted
          </p>
          <p className="mt-0.5 text-[12.5px] text-ink-soft">
            Your application is under review. You can still view your responses below, but editing is disabled.
          </p>
        </div>
      </div>
    );
  }

  if (uploaded) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-[var(--color-success-text)]/20 bg-[var(--color-success-bg)] px-5 py-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-success-text)] text-white">
          <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6.2 5 8.7l4.5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div>
          <p className="text-[13.5px] font-semibold text-[var(--color-success-text)]">
            All requirements complete
          </p>
          <p className="mt-0.5 text-[12.5px] text-ink-soft">
            Your application is ready for final review and submission.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[var(--color-danger-text)]/20 bg-[var(--color-danger-bg)] px-5 py-4">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-[var(--color-danger-text)]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
            <path d="M14 3v5h5" />
          </svg>
        </span>
        <div>
          <p className="text-[13.5px] font-semibold text-[var(--color-danger-text)]">
            Transcript required before submission
          </p>
          <p className="mt-0.5 text-[12.5px] text-ink-soft">
            This is the last missing requirement for this application.
          </p>
        </div>
      </div>
      <button
        onClick={onUploadClick}
        className="shrink-0 rounded-lg bg-primary px-4 py-2 text-[12.5px] font-semibold text-white hover:bg-primary-hover"
      >
        Upload transcript
      </button>
    </div>
  );
}

function TranscriptUploadPanel({ onCancel, onUpload }) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-surface px-5 py-6 text-center">
      <p className="text-[13.5px] font-semibold text-ink">Upload official transcript</p>
      <p className="mt-1 text-[12.5px] text-ink-soft">Drop your transcript here or browse files.</p>
      <p className="mt-1 text-[11.5px] text-ink-faint">Accepted formats: PDF, DOC, DOCX</p>
      <div className="mt-4 flex justify-center gap-3">
        <button
          onClick={onCancel}
          className="rounded-lg px-4 py-2 text-[12.5px] font-medium text-ink-soft hover:bg-surface-muted"
        >
          Cancel
        </button>
        <button
          onClick={onUpload}
          className="rounded-lg bg-primary px-4 py-2 text-[12.5px] font-semibold text-white hover:bg-primary-hover"
        >
          Upload file
        </button>
      </div>
    </div>
  );
}

function Footer({ readOnly, transcriptUploaded, onSubmit, onClose }) {
  if (readOnly) {
    return (
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-7 py-5">
        <div>
          <p className="text-[13.5px] font-semibold text-[var(--color-success-text)]">
            Application submitted
          </p>
          <p className="mt-0.5 text-[12.5px] text-ink-soft">
            This application is read-only while it&rsquo;s under review.
          </p>
        </div>
        <button
          onClick={onClose}
          className="rounded-lg border border-border px-4 py-2.5 text-[13px] font-medium text-ink-soft hover:bg-surface-muted hover:text-ink"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-7 py-5">
      <div>
        <p
          className={`text-[13.5px] font-semibold ${
            transcriptUploaded ? "text-[var(--color-success-text)]" : "text-ink"
          }`}
        >
          {transcriptUploaded ? "Ready to submit" : "1 requirement missing"}
        </p>
        <p className="mt-0.5 text-[12.5px] text-ink-soft">
          {transcriptUploaded
            ? "All requirements are complete."
            : "Upload your transcript to submit this application."}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={(e) => e.preventDefault()}
          className="rounded-lg border border-border px-4 py-2.5 text-[13px] font-medium text-ink-soft hover:bg-surface-muted hover:text-ink"
        >
          Save changes
        </button>
        <button
          onClick={onSubmit}
          disabled={!transcriptUploaded}
          title={!transcriptUploaded ? "Upload your transcript to enable submission" : undefined}
          className={`rounded-lg px-5 py-2.5 text-[13px] font-bold transition-colors ${
            transcriptUploaded
              ? "bg-primary text-white hover:bg-primary-hover"
              : "cursor-not-allowed bg-surface-muted text-ink-faint"
          }`}
        >
          Submit application
        </button>
      </div>
    </div>
  );
}

function SuccessState({ onClose, onBack }) {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center px-8 py-16 text-center">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-surface-muted hover:text-ink"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-success-bg)] text-[var(--color-success-text)]">
        <svg width="20" height="20" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6.2 5 8.7l4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <h3 className="mt-4 text-[20px] font-semibold text-ink">Application submitted</h3>
      <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-ink-soft">
        Your STEM Leadership Scholarship application has been submitted successfully.
      </p>
      <button
        onClick={onBack}
        className="mt-6 rounded-lg bg-primary px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-primary-hover"
      >
        Back to dashboard
      </button>
    </div>
  );
}

export default function ApplicationModal({
  open,
  onClose,
  transcriptUploaded,
  onUploadTranscript,
  submitted,
  onSubmitted,
}) {
  const [transcriptUploadOpen, setTranscriptUploadOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const documentsRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  const readOnly = submitted;
  const progress = transcriptUploaded || submitted ? 100 : 80;
  const statusLabel = submitted ? "Submitted" : transcriptUploaded ? "Ready to submit" : "Missing transcript";

  const handleClose = () => {
    setShowSuccess(false);
    onClose();
  };

  const handleOpenUpload = () => {
    setTranscriptUploadOpen(true);
    documentsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleUploadFile = () => {
    onUploadTranscript?.();
    setTranscriptUploadOpen(false);
  };

  const handleSubmitClick = () => {
    onSubmitted?.();
    setShowSuccess(true);
  };

  const handleBackToDashboard = () => {
    setShowSuccess(false);
    onClose();
  };

  const checklistItems = [
    { label: "Personal information complete", complete: true },
    { label: "Eligibility questions answered", complete: true },
    { label: "Essay response complete", complete: true },
    { label: "Resume uploaded", complete: true },
    { label: transcriptUploaded ? "Transcript uploaded" : "Transcript missing", complete: transcriptUploaded },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4 backdrop-blur-[2px]"
      onClick={handleClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[85vh] w-full max-w-[1080px] flex-col overflow-hidden rounded-[18px] border border-border bg-surface shadow-[0_20px_45px_-20px_rgba(16,18,20,0.25)] animate-[modal-in_0.18s_ease-out]"
      >
        {showSuccess ? (
          <SuccessState onClose={handleClose} onBack={handleBackToDashboard} />
        ) : (
          <>
            <Header progress={progress} statusLabel={statusLabel} statusReady={transcriptUploaded || submitted} onClose={handleClose} />

            <div className="flex-1 overflow-y-auto px-7 py-6">
              <RequirementBanner submitted={submitted} uploaded={transcriptUploaded} onUploadClick={handleOpenUpload} />

              <div className="mt-7 space-y-7">
                <section>
                  <h3 className="text-[15px] font-semibold text-ink">Personal information</h3>
                  <p className="mt-1 text-[12.5px] text-ink-soft">
                    {readOnly
                      ? "Pulled from your student profile."
                      : "Pulled from your student profile. You can edit this before submitting."}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {personalFields.map(([label, value]) => (
                      <div key={label}>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
                          {label}
                        </p>
                        <div className="mt-1 rounded-lg border border-border bg-surface-muted px-3 py-2 text-[13.5px] text-ink">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                  {!readOnly && <EditLink>Edit personal information</EditLink>}
                </section>

                <section className="border-t border-border pt-7">
                  <h3 className="text-[15px] font-semibold text-ink">Eligibility</h3>
                  <p className="mt-1 text-[12.5px] text-ink-soft">
                    These answers determine whether you meet the scholarship requirements.
                  </p>
                  <div className="mt-4 divide-y divide-border">
                    {eligibilityQuestions.map(([question, answer]) => (
                      <div key={question} className="flex items-center justify-between gap-4 py-2.5">
                        <p className="text-[13.5px] text-ink-soft">{question}</p>
                        <span className="text-[13.5px] font-semibold text-ink">{answer}</span>
                      </div>
                    ))}
                  </div>
                  {!readOnly && <EditLink>Edit answers</EditLink>}
                </section>

                <section className="border-t border-border pt-7">
                  <h3 className="text-[15px] font-semibold text-ink">Essay response</h3>
                  <p className="mt-1 text-[12.5px] italic text-ink-soft">{essayPrompt}</p>
                  <div className="mt-3 rounded-xl border border-border bg-surface-muted px-4 py-3.5 text-[13.5px] leading-relaxed text-ink">
                    {essayAnswer}
                  </div>
                  {!readOnly && <EditLink>Edit response</EditLink>}
                </section>

                <section ref={documentsRef} className="border-t border-border pt-7">
                  <h3 className="text-[15px] font-semibold text-ink">Required documents</h3>
                  <p className="mt-1 text-[12.5px] text-ink-soft">
                    {readOnly
                      ? "All documents submitted with this application."
                      : "Upload the remaining document to make this application ready for submission."}
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    <DocumentRow label="Essay response" badge="Complete" state="complete" />
                    <DocumentRow
                      label="Resume"
                      badge="Uploaded"
                      state="complete"
                      fileName="maya-patel-resume.pdf"
                    />
                    <DocumentRow
                      label="Official transcript"
                      badge={transcriptUploaded ? "Uploaded" : "Missing"}
                      state={transcriptUploaded ? "complete" : "missing"}
                      fileName={transcriptUploaded ? "maya-patel-transcript.pdf" : undefined}
                      note={!transcriptUploaded ? "Required before submission" : undefined}
                      prominent={!transcriptUploaded}
                      buttonLabel={
                        readOnly || transcriptUploadOpen
                          ? undefined
                          : transcriptUploaded
                            ? "Replace file"
                            : "Upload transcript"
                      }
                      onButtonClick={() => setTranscriptUploadOpen(true)}
                    >
                      {!readOnly && transcriptUploadOpen && (
                        <TranscriptUploadPanel
                          onCancel={() => setTranscriptUploadOpen(false)}
                          onUpload={handleUploadFile}
                        />
                      )}
                    </DocumentRow>
                  </div>
                </section>

                <section className="border-t border-border pt-7">
                  <h3 className="text-[15px] font-semibold text-ink">Review checklist</h3>
                  <ul className="mt-3 space-y-1.5">
                    {checklistItems.map((item) => (
                      <li key={item.label} className="flex items-center gap-2.5">
                        {item.complete ? (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-success-text)] text-white">
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                              <path d="M2.5 6.2 5 8.7l4.5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        ) : (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-danger-bg)] text-[var(--color-danger-text)]">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                              <path d="M3 3l6 6M9 3 3 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                          </span>
                        )}
                        <span
                          className={`text-[13.5px] ${
                            item.complete ? "text-ink-soft" : "font-medium text-[var(--color-danger-text)]"
                          }`}
                        >
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <Footer readOnly={readOnly} transcriptUploaded={transcriptUploaded} onSubmit={handleSubmitClick} onClose={handleClose} />
          </>
        )}
      </div>
      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
