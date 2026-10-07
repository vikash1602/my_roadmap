import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { TIMETABLE } from '../data/timetable.js';
import { formatDate, PLAN_START, PLAN_END } from '../lib/dates.js';
import { blocksForMeta, dayProgressFraction, dayStatus, isBlockDone } from '../lib/progress.js';
import { PLAN_BLOCK_MINUTES } from '../lib/storage.js';
import { Badge, Card, EmptyState, ProgressBar, ProgressRing, SectionHeader, StatCard } from '../components/ui/index.jsx';
import { PhaseChart, WeeklyHoursChart } from '../components/charts.jsx';

const BLOCK_LABELS = { python: 'Python', dsa: 'DSA', fullStack: 'Full Stack', weekendExtra: 'Weekend Extra' };

function TodayBlock({ dayNumber, blockKey, meta }) {
  const { state, toggleBlockDone } = useApp();
  const day = state.days[String(dayNumber)];
  const block = day.blocks[blockKey];
  const done = isBlockDone(day, blockKey);
  const text = blockKey === 'python' ? meta.python : blockKey === 'dsa' ? meta.dsa : blockKey === 'fullStack' ? meta.fullStack : meta.weekendExtra;
  return (
    <li className={`flex items-start gap-3 rounded-xl border p-3 ${done ? 'border-emerald-300 bg-emerald-50/60 dark:border-emerald-800 dark:bg-emerald-950/30' : 'border-slate-200 dark:border-slate-700'}`}>
      <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-emerald-600" checked={done} onChange={() => toggleBlockDone(dayNumber, blockKey)} aria-label={`Mark ${BLOCK_LABELS[blockKey]} done`} />
      <div className="min-w-0">
        <p className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-100">
          {BLOCK_LABELS[blockKey]}
          <span className="chip bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">{Math.round((PLAN_BLOCK_MINUTES[blockKey] / 60) * 10) / 10}h planned</span>
          {block.actualMinutes > 0 ? <span className="chip bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300">{block.actualMinutes}m logged</span> : null}
        </p>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{text}</p>
      </div>
    </li>
  );
}

