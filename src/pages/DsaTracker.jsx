import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { TIMETABLE } from '../data/timetable.js';
import { formatDate } from '../lib/dates.js';
import { REVISION_STATUSES } from '../lib/storage.js';
import { Badge, Card, EmptyState, StatCard, Tabs } from '../components/ui/index.jsx';

const DIFFICULTIES = ['', 'Easy', 'Medium', 'Hard'];

const STATUS_TABS = [
  { key: 'all', label: 'All problems' },
  { key: 'solved', label: 'Solved' },
  { key: 'unsolved', label: 'Not solved yet' },
  { key: 'withoutHelp', label: 'Solved without help' },
  { key: 'needsrevise', label: 'Needs revision' },
  { key: 'revised', label: 'Revised' },
];

function ProblemRow({ id, problem, onUpdate }) {
  const set = (patch) => onUpdate(id, patch);
  return (
    <div className="grid gap-2 border-t border-slate-100 px-3 py-3 dark:border-slate-800 lg:grid-cols-[minmax(0,2.2fr)_7rem_5.5rem_5.5rem_5.5rem_7rem_7rem_minmax(0,1.4fr)_8rem] lg:items-center">
      <div>
        <input
          className="input !py-1.5 text-xs"
          placeholder={`Problem ${problem.index} — type the exact problem name…`}
          value={problem.name}
          onChange={(e) => set({ name: e.target.value })}
        />
        <p className="mt-1 text-[10px] text-slate-400 dark:text-slate-500">{problem.topic}</p>
      </div>

      <select className="select !py-1.5 text-xs" value={problem.difficulty} onChange={(e) => set({ difficulty: e.target.value })} aria-label="Difficulty">
        <option value="">Difficulty…</option>
        {DIFFICULTIES.filter(Boolean).map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>

      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 lg:justify-center" title="Solved at least once">
        <input type="checkbox" className="h-4 w-4 accent-emerald-600" checked={problem.solved} onChange={(e) => set({ solved: e.target.checked })} />
        Solved
      </label>
      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 lg:justify-center" title="Re-solved later for practice">
        <input type="checkbox" className="h-4 w-4 accent-brand-600" checked={problem.resolved} onChange={(e) => set({ resolved: e.target.checked })} />
        Re-solved
      </label>
      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 lg:justify-center" title="Solved without looking at hints or solutions">
        <input type="checkbox" className="h-4 w-4 accent-amber-500" checked={problem.withoutHelp} onChange={(e) => set({ withoutHelp: e.target.checked })} />
        No help
      </label>

      <input className="input !py-1.5 font-mono text-xs" placeholder="Time  e.g. O(n)" value={problem.timeComplexity} onChange={(e) => set({ timeComplexity: e.target.value })} aria-label="Time complexity" />
      <input className="input !py-1.5 font-mono text-xs" placeholder="Space  e.g. O(1)" value={problem.spaceComplexity} onChange={(e) => set({ spaceComplexity: e.target.value })} aria-label="Space complexity" />

      <input className="input !py-1.5 text-xs" placeholder="Mistake / lesson from this problem…" value={problem.mistake} onChange={(e) => set({ mistake: e.target.value })} />

      <select className="select !py-1.5 text-xs" value={problem.revision} onChange={(e) => set({ revision: e.target.value })} aria-label="Revision status">
        {REVISION_STATUSES.map((r) => (
          <option key={r}>{r}</option>
        ))}
      </select>
    </div>
  );
}

function DayGroup({ meta, problems, onUpdate, onBulk }) {
  const solved = problems.filter((p) => p.solved).length;
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <button type="button" className="flex items-center gap-2 text-left" onClick={() => setOpen(!open)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-xs font-extrabold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            {meta.day}
          </span>
          <span>
            <span className="block text-sm font-bold text-slate-800 dark:text-slate-100">{meta.dsaMeta ? meta.dsaMeta.topic : meta.dsa.split(';')[0]}</span>
            <span className="block text-[11px] text-slate-500 dark:text-slate-400">
              {formatDate(meta.date)} · {meta.dsaMeta ? meta.dsaMeta.concept : ''} {meta.dsaMeta && meta.dsaMeta.pattern ? `· ${meta.dsaMeta.pattern}` : ''}
            </span>
          </span>
          <span className="text-slate-400">{open ? '▾' : '▸'}</span>
        </button>
        <div className="flex items-center gap-2">
          <Badge tone={solved === problems.length ? 'Done' : 'Pending'}>
            {solved}/{problems.length} solved
          </Badge>
          <Link to={`/roadmap?day=${meta.day}`} className="chip bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
            Open day
          </Link>
          <button type="button" className="btn-ghost !px-2 !py-1 text-xs" onClick={() => onBulk(meta.day, { solved: true })}>
            ✓ Mark all solved
          </button>
          <button type="button" className="btn-ghost !px-2 !py-1 text-xs" onClick={() => onBulk(meta.day, { solved: false, resolved: false, withoutHelp: false })}>
            Clear
          </button>
        </div>
      </div>
      {open ? (
        <div className="mt-3 rounded-xl border border-slate-100 dark:border-slate-800">
          <div className="hidden gap-2 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-slate-400 lg:grid lg:grid-cols-[minmax(0,2.2fr)_7rem_5.5rem_5.5rem_5.5rem_7rem_7rem_minmax(0,1.4fr)_8rem]">
            <span>Problem</span>
            <span>Difficulty</span>
            <span className="text-center">Solved</span>
            <span className="text-center">Re-solved</span>
            <span className="text-center">No help</span>
            <span>Time</span>
            <span>Space</span>
            <span>Mistake</span>
            <span>Revision</span>
          </div>
          {problems.map((p) => (
            <ProblemRow key={p.id} id={p.id} problem={p} onUpdate={onUpdate} />
          ))}
        </div>
      ) : null}
    </Card>
  );
}

export function DsaTracker() {
  const { state, stats, updateDsaProblem, bulkUpdateDsaDay } = useApp();
  const [q, setQ] = useState('');
  const [day, setDay] = useState('all');
  const [topic, setTopic] = useState('all');
  const [difficulty, setDifficulty] = useState('all');
  const [tab, setTab] = useState('all');

  const topics = useMemo(() => {
    const set = new Set();
    for (const meta of TIMETABLE) if (meta.dsaMeta && meta.dsaMeta.topic) set.add(meta.dsaMeta.topic);
    return [...set].sort();
  }, []);

  const allProblems = useMemo(() => Object.entries(state.dsa.problems).map(([id, p]) => ({ id, ...p })), [state.dsa.problems]);

  const groups = useMemo(() => {
    const query = q.trim().toLowerCase();
    const filtered = allProblems.filter((p) => {
      if (day !== 'all' && String(p.day) !== day) return false;
      if (topic !== 'all' && p.topic !== topic) return false;
      if (difficulty !== 'all' && p.difficulty !== difficulty) return false;
      if (tab === 'solved' && !p.solved) return false;
      if (tab === 'unsolved' && p.solved) return false;
      if (tab === 'withoutHelp' && !p.withoutHelp) return false;
      if (tab === 'needsrevise' && p.revision !== 'Revising') return false;
      if (tab === 'revised' && p.revision !== 'Revised') return false;
      if (query) {
        const hay = `${p.name} ${p.topic} ${p.mistake}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });
    const map = new Map();
    for (const p of filtered) {
      if (!map.has(p.day)) map.set(p.day, []);
      map.get(p.day).push(p);
    }
    return [...map.entries()].sort((a, b) => a[0] - b[0]).map(([dayNumber, problems]) => ({ meta: TIMETABLE[dayNumber - 1], problems }));
  }, [allProblems, q, day, topic, difficulty, tab]);

  const shownTotal = groups.reduce((s, g) => s + g.problems.length, 0);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Problems Solved" value={`${stats.dsa.solved} / ${stats.dsa.total}`} sub={`${stats.dsa.pct}% of all tracked problem slots`} />
        <StatCard label="Re-solved" value={stats.dsa.resolved} sub="problems solved more than once" accent="text-brand-600 dark:text-brand-400" />
        <StatCard label="Solved Without Help" value={stats.dsa.withoutHelp} sub="no hints, no solutions" accent="text-emerald-600 dark:text-emerald-400" />
        <StatCard label="Still Not Solved" value={stats.dsa.total - stats.dsa.solved} sub="problem slots to work through" accent="text-amber-600 dark:text-amber-400" />
      </div>

      <Card className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <input className="input sm:!w-64" placeholder="Search problem name, topic or mistake…" value={q} onChange={(e) => setQ(e.target.value)} />
          <select className="select sm:!w-44" value={day} onChange={(e) => setDay(e.target.value)} aria-label="Filter by day">
            <option value="all">All days (1–92)</option>
            {TIMETABLE.map((d) => (
              <option key={d.day} value={String(d.day)}>
                Day {d.day} — {d.dsaMeta ? d.dsaMeta.topic : d.dsa.split(';')[0]}
              </option>
            ))}
          </select>
          <select className="select sm:!w-72" value={topic} onChange={(e) => setTopic(e.target.value)} aria-label="Filter by DSA topic">
            <option value="all">All DSA topics</option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select className="select sm:!w-36" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} aria-label="Filter by difficulty">
            <option value="all">Any difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Tabs tabs={STATUS_TABS} active={tab} onChange={setTab} />
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {shownTotal} problem{shownTotal === 1 ? '' : 's'} in {groups.length} day{groups.length === 1 ? '' : 's'}
          </p>
        </div>
      </Card>

      {groups.length ? (
        <div className="space-y-3">
          {groups.map(({ meta, problems }) => (
            <DayGroup key={meta.day} meta={meta} problems={problems} onUpdate={updateDsaProblem} onBulk={bulkUpdateDsaDay} />
          ))}
        </div>
      ) : (
        <EmptyState icon="🧩" title="No problems match these filters" message="Try a different day, topic or status tab. Problem slots are created automatically from the 92-day plan." />
      )}
    </div>
  );
}
