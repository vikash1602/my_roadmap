import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { TIMETABLE } from '../data/timetable.js';
import { PHASES } from '../data/phases.js';
import { PROJECTS } from '../data/projects.js';
import { formatDate } from '../lib/dates.js';
import { dayActualMinutes, dayProgressFraction, dayStatus } from '../lib/progress.js';
import { Badge, Card, EmptyState, ProgressBar, Tabs } from '../components/ui/index.jsx';
import { DayDetailModal } from '../components/DayDetailModal.jsx';

const STATUS_TABS = [
  { key: 'all', label: 'All days' },
  { key: 'done', label: 'Done' },
  { key: 'inprogress', label: 'In Progress' },
  { key: 'blocked', label: 'Blocked' },
  { key: 'notstarted', label: 'Not Started' },
  { key: 'pending', label: 'Not completed' },
];

function DayCard({ meta, onOpen }) {
  const { state } = useApp();
  const day = state.days[String(meta.day)];
  const status = dayStatus(day, meta);
  const pct = Math.round(dayProgressFraction(day, meta) * 100);
  const actual = dayActualMinutes(day);
  const tags = meta.projectTags || [];

  return (
    <button
      type="button"
      onClick={() => onOpen(meta.day)}
      className="card-tight w-full text-left transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-xs font-extrabold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            {meta.day}
          </span>
          <div>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">{formatDate(meta.date)}</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {meta.weekday} · W{meta.week}
            </p>
          </div>
        </div>
        <Badge tone={status}>{status}</Badge>
      </div>
      <div className="mt-2 space-y-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
        <p className="line-clamp-1">
          <span className="font-bold text-brand-600 dark:text-brand-400">PY</span> {meta.python.split(';')[0]}
        </p>
        <p className="line-clamp-1">
          <span className="font-bold text-amber-600 dark:text-amber-400">DSA</span> {meta.dsaMeta ? meta.dsaMeta.topic : meta.dsa.split(';')[0]}
        </p>
        <p className="line-clamp-1">
          <span className="font-bold text-emerald-600 dark:text-emerald-400">FS</span> {meta.fullStack.split(';')[0]}
        </p>
      </div>
      {tags.length ? (
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((t) => {
            const p = PROJECTS.find((x) => x.id === t);
            return p ? (
              <span key={t} className="chip bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300">
                {p.shortName}
              </span>
            ) : null;
          })}
        </div>
      ) : null}
      <div className="mt-2 flex items-center gap-2">
        <div className="flex-1">
          <ProgressBar value={pct} height="h-1.5" />
        </div>
        <span className="text-[10px] font-semibold text-slate-400">{actual > 0 ? `${Math.round((actual / 60) * 10) / 10}h` : ''}</span>
        {meta.checkpoint ? <span className="text-[10px] font-bold text-amber-500">CHECKPOINT</span> : null}
      </div>
    </button>
  );
}

export function Roadmap() {
  const { state } = useApp();
  const [params, setParams] = useSearchParams();
  const openDay = Number(params.get('day')) || null;

  const [q, setQ] = useState('');
  const [week, setWeek] = useState('all');
  const [phase, setPhase] = useState('all');
  const [statusTab, setStatusTab] = useState('all');
  const [subject, setSubject] = useState('all');
  const [project, setProject] = useState('all');

  const days = useMemo(() => {
    const query = q.trim().toLowerCase();
    return TIMETABLE.filter((meta) => {
      if (week !== 'all' && String(meta.week) !== week) return false;
      if (phase !== 'all' && String(meta.phaseId) !== phase) return false;
      if (project !== 'all' && !(meta.projectTags || []).includes(project)) return false;
      const dayState = state.days[String(meta.day)];
      const status = dayStatus(dayState, meta);
      if (statusTab === 'done' && status !== 'Done') return false;
      if (statusTab === 'inprogress' && status !== 'In Progress') return false;
      if (statusTab === 'blocked' && status !== 'Blocked') return false;
      if (statusTab === 'notstarted' && status !== 'Not Started') return false;
      if (statusTab === 'pending' && status === 'Done') return false;
      if (subject === 'python' && !meta.python) return false;
      if (subject === 'dsa' && !meta.dsa) return false;
      if (subject === 'fullstack' && !meta.fullStack) return false;
      if (subject === 'project' && !(meta.projectTags || []).length) return false;
      if (subject === 'checkpoint' && !meta.checkpoint) return false;
      if (subject !== 'all' && subject !== 'project' && subject !== 'checkpoint') {
        const block = subject === 'python' ? dayState.blocks.python : subject === 'dsa' ? dayState.blocks.dsa : dayState.blocks.fullStack;
        if (!block) return false;
      }
      if (query) {
        const hay = [meta.python, meta.dsa, meta.fullStack, meta.weekendExtra, meta.deliverable, meta.completionCriteria, meta.dsaMeta ? meta.dsaMeta.topic : '', `day ${meta.day}`, meta.date].join(' ').toLowerCase();
        const projectNames = (meta.projectTags || []).map((t) => (PROJECTS.find((p) => p.id === t) || {}).name || '').join(' ');
        if (!hay.includes(query) && !projectNames.toLowerCase().includes(query)) return false;
      }
      return true;
    });
  }, [q, week, phase, statusTab, subject, project, state]);

  const openDetail = (n) => setParams({ day: String(n) });
  const closeDetail = () => setParams({});

  return (
    <div className="space-y-4">
      <Card className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <input className="input sm:!w-72" placeholder="Search all 92 days (topics, deliverable, resources)…" value={q} onChange={(e) => setQ(e.target.value)} />
          <select className="select sm:!w-40" value={week} onChange={(e) => setWeek(e.target.value)} aria-label="Filter by week">
            <option value="all">All weeks (1–14)</option>
            {Array.from({ length: 14 }, (_, i) => i + 1).map((w) => (
              <option key={w} value={String(w)}>
                Week {w}
              </option>
            ))}
          </select>
          <select className="select sm:!w-64" value={phase} onChange={(e) => setPhase(e.target.value)} aria-label="Filter by phase">
            <option value="all">All phases</option>
            {PHASES.map((p) => (
              <option key={p.id} value={String(p.id)}>
                {p.name}
              </option>
            ))}
          </select>
          <select className="select sm:!w-44" value={subject} onChange={(e) => setSubject(e.target.value)} aria-label="Filter by subject">
            <option value="all">All subjects</option>
            <option value="python">With Python block</option>
            <option value="dsa">With DSA block</option>
            <option value="fullstack">With Full Stack block</option>
            <option value="project">Project days only</option>
            <option value="checkpoint">Checkpoint days only</option>
          </select>
          <select className="select sm:!w-56" value={project} onChange={(e) => setProject(e.target.value)} aria-label="Filter by project">
            <option value="all">Any project</option>
            {PROJECTS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Tabs tabs={STATUS_TABS} active={statusTab} onChange={setStatusTab} />
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {days.length} of 92 days shown
          </p>
        </div>
      </Card>

      {days.length ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {days.map((meta) => (
            <DayCard key={meta.day} meta={meta} onOpen={openDetail} />
          ))}
        </div>
      ) : (
        <EmptyState icon="🔍" title="No days match your filters" message="Try clearing the search box or picking different filters." />
      )}

      <DayDetailModal dayNumber={openDay} onClose={closeDetail} />
    </div>
  );
}
