import { useApp } from '../context/AppContext.jsx';
import { Badge, Card, ProgressBar, SectionHeader, StatCard } from '../components/ui/index.jsx';
import { MonthlyHoursChart, PhaseChart, SubjectChart, WeeklyCompletionChart, WeeklyHoursChart } from '../components/charts.jsx';

const SUBJECT_LABELS = { python: 'Python', dsa: 'DSA', fullStack: 'Full Stack', weekendExtra: 'Weekend Extra' };
const SUBJECT_COLORS = { python: 'bg-brand-500', dsa: 'bg-amber-500', fullStack: 'bg-emerald-500', weekendExtra: 'bg-violet-500' };

export function ProgressPage() {
  const { stats } = useApp();
  const { aheadBehind, consistency, subjects, weeks, months, phases } = stats;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Overall Progress" value={`${stats.overallPct}%`} sub={`${stats.donePlannedHours}h of ${stats.plannedHours}h planned work done`} />
        <StatCard
          label="Ahead / Behind"
          value={`${aheadBehind.diff > 0 ? '+' : ''}${aheadBehind.diff}`}
          sub={`${stats.daysCompleted} completed vs ${stats.expected} expected`}
          accent={aheadBehind.status === 'AHEAD' ? 'text-emerald-600 dark:text-emerald-400' : aheadBehind.status === 'BEHIND' ? 'text-rose-600 dark:text-rose-400' : 'text-brand-600 dark:text-brand-400'}
        />
        <StatCard label="Actual Hours Logged" value={`${stats.actualHours}h`} sub={`Average ${consistency.avgHoursPerDay}h per elapsed day`} />
        <StatCard label="Avg Weekly Completion" value={`${consistency.avgWeeklyCompletion}%`} sub={`${stats.currentStreak} day current streak · ${stats.longestStreak} day best`} />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="card-tight">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Consistency · last 7 days</p>
          <p className="mt-1 text-2xl font-extrabold text-brand-600 dark:text-brand-400">{consistency.last7.pct}%</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {consistency.last7.done} of {consistency.last7.total} study days fully completed
          </p>
        </div>
        <div className="card-tight">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Consistency · last 30 days</p>
          <p className="mt-1 text-2xl font-extrabold text-brand-600 dark:text-brand-400">{consistency.last30.pct}%</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {consistency.last30.done} of {consistency.last30.total} study days fully completed
          </p>
        </div>
        <div className="card-tight">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Days Completed</p>
          <p className="mt-1 text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">{stats.daysCompleted} / 92</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{stats.daysRemaining} days remaining in the plan</p>
        </div>
        <div className="card-tight">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Days Started</p>
          <p className="mt-1 text-2xl font-extrabold text-amber-600 dark:text-amber-400">{stats.daysStarted}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">days with any progress marked</p>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <SectionHeader title="Planned vs Actual Hours — Weekly" subtitle="Every week of the 92-day plan" />
          <WeeklyHoursChart weeks={weeks} />
        </Card>
        <Card>
          <SectionHeader title="Weekly Completion %" subtitle="Share of planned work marked done each week" />
          <WeeklyCompletionChart weeks={weeks} />
        </Card>
        <Card>
          <SectionHeader title="Planned vs Actual Hours — Monthly" subtitle="Oct 2026 → Jan 2027" />
          <MonthlyHoursChart months={months} />
        </Card>
        <Card>
          <SectionHeader title="Per-Subject Hours" subtitle="Planned vs actual time per subject" />
          <SubjectChart subjects={subjects} />
        </Card>
      </div>

      <Card>
        <SectionHeader title="Subject Progress" subtitle="Completion of planned minutes per subject" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Object.entries(subjects).map(([key, s]) => (
            <div key={key}>
              <ProgressBar value={s.pct} color={SUBJECT_COLORS[key]} label={SUBJECT_LABELS[key]} />
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {Math.round((s.doneMinutes / 60) * 10) / 10}h done of {Math.round((s.plannedMinutes / 60) * 10) / 10}h planned ·{' '}
                {Math.round((s.actualMinutes / 60) * 10) / 10}h logged
              </p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <SectionHeader title="Phase Progress" subtitle="6 phases of the journey" />
          <PhaseChart phases={phases} />
        </Card>
        <Card>
          <SectionHeader title="Phase Breakdown" />
          <div className="space-y-3">
            {phases.map((p) => (
              <div key={p.id}>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">{p.name}</p>
                  <Badge tone={p.pct === 100 ? 'Done' : 'In Progress'}>{p.pct}%</Badge>
                </div>
                <div className="mt-1">
                  <ProgressBar value={p.pct} height="h-1.5" />
                </div>
                <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                  Days {p.startDay}–{p.endDay} · {p.doneDays}/{p.totalDays} days complete · {p.plannedHours}h planned
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <SectionHeader title="Week-by-Week Breakdown" subtitle="14 weeks · planned vs actual vs completed" />
        <div className="scrollbar-thin overflow-x-auto">
          <table className="table-base">
            <thead>
              <tr>
                <th>Week</th>
                <th>Dates</th>
                <th>Days</th>
                <th>Completed</th>
                <th>Planned</th>
                <th>Actual</th>
                <th>Completion</th>
              </tr>
            </thead>
            <tbody>
              {weeks.map((w) => (
                <tr key={w.week}>
                  <td className="font-semibold">Week {w.week}</td>
                  <td className="whitespace-nowrap text-xs text-slate-500 dark:text-slate-400">
                    {w.startDate} → {w.endDate}
                  </td>
                  <td>{w.totalDays}</td>
                  <td>
                    {w.doneDays}/{w.totalDays}
                  </td>
                  <td>{w.plannedHours}h</td>
                  <td>{w.actualHours}h</td>
                  <td className="min-w-[140px]">
                    <ProgressBar value={w.pct} height="h-1.5" />
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{w.pct}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
