import { useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { WEEKLY_CHECKPOINTS, CHECKPOINT_ROUTINE } from '../data/checkpoints.js';
import { formatDate } from '../lib/dates.js';
import { checkpointStatus } from '../lib/progress.js';
import { Badge, Card, EmptyState, ProgressBar, SectionHeader, StatCard, Tabs } from '../components/ui/index.jsx';

const STATUS_TABS = [
  { key: 'all', label: 'All checkpoints' },
  { key: 'Pending', label: 'Pending' },
  { key: 'In Progress', label: 'In Progress' },
  { key: 'Completed', label: 'Completed' },
];

function CheckpointCard({ cp, open, onToggle }) {
  const { state, toggleCheckpointItem, updateCheckpoint } = useApp();
  const saved = state.checkpoints[String(cp.week)] || { items: {}, backlogCleared: false, notes: '' };
  const { status, done, total } = checkpointStatus(state, cp.week);

  return (
    <Card>
      <button type="button" className="flex w-full items-start justify-between gap-3 text-left" onClick={onToggle}>
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xs font-extrabold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
            W{cp.week}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {cp.final ? 'Final Checkpoint — Day 92' : `Weekly Checkpoint — Day ${cp.day}`}
              </h3>
              <Badge tone={status}>{status}</Badge>
            </div>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {formatDate(cp.date, { weekday: true })} · {done}/{total} routine items done
              {saved.backlogCleared ? ' · backlog cleared ✓' : ''}
            </p>
          </div>
        </div>
        <span className="text-lg text-slate-400">{open ? '▾' : '▸'}</span>
      </button>

      <div className="mt-3">
        <ProgressBar value={Math.round((done / (total || 1)) * 100)} color={status === 'Completed' ? 'bg-emerald-500' : 'bg-brand-500'} height="h-1.5" />
      </div>

      {open ? (
        <div className="mt-4 space-y-4 border-t border-slate-200 pt-4 dark:border-slate-800">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Sunday routine ({CHECKPOINT_ROUTINE.reduce((s, r) => s + r.minutes, 0)}+ minutes)</p>
            <div className="mt-2 space-y-1.5">
              {CHECKPOINT_ROUTINE.map((r) => (
                <label key={r.key} className="flex cursor-pointer items-start gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800/60">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 accent-brand-600"
                    checked={!!saved.items[r.key]}
                    onChange={() => toggleCheckpointItem(cp.week, r.key)}
                  />
                  <span className={`text-xs leading-relaxed ${saved.items[r.key] ? 'text-slate-400 line-through dark:text-slate-500' : 'text-slate-600 dark:text-slate-300'}`}>
                    {r.label}
                    {r.minutes ? <span className="ml-1 text-slate-400">({r.minutes} min)</span> : null}
                  </span>
                </label>
              ))}
              <label className="flex cursor-pointer items-start gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800/60">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-emerald-600"
                  checked={!!saved.backlogCleared}
                  onChange={(e) => updateCheckpoint(cp.week, { backlogCleared: e.target.checked })}
                />
                <span className={`text-xs leading-relaxed ${saved.backlogCleared ? 'text-slate-400 line-through dark:text-slate-500' : 'text-slate-600 dark:text-slate-300'}`}>
                  Backlog fully cleared for the week (required to complete the checkpoint)
                </span>
              </label>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Week focus — rebuild from memory</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {Object.entries(cp.sunday).map(([area, text]) => (
                <div key={area} className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800/60">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-brand-600 dark:text-brand-400">{area}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <label className="block">
            <span className="label">Checkpoint notes</span>
            <textarea
              className="input min-h-[70px]"
              placeholder="What you rebuilt well, what to redo next week, scores from the self-test…"
              value={saved.notes || ''}
              onChange={(e) => updateCheckpoint(cp.week, { notes: e.target.value })}
            />
          </label>
        </div>
      ) : null}
    </Card>
  );
}

export function Checkpoints() {
  const { state } = useApp();
  const [tab, setTab] = useState('all');
  const [openWeek, setOpenWeek] = useState(null);

  const withStatus = WEEKLY_CHECKPOINTS.map((cp) => ({ cp, ...checkpointStatus(state, cp.week) }));
  const visible = withStatus.filter((c) => tab === 'all' || c.status === tab);
  const completed = withStatus.filter((c) => c.status === 'Completed').length;
  const inProgress = withStatus.filter((c) => c.status === 'In Progress').length;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Checkpoints Completed" value={`${completed} / ${WEEKLY_CHECKPOINTS.length}`} sub="13 Sundays + final Day 92 checkpoint" accent="text-emerald-600 dark:text-emerald-400" />
        <StatCard label="In Progress" value={inProgress} sub="checkpoints partially done" accent="text-amber-600 dark:text-amber-400" />
        <StatCard label="Pending" value={withStatus.length - completed - inProgress} sub="not started yet" />
        <StatCard
          label="Backlogs Cleared"
          value={Object.values(state.checkpoints).filter((c) => c.backlogCleared).length}
          sub="weeks where backlog reached zero"
          accent="text-brand-600 dark:text-brand-400"
        />
      </div>

      <Card className="space-y-3">
        <SectionHeader
          title="Sunday Checkpoint Routine"
          subtitle="Every Sunday: re-solve 3 DSA problems (20 min) · rebuild 1 exercise (15 min) · review mistakes (10 min) · self-test (10 min) · update GitHub (5 min) · clear the backlog."
        />
        <Tabs tabs={STATUS_TABS} active={tab} onChange={setTab} />
      </Card>

      {visible.length ? (
        <div className="space-y-3">
          {visible.map(({ cp }) => (
            <CheckpointCard key={cp.week} cp={cp} open={openWeek === cp.week} onToggle={() => setOpenWeek(openWeek === cp.week ? null : cp.week)} />
          ))}
        </div>
      ) : (
        <EmptyState icon="📋" title={`No checkpoints with status “${tab}”`} message="Switch tabs or work through the Sunday routine to move a checkpoint forward." />
      )}
    </div>
  );
}
