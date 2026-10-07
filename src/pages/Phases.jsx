import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { PHASES } from '../data/phases.js';
import { PROJECTS } from '../data/projects.js';
import { formatDate, todayISO, PLAN_START, PLAN_END } from '../lib/dates.js';
import { isDayComplete } from '../lib/progress.js';
import { TIMETABLE } from '../data/timetable.js';
import { Badge, Card, ProgressBar, SectionHeader } from '../components/ui/index.jsx';

function PhaseCard({ phase, open, onToggle }) {
  const { state, stats } = useApp();
  const stat = stats.phases.find((p) => p.id === phase.id) || { pct: 0, doneDays: 0, totalDays: phase.totalDays, actualHours: 0 };
  const today = todayISO();
  const isCurrent = today >= phase.startDate && today <= phase.endDate;
  const isPast = today > phase.endDate;
  const status = stat.pct === 100 ? 'Completed' : isCurrent ? 'In Progress' : isPast ? 'In Progress' : 'Not Started';
  const projects = PROJECTS.filter((p) => phase.projects.includes(p.id));
  const phaseDays = TIMETABLE.filter((d) => d.phaseId === phase.id);

  return (
    <Card className={`${isCurrent ? 'ring-2 ring-brand-400 dark:ring-brand-600' : ''}`}>
      <button type="button" className="flex w-full items-start justify-between gap-3 text-left" onClick={onToggle}>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-extrabold text-white">{phase.id}</span>
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">{phase.name}</h3>
            {isCurrent ? <Badge tone="ON TRACK">CURRENT PHASE</Badge> : null}
            <Badge tone={stat.pct === 100 ? 'Completed' : status === 'In Progress' ? 'In Progress' : 'Not Started'}>{stat.pct === 100 ? 'Completed' : status}</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Days {phase.startDay}–{phase.endDay} · {formatDate(phase.startDate, { year: false })} → {formatDate(phase.endDate)} · {phase.totalDays} days · {phase.plannedHours} planned hours
          </p>
        </div>
        <span className="text-lg text-slate-400">{open ? '▾' : '▸'}</span>
      </button>

      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
        <ProgressBar value={stat.pct} color={stat.pct === 100 ? 'bg-emerald-500' : 'bg-brand-500'} />
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
          {stat.pct}% · {stat.doneDays}/{phaseDays.length} days complete · {stat.actualHours}h logged
        </p>
      </div>

      {open ? (
        <div className="mt-4 space-y-4 border-t border-slate-200 pt-4 dark:border-slate-800">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Top topics</p>
            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {phase.topics.map((t) => (
                <li key={t} className="flex gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  <span className="text-brand-500">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Projects in this phase</p>
              {projects.length ? (
                <ul className="mt-2 space-y-1.5">
                  {projects.map((p) => {
                    const ps = state.projects[p.id] || {};
                    const done = p.tasks.filter((t) => ps.tasks && ps.tasks[t.id]).length;
                    return (
                      <li key={p.id}>
                        <Link to="/projects" className="text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400">
                          {p.name}
                        </Link>
                        <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">
                          ({done}/{p.tasks.length} tasks · {p.milestone})
                        </span>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="mt-1 text-xs text-slate-400">No graded project in this phase — focus is on foundations and practice.</p>
              )}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Completion milestone</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{phase.milestone}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Days</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {phaseDays.map((d) => {
                const complete = isDayComplete(state.days[String(d.day)], d);
                return (
                  <Link
                    key={d.day}
                    to={`/roadmap?day=${d.day}`}
                    title={`Day ${d.day} · ${formatDate(d.date)}`}
                    className={`flex h-7 w-7 items-center justify-center rounded-md text-[10px] font-bold transition-colors ${
                      complete
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-slate-200 text-slate-500 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    {d.day}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </Card>
  );
}

export function Phases() {
  const { stats } = useApp();
  const [openId, setOpenId] = useState(null);

  const activePhase = stats.phases.find((p) => todayISO() >= p.startDate && todayISO() <= p.endDate) || null;
  const totalPct = stats.overallPct;

  return (
    <div className="space-y-4">
      <Card>
        <SectionHeader
          title="Phase Progress Overview"
          subtitle={activePhase ? `You are currently in Phase ${activePhase.id} — ${activePhase.name}` : `The 92-day plan runs ${formatDate(PLAN_START)} → ${formatDate(PLAN_END)}`}
        />
        <div className="flex h-4 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          {stats.phases.map((p, i) => (
            <div
              key={p.id}
              className={`h-full ${p.pct === 100 ? 'bg-emerald-500' : i === (activePhase ? activePhase.id - 1 : -1) ? 'bg-brand-500' : 'bg-slate-300 dark:bg-slate-600'}`}
              style={{ width: `${(p.totalDays / 92) * 100}%` }}
              title={`Phase ${p.id}: ${p.name} — ${p.pct}% complete (${p.totalDays} days)`}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Overall journey progress: <span className="font-bold text-brand-600 dark:text-brand-400">{totalPct}%</span> · 6 phases · 92 days · 604 planned hours
        </p>
      </Card>

      <div className="space-y-3">
        {PHASES.map((phase) => (
          <PhaseCard key={phase.id} phase={phase} open={openId === phase.id} onToggle={() => setOpenId(openId === phase.id ? null : phase.id)} />
        ))}
      </div>
    </div>
  );
}
