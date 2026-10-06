import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { TIMETABLE } from '../data/timetable.js';
import { isDayComplete, isBlockDone, isBlockBlocked, blocksForMeta } from '../lib/progress.js';
import { Card, ProgressBar, SectionHeader, StatCard } from '../components/ui/index.jsx';
import { DayDetailModal } from '../components/DayDetailModal.jsx';

const HABITS = [
  { key: 'python', label: 'Python', sub: '1.5 h every day' },
  { key: 'dsa', label: 'DSA', sub: '1.5 h every day' },
  { key: 'fullStack', label: 'Full Stack', sub: '3 h every day' },
  { key: 'weekendExtra', label: 'Weekend Extra', sub: '2 h on Sat & Sun' },
];

const dayWord = (n) => `${n} ${n === 1 ? 'day' : 'days'}`;

function cellClass(dayState, meta, key) {
  if (key === 'day') {
    if (isDayComplete(dayState, meta)) return 'bg-emerald-500';
    if (isBlockBlocked(dayState, 'python') || isBlockBlocked(dayState, 'dsa') || isBlockBlocked(dayState, 'fullStack')) return 'bg-rose-500';
    const started = blocksForMeta(meta).some((k) => dayState.blocks[k].status !== 'Not Started' || dayState.blocks[k].actualMinutes > 0);
    return started ? 'bg-amber-400' : 'bg-slate-200 dark:bg-slate-700';
  }
  if (key === 'weekendExtra' && !meta.isWeekend) return 'bg-transparent';
  const block = dayState.blocks[key];
  if (!block) return 'bg-transparent';
  if (block.status === 'Done') return 'bg-emerald-500';
  if (block.status === 'Blocked') return 'bg-rose-500';
  if (block.status === 'In Progress' || block.actualMinutes > 0) return 'bg-amber-400';
  return 'bg-slate-200 dark:bg-slate-700';
}

function HabitRow({ habit, state, onOpen }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-32 shrink-0">
        <p className="text-xs font-bold text-slate-700 dark:text-slate-200">{habit.label}</p>
        <p className="text-[10px] text-slate-400 dark:text-slate-500">{habit.sub}</p>
      </div>
      <div className="scrollbar-thin flex flex-1 items-center gap-[3px] overflow-x-auto pb-1">
        {TIMETABLE.map((meta) => {
          const dayState = state.days[String(meta.day)];
          const na = habit.key === 'weekendExtra' && !meta.isWeekend;
          return (
            <button
              key={meta.day}
              type="button"
              disabled={na}
              onClick={() => onOpen(meta.day)}
              title={na ? `Day ${meta.day} · weekday — no weekend extra` : `Day ${meta.day} · ${meta.date} · ${habit.label}`}
              className={`h-4 w-4 shrink-0 rounded-[3px] transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-brand-400 ${
                na ? 'cursor-default border border-dashed border-slate-200 dark:border-slate-800' : cellClass(dayState, meta, habit.key)
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export function Streaks() {
  const { state, stats } = useApp();
  const [params, setParams] = useSearchParams();
  const openDay = Number(params.get('day')) || null;

  const perfectThisWeek = stats.position.stage === 'during'
    ? TIMETABLE.filter((d) => d.week === TIMETABLE[stats.position.dayNumber - 1].week).filter((d) => isDayComplete(state.days[String(d.day)], d)).length
    : 0;

  const totalBlockDone = ['python', 'dsa', 'fullStack'].reduce((acc, key) => {
    let done = 0;
    for (const meta of TIMETABLE) {
      if (isBlockDone(state.days[String(meta.day)], key)) done += 1;
    }
    return { ...acc, [key]: done };
  }, {});

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Current Streak" value={dayWord(stats.currentStreak)} sub="Consecutive fully completed study days" icon="🔥" accent="text-amber-600 dark:text-amber-400" />
        <StatCard label="Longest Streak" value={dayWord(stats.longestStreak)} sub="Your best run so far" icon="🏆" accent="text-emerald-600 dark:text-emerald-400" />
        <StatCard label="Days Fully Complete" value={`${stats.daysCompleted}`} sub={`of 92 study days`} />
        <StatCard
          label="This Week"
          value={stats.position.stage === 'during' ? `${perfectThisWeek}/${TIMETABLE.filter((d) => d.week === TIMETABLE[stats.position.dayNumber - 1].week).length}` : '—'}
          sub="days completed in the current week"
        />
      </div>

      <Card>
        <SectionHeader title="Daily Habit Grid" subtitle="All 92 days · green = done, yellow = in progress, red = blocked. Click any cell to open that day." />
        <div className="space-y-3">
          {HABITS.map((h) => (
            <HabitRow key={h.key} habit={h} state={state} onOpen={(n) => setParams({ day: String(n) })} />
          ))}
          <HabitRow habit={{ key: 'day', label: 'Full Day Complete', sub: 'all blocks + deliverable + criteria' }} state={state} onOpen={(n) => setParams({ day: String(n) })} />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded bg-emerald-500" /> Done</span>
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded bg-amber-400" /> In Progress</span>
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded bg-rose-500" /> Blocked</span>
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded bg-slate-200 dark:bg-slate-700" /> Not Started</span>
          <span className="flex items-center gap-1"><span className="h-3 w-3 rounded border border-dashed border-slate-300 dark:border-slate-700" /> Not applicable (weekday)</span>
        </div>
      </Card>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <SectionHeader title="Habit Totals" subtitle="Days each habit was completed" />
          <div className="space-y-3">
            {HABITS.map((h) => {
              const total = h.key === 'weekendExtra' ? TIMETABLE.filter((d) => d.isWeekend).length : TIMETABLE.length;
              const done = h.key === 'weekendExtra'
                ? TIMETABLE.filter((d) => d.isWeekend && isBlockDone(state.days[String(d.day)], 'weekendExtra')).length
                : totalBlockDone[h.key] || 0;
              const pct = total ? Math.round((done / total) * 100) : 0;
              return (
                <div key={h.key}>
                  <ProgressBar value={pct} label={h.label} height="h-2" />
                  <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                    {done} of {total} applicable days
                  </p>
                </div>
              );
            })}
          </div>
        </Card>

        <Card>
          <SectionHeader title="Weekly Consistency" subtitle="Fully completed days per week" />
          <div className="space-y-2">
            {stats.weeks.map((w) => (
              <div key={w.week} className="flex items-center gap-3">
                <span className="w-14 shrink-0 text-xs font-semibold text-slate-600 dark:text-slate-300">Week {w.week}</span>
                <div className="flex-1">
                  <ProgressBar value={w.pct} height="h-2" color={w.pct === 100 ? 'bg-emerald-500' : 'bg-brand-500'} />
                </div>
                <span className="w-20 shrink-0 text-right text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {w.doneDays}/{w.totalDays} days
                </span>
                <span className="w-10 shrink-0 text-right text-[11px] font-bold text-slate-600 dark:text-slate-300">{w.pct}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <SectionHeader title="Monthly Consistency" subtitle="Oct 2026 → Jan 2027" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.months.map((m) => (
            <div key={m.key} className="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{m.label}</p>
              <p className="mt-0.5 text-2xl font-extrabold text-brand-600 dark:text-brand-400">{m.pct}%</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {m.doneDays}/{m.totalDays} days · {m.actualHours}h logged
              </p>
            </div>
          ))}
        </div>
      </Card>

      <DayDetailModal dayNumber={openDay} onClose={() => setParams({})} />
    </div>
  );
}
