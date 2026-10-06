import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { TIMETABLE } from '../data/timetable.js';
import { formatDate, todayISO, dayNumberForDate } from '../lib/dates.js';
import { dayStatus } from '../lib/progress.js';
import { Badge, Card, EmptyState, ProgressBar, SectionHeader, StatCard } from '../components/ui/index.jsx';

const NOTE_FIELDS = [
  { key: 'general', label: 'General notes', hint: 'Anything from this day — what you worked on, how it went.' },
  { key: 'concepts', label: 'Concepts learned', hint: 'Key ideas in your own words, so future-you can re-read them.' },
  { key: 'questions', label: 'Questions / doubts', hint: 'What still confuses you? Bring these to the Sunday checkpoint.' },
  { key: 'revise', label: 'To revise', hint: 'Anything to come back to and re-practice later.' },
  { key: 'links', label: 'Links & resources', hint: 'URLs, docs and videos worth keeping for this day.' },
  { key: 'reflection', label: 'End-of-day reflection', hint: 'One honest line: what went well, what to change tomorrow.' },
];

const dayOptions = TIMETABLE.map((d) => ({
  value: String(d.day),
  label: `D${d.day} · ${d.weekday.slice(0, 3)} ${formatDate(d.date, { year: false })}`,
}));

export function NotesPage() {
  const { state, setDayNotes } = useApp();
  const [params, setParams] = useSearchParams();

  const todayDay = dayNumberForDate(todayISO());
  const rawDay = Number(params.get('day'));
  const dayNum = Number.isFinite(rawDay) && rawDay >= 1 && rawDay <= 92 ? rawDay : todayDay || 1;
  const meta = TIMETABLE[dayNum - 1];
  const day = state.days[String(dayNum)];
  const status = dayStatus(day, meta);
  const hasAnyNote = NOTE_FIELDS.some((f) => (day.notes[f.key] || '').trim());

  const stats = useMemo(() => {
    let daysWithNotes = 0;
    let inCurrentWeek = 0;
    for (const d of TIMETABLE) {
      const notes = state.days[String(d.day)] ? state.days[String(d.day)].notes : null;
      if (!notes) continue;
      const filled = Object.values(notes).some((v) => v && v.trim());
      if (filled) {
        daysWithNotes += 1;
        if (d.week === meta.week) inCurrentWeek += 1;
      }
    }
    return { daysWithNotes, inCurrentWeek };
  }, [state.days, meta.week]);

  const goTo = (n) => {
    const clamped = Math.max(1, Math.min(92, n));
    setParams({ day: String(clamped) }, { replace: true });
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Days With Notes" value={`${stats.daysWithNotes}/92`} sub="study days that have at least one note" icon="📓" />
        <StatCard label="This Week" value={`${stats.inCurrentWeek} days`} sub={`days of Week ${meta.week} with notes`} icon="🗓️" />
        <StatCard label="Viewing" value={`Day ${dayNum}`} sub={`${meta.weekday}, ${formatDate(meta.date)}`} icon="📍" />
      </div>

      <Card className="space-y-4">
        <SectionHeader
          title="Notes"
          subtitle="Per-day notes are saved automatically to this browser as you type — no save button needed."
        />

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="btn-secondary !px-3" onClick={() => goTo(dayNum - 1)} disabled={dayNum <= 1} aria-label="Previous day">
            ← Prev
          </button>
          <select className="select sm:!w-56" value={String(dayNum)} onChange={(e) => goTo(Number(e.target.value))}>
            {dayOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <button type="button" className="btn-secondary !px-3" onClick={() => goTo(dayNum + 1)} disabled={dayNum >= 92} aria-label="Next day">
            Next →
          </button>
          {todayDay ? (
            <button type="button" className={`btn-ghost !px-3 text-xs font-semibold ${dayNum === todayDay ? 'text-brand-600 dark:text-brand-400' : ''}`} onClick={() => goTo(todayDay)}>
              Jump to today (D{todayDay})
            </button>
          ) : null}
          <Link to={`/roadmap?day=${dayNum}`} className="btn-ghost !px-3 text-xs font-semibold text-brand-600 dark:text-brand-400">
            Open day details ↗
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-slate-200 pt-3 dark:border-slate-800">
          <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
            Day {dayNum} — {meta.weekday}, {formatDate(meta.date)}
          </span>
          <Badge tone={status}>{status}</Badge>
          <Badge>Week {meta.week}</Badge>
          <Badge className="!bg-violet-100 !text-violet-700 dark:!bg-violet-900/60 dark:!text-violet-300">{meta.phase}</Badge>
          {hasAnyNote ? <span className="text-xs text-emerald-600 dark:text-emerald-400">✓ has notes</span> : null}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: 'Python', text: meta.python },
            { label: 'DSA', text: meta.dsa },
            { label: 'Full Stack', text: meta.fullStack },
          ].map((b) => (
            <div key={b.label} className="rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-800/60">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{b.label}</p>
              <p className="mt-0.5 line-clamp-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {NOTE_FIELDS.map((f) => (
            <label key={f.key} className="block">
              <span className="label">{f.label}</span>
              <textarea
                className="input min-h-[110px]"
                placeholder={f.hint}
                value={day.notes[f.key] || ''}
                onChange={(e) => setDayNotes(dayNum, f.key, e.target.value)}
              />
            </label>
          ))}
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-500">✎ Notes save automatically to this browser. Use Settings → Export JSON to back them up.</p>

        <div>
          <ProgressBar value={(stats.daysWithNotes / 92) * 100} label="Days with notes" />
        </div>
      </Card>

      {!hasAnyNote ? (
        <EmptyState
          icon="✍️"
          title={`Nothing written for Day ${dayNum} yet`}
          message="Even one line per day makes the Sunday checkpoint and your final revision far easier. Start with what you learned today."
        />
      ) : null}
    </div>
  );
}