export function Dashboard() {
  const { state, stats } = useApp();
  const { position, todayMeta } = stats;

  const focusMeta = position.stage === 'before' ? null : todayMeta;
  const focusDay = focusMeta ? state.days[String(focusMeta.day)] : null;

  const upcoming = stats.todayDay
    ? [1, 2, 3].map((n) => (stats.todayDay + n <= 92 ? stats.todayDay + n : null)).filter(Boolean)
    : position.stage === 'before'
      ? [1, 2, 3]
      : [];

  const pythonPct = stats.subjects.python.pct;
  const dsaBlocksPct = stats.subjects.dsa.pct;
  const fsPct = stats.subjects.fullStack.pct;
  const projectsPct = stats.projectStats.length ? Math.round(stats.projectStats.reduce((s, p) => s + p.pct, 0) / stats.projectStats.length) : 0;

  return (
    <div className="space-y-5">
      {/* Hero */}
      <Card className="!p-0 overflow-hidden">
        <div className="grid gap-0 md:grid-cols-[1.4fr_1fr]">
          <div className="p-5 sm:p-6">
            {position.stage === 'before' ? (
              <>
                <p className="chip bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-300">My Journey starts tomorrow 🚀</p>
                <h2 className="mt-3 text-2xl font-extrabold text-slate-800 dark:text-slate-100">
                  First study day: {formatDate(PLAN_START, { weekday: true })}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Your plan runs <strong>{formatDate(PLAN_START)} → {formatDate(PLAN_END)}</strong>: 92 days, 604 planned hours. Day 1 starts with Python basics, Big-O complexity and your first
                  Git commit. Everything is ready — you can browse and prepare any day from the roadmap right now.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link to="/roadmap?day=1" className="btn-primary">
                    Preview Day 1
                  </Link>
                  <Link to="/roadmap" className="btn-secondary">
                    Open the roadmap
                  </Link>
                </div>
              </>
            ) : position.stage === 'after' ? (
              <>
                <p className="chip bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">Plan finished 🎉</p>
                <h2 className="mt-3 text-2xl font-extrabold text-slate-800 dark:text-slate-100">
                  You completed {stats.daysCompleted} of 92 days
                </h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  The plan ended on {formatDate(PLAN_END)} but your tracker still works — browse any day, keep logging hours and reviewing mistakes.
                </p>
              </>
            ) : (
              <>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="chip bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-300">Today's Focus · {formatDate(stats.today, { weekday: true })}</p>
                  <Badge tone={stats.aheadBehind.status}>{stats.aheadBehind.status}</Badge>
                </div>
                <h2 className="mt-3 text-2xl font-extrabold text-slate-800 dark:text-slate-100">
                  Day {stats.todayDay} <span className="text-base font-semibold text-slate-500 dark:text-slate-400">of 92</span>
                </h2>
                <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                  Week {todayMeta.week} · {todayMeta.phase}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <strong>Keep going.</strong> {stats.todayDone ? 'Today is complete — outstanding work!' : 'Complete all blocks, then tick the deliverable and criteria to close the day.'}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link to="/today" className="btn-primary">
                    Open Today's Focus
                  </Link>
                  <Link to="/checkpoints" className="btn-secondary">
                    Weekly Checkpoint {todayMeta.week}
                  </Link>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center justify-center gap-6 border-t border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/40 md:border-l md:border-t-0">
            <ProgressRing value={focusDay ? dayProgressFraction(focusDay, focusMeta) * 100 : 0} size={132} stroke={11}>
              <p className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">{focusDay ? Math.round(dayProgressFraction(focusDay, focusMeta) * 100) : 0}%</p>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{focusMeta ? `Day ${focusMeta.day}` : 'Not started'}</p>
            </ProgressRing>
            <div className="space-y-2 text-sm">
              <p className="text-slate-500 dark:text-slate-400">
                Current Streak
                <span className="ml-2 font-extrabold text-slate-800 dark:text-slate-100">🔥 {stats.currentStreak}</span>
              </p>
              <p className="text-slate-500 dark:text-slate-400">
                Longest Streak
                <span className="ml-2 font-extrabold text-slate-800 dark:text-slate-100">🏆 {stats.longestStreak}</span>
              </p>
              <p className="text-slate-500 dark:text-slate-400">
                Backlog
                <span className="ml-2 font-extrabold text-slate-800 dark:text-slate-100">📌 {stats.backlogCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
        <StatCard label="Days Completed" value={`${stats.daysCompleted}/92`} sub={`${stats.daysRemaining} remaining`} icon="✅" />
        <StatCard label="Overall" value={`${stats.overallPct}%`} sub={`${stats.donePlannedHours}h of ${stats.plannedHours}h`} icon="📊" />
        <StatCard label="Planned vs Actual" value={`${stats.actualHours}h`} sub={`${stats.plannedHours}h planned in total`} icon="⏱️" accent="text-amber-600 dark:text-amber-400" />
        <StatCard label="Current Streak" value={stats.currentStreak} sub={`Longest: ${stats.longestStreak} ${stats.longestStreak === 1 ? 'day' : 'days'}`} icon="🔥" accent="text-rose-600 dark:text-rose-400" />
        <StatCard label="Ahead / Behind" value={stats.aheadBehind.diff > 0 ? `+${stats.aheadBehind.diff}` : stats.aheadBehind.diff} sub={`${stats.expected} days expected by now`} icon={stats.aheadBehind.diff >= 0 ? '🟢' : '🔴'} />
        <StatCard label="Backlog" value={stats.backlogCount} sub={`${stats.pendingBacklog} open · ${stats.inProgressBacklog} in progress`} icon="📌" accent="text-orange-600 dark:text-orange-400" />
      </div>

      {/* Progress cards */}
      <div>
        <SectionHeader title="Your Progress" subtitle="Subject-level completion based on finished study blocks" />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Python', pct: pythonPct, color: 'bg-brand-500', to: '/python', extra: `${stats.subjects.python.actualMinutes ? Math.round((stats.subjects.python.actualMinutes / 60) * 10) / 10 : 0}h logged` },
            { label: 'DSA', pct: dsaBlocksPct, color: 'bg-amber-500', to: '/dsa', extra: `${stats.dsa.solved}/${stats.dsa.total} problems solved` },
            { label: 'Full Stack', pct: fsPct, color: 'bg-emerald-500', to: '/fullstack', extra: `${stats.subjects.fullStack.actualMinutes ? Math.round((stats.subjects.fullStack.actualMinutes / 60) * 10) / 10 : 0}h logged` },
            { label: 'Projects', pct: projectsPct, color: 'bg-violet-500', to: '/projects', extra: `${stats.projectStats.reduce((s, p) => s + p.done, 0)}/${stats.projectStats.reduce((s, p) => s + p.total, 0)} tasks done` },
          ].map((c) => (
            <Link key={c.label} to={c.to} className="card-tight transition-shadow hover:shadow-md">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{c.label}</p>
                <p className="text-lg font-extrabold text-slate-800 dark:text-slate-100">{c.pct}%</p>
              </div>
              <ProgressBar value={c.pct} color={c.color} />
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">{c.extra}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Today's tasks */}
        <Card>
          <SectionHeader
            title={position.stage === 'before' ? 'Day 1 Preview' : `Today's Tasks — Day ${focusMeta ? focusMeta.day : ''}`}
            subtitle={focusMeta ? `${focusMeta.python.split(';')[0].slice(0, 70)}…` : 'Your plan starts tomorrow'}
            action={
              focusMeta ? (
                <Link to="/today" className="btn-secondary !py-1 text-xs">
                  Details
                </Link>
              ) : null
            }
          />
          {focusMeta ? (
            <ul className="space-y-2">
              {blocksForMeta(focusMeta).map((k) => (
                <TodayBlock key={k} dayNumber={focusMeta.day} blockKey={k} meta={focusMeta} />
              ))}
            </ul>
          ) : (
            <EmptyState icon="🗓️" title="Nothing scheduled yet" message={`The 92-day plan starts on ${formatDate(PLAN_START)}. Preview Day 1 in the roadmap.`} />
          )}
          {focusMeta ? (
            <div className="mt-3 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 dark:bg-slate-800/60 dark:text-slate-300">
              <p className="font-semibold text-slate-700 dark:text-slate-200">Deliverable</p>
              <p className="mt-0.5 line-clamp-2">{focusMeta.deliverable}</p>
            </div>
          ) : null}
        </Card>

        {/* Upcoming + backlog + mistakes */}
        <div className="space-y-4">
          <Card>
            <SectionHeader
              title="Next Up"
              subtitle="The next days after today"
              action={
                <Link to="/roadmap" className="btn-secondary !py-1 text-xs">
                  Full roadmap
                </Link>
              }
            />
            <ul className="space-y-2">
              {upcoming.map((n) => {
                const m = TIMETABLE[n - 1];
                const st = dayStatus(state.days[String(n)], m);
                return (
                  <li key={n}>
                    <Link to={`/roadmap?day=${n}`} className="flex items-center gap-3 rounded-xl border border-slate-200 p-2.5 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800/60">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-xs font-extrabold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                        {n}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-slate-700 dark:text-slate-200">
                          {m.dsaMeta ? m.dsaMeta.topic : m.python.split(';')[0]}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {formatDate(m.date)} · {m.isWeekend ? '8h weekend' : '6h weekday'} · Week {m.week}
                        </p>
                      </div>
                      <Badge tone={st}>{st}</Badge>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <SectionHeader title="Backlog" subtitle={`${stats.backlogCount} item${stats.backlogCount === 1 ? '' : 's'} to clear`} action={<Link to="/backlog" className="text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400">Open</Link>} />
              {stats.backlogList.length ? (
                <ul className="space-y-2">
                  {stats.backlogList.slice(0, 4).map((b) => (
                    <li key={b.id} className="flex items-start justify-between gap-2 text-sm">
                      <span className="line-clamp-2 text-slate-700 dark:text-slate-300">{b.task}</span>
                      <Badge tone={b.priority}>{b.priority}</Badge>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400">No backlog items — everything is on track. 🎉</p>
              )}
            </Card>
            <Card>
              <SectionHeader title="Recent Mistakes" subtitle="Latest error log entries" action={<Link to="/error-log" className="text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400">Open</Link>} />
              {stats.recentMistakes.length ? (
                <ul className="space-y-2">
                  {stats.recentMistakes.slice(0, 4).map((e) => (
                    <li key={e.id} className="text-sm">
                      <p className="line-clamp-1 font-medium text-slate-700 dark:text-slate-300">{e.problem || e.topic}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {e.category} · {e.date} {e.reviewed ? '· reviewed ✓' : '· to review'}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400">No mistakes logged yet. Log them here to turn them into revision material.</p>
              )}
            </Card>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <SectionHeader title="Weekly Hours — Planned vs Actual" subtitle="Every week of the plan; future weeks show empty actual bars" />
          <WeeklyHoursChart weeks={stats.weeks} />
        </Card>
        <Card>
          <SectionHeader title="Phase Progress" subtitle="Completion % of each of the 6 phases" />
          <PhaseChart phases={stats.phases} />
        </Card>
      </div>
    </div>
  );
}
