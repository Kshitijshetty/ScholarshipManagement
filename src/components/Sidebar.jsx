import {
  HomeIcon,
  ApplicationsIcon,
  DocumentsIcon,
  DeadlinesIcon,
  MessagesIcon,
  ProfileIcon,
  HelpIcon,
} from "./icons";

const navItems = [
  { label: "Home", icon: HomeIcon },
  { label: "Applications", icon: ApplicationsIcon },
  { label: "Documents", icon: DocumentsIcon },
  { label: "Deadlines", icon: DeadlinesIcon },
  { label: "Messages", icon: MessagesIcon },
  { label: "Profile", icon: ProfileIcon },
  { label: "Help", icon: HelpIcon },
];

export default function Sidebar({ student }) {
  return (
    <aside className="flex w-[220px] shrink-0 flex-col justify-between rounded-[18px] border border-border bg-surface p-4">
      <div>
        <div className="flex items-center gap-2 px-2 py-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-[12px] font-semibold text-white">
            S
          </span>
          <span className="text-[14.5px] font-semibold text-ink">
            Scholarship
          </span>
        </div>

        <nav className="mt-4 flex flex-col gap-0.5">
          {navItems.map(({ label, icon: Icon }) => {
            const active = label === "Home";
            return (
              <a
                key={label}
                href="#"
                onClick={(e) => e.preventDefault()}
                className={
                  active
                    ? "flex items-center gap-2.5 rounded-lg bg-primary-soft px-2.5 py-2 text-[13.5px] font-medium text-primary"
                    : "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13.5px] font-medium text-ink-soft transition-colors hover:bg-surface-muted hover:text-ink"
                }
              >
                <Icon />
                {label}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="rounded-xl border border-border bg-surface-muted p-3.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-[12.5px] font-semibold text-primary">
            {student.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium text-ink">
              {student.name}
            </p>
            <p className="truncate text-[12px] text-ink-faint">
              {student.year} &middot; {student.major}
            </p>
          </div>
        </div>
        <button
          onClick={(e) => e.preventDefault()}
          className="mt-3 w-full rounded-lg border border-border bg-surface py-1.5 text-[12.5px] font-medium text-ink-soft transition-colors hover:bg-surface-muted hover:text-ink"
        >
          View profile
        </button>
      </div>
    </aside>
  );
}
