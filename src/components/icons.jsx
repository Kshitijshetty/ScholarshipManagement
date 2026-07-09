const common = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function HomeIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
    </svg>
  );
}

export function ApplicationsIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}

export function DocumentsIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5" />
    </svg>
  );
}

export function DeadlinesIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
    </svg>
  );
}

export function MessagesIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M4 5h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8l-4 3V6a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function ProfileIcon(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

export function HelpIcon(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.6 9.3a2.4 2.4 0 1 1 3.4 2.2c-.8.4-1 .8-1 1.6" />
      <path d="M12 16.6h.01" />
    </svg>
  );
}

export function BellIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M6 9a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9Z" />
      <path d="M10 18.5a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function ChevronRightIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function UploadDocIcon(props) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path
        d="M12 17v-5.5M9.5 13.9 12 11.5l2.5 2.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChecklistIcon(props) {
  return (
    <svg {...common} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}

export function SearchSparkleIcon(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.3-4.3" />
      <path d="M10.5 8v5M8 10.5h5" />
    </svg>
  );
}

export function CheckDocumentIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13.8 11 15.8 15.5 11" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...common} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </svg>
  );
}

export function TrophyIcon(props) {
  return (
    <svg {...common} {...props}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5.5H5.5A1.5 1.5 0 0 0 4 7c0 2 1.6 3.6 3.6 3.8" />
      <path d="M16 5.5h2.5A1.5 1.5 0 0 1 20 7c0 2-1.6 3.6-3.6 3.8" />
      <path d="M12 13v3" />
      <path d="M9.5 20h5" />
      <path d="M10 16h4v4h-4Z" />
    </svg>
  );
}

export function CalendarGlyphIcon(props) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="7" fontWeight="600" fill="currentColor" fontFamily="var(--font-body)">
        18
      </text>
    </svg>
  );
}
