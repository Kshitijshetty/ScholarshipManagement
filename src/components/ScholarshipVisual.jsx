const palettes = {
  "abstract-blue": {
    from: "#E8EDF4",
    to: "#CDD8E6",
    shape: "#B7C6DA",
  },
  "abstract-warm": {
    from: "#F6EFE2",
    to: "#E9DAC0",
    shape: "#D8C4A0",
  },
  "abstract-neutral": {
    from: "#EEEFEC",
    to: "#DDE0DA",
    shape: "#C9CDC5",
  },
};

export default function ScholarshipVisual({ variant }) {
  const p = palettes[variant] ?? palettes["abstract-neutral"];

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: `linear-gradient(155deg, ${p.from}, ${p.to})` }}
    >
      <svg
        className="pointer-events-none absolute -bottom-10 -right-10 opacity-70"
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
      >
        <circle cx="80" cy="80" r="79" stroke={p.shape} strokeWidth="1" />
        <circle cx="80" cy="80" r="52" stroke={p.shape} strokeWidth="1" />
      </svg>
      <svg
        className="pointer-events-none absolute -left-6 -top-6 opacity-60"
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
      >
        <rect x="0.5" y="0.5" width="89" height="89" rx="16" stroke={p.shape} strokeWidth="1" />
      </svg>
    </div>
  );
}
