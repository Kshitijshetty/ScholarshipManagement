export default function DeadlineList({ deadlines }) {
  return (
    <section className="rounded-[18px] border border-border bg-surface p-5">
      <h3 className="text-[15px] font-semibold text-ink">Upcoming deadlines</h3>
      <ul className="mt-3 divide-y divide-border">
        {deadlines.map((d) => (
          <li key={d.title} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
            <span className="w-14 shrink-0 font-mono text-[12px] font-medium tracking-tight text-ink-faint">
              {d.date}
            </span>
            <span className="text-[13.5px] text-ink-soft">{d.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
