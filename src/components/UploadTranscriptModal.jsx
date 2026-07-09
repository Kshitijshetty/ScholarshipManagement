import Modal from "./Modal";

export default function UploadTranscriptModal({ open, onClose, onUpload }) {
  const handleUpload = () => {
    onUpload?.();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h3 className="text-[17px] font-semibold text-ink">Upload transcript</h3>
      <p className="mt-1 text-[13px] text-ink-soft">
        This document will be attached to 3 applications that require it.
      </p>

      <div className="mt-4 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-surface-muted px-6 py-10 text-center transition-colors hover:border-primary/30">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 15V4M12 4 8 8M12 4l4 4"
            stroke="#767c85"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"
            stroke="#767c85"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-[13.5px] font-medium text-ink-soft">
          Drop your transcript here or browse files
        </p>
        <p className="text-[12px] text-ink-faint">PDF up to 10MB</p>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={onClose}
          className="rounded-lg px-4 py-2 text-[13.5px] font-medium text-ink-soft hover:bg-surface-muted"
        >
          Cancel
        </button>
        <button
          onClick={handleUpload}
          className="rounded-lg bg-primary px-5 py-2 text-[13.5px] font-semibold text-white hover:bg-primary-hover"
        >
          Upload file
        </button>
      </div>
    </Modal>
  );
}
