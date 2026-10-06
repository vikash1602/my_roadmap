import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { TIMETABLE } from '../data/timetable.js';
import { PLAN_BLOCK_MINUTES, BLOCK_STATUSES, BACKLOG_PRIORITIES } from '../lib/storage.js';
import { formatDate, weekdayName } from '../lib/dates.js';
import { blocksForMeta, dayStatus, isDayComplete, dayActualMinutes } from '../lib/progress.js';
import { Badge, ConfirmDialog, Modal, ProgressBar } from './ui/index.jsx';

const BLOCK_LABELS = { python: 'Python', dsa: 'DSA', fullStack: 'Full Stack', weekendExtra: 'Weekend Extra' };

export function BlockEditor({ dayNumber, blockKey, meta, day }) {
  const { updateBlock, toggleBlockDone } = useApp();
  const block = day.blocks[blockKey];
  const planned = PLAN_BLOCK_MINUTES[blockKey];
  const text = blockKey === 'python' ? meta.python : blockKey === 'dsa' ? meta.dsa : blockKey === 'fullStack' ? meta.fullStack : meta.weekendExtra;
  const done = block.status === 'Done';

  return (
    <div className={`rounded-xl border p-3 ${done ? 'border-emerald-300 bg-emerald-50/60 dark:border-emerald-800 dark:bg-emerald-950/30' : 'border-slate-200 dark:border-slate-700'}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label className="flex cursor-pointer items-center gap-2">
          <input type="checkbox" className="h-4 w-4 accent-emerald-600" checked={done} onChange={() => toggleBlockDone(dayNumber, blockKey)} />
          <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{BLOCK_LABELS[blockKey]}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">· planned {Math.round(planned / 60 * 10) / 10}h</span>
        </label>
        <div className="flex items-center gap-2">
          <select className="select !w-auto !py-1 text-xs" value={block.status} onChange={(e) => updateBlock(dayNumber, blockKey, { status: e.target.value })} aria-label={`${BLOCK_LABELS[blockKey]} status`}>
            {BLOCK_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-1">
            <input
              type="number"
              min="0"
              step="5"
              className="input !w-20 !py-1 text-xs"
              value={block.actualMinutes}
              onChange={(e) => updateBlock(dayNumber, blockKey, { actualMinutes: Math.max(0, Number(e.target.value) || 0) })}
              aria-label={`${BLOCK_LABELS[blockKey]} actual minutes`}
            />
            <span className="text-xs text-slate-500 dark:text-slate-400">min</span>
          </div>
        </div>
      </div>
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-300">{text}</p>
      <textarea
        className="input mt-2 min-h-[52px] text-xs"
        placeholder={`Notes for the ${BLOCK_LABELS[blockKey]} block (optional)`}
        value={block.notes}
        onChange={(e) => updateBlock(dayNumber, blockKey, { notes: e.target.value })}
      />
    </div>
  );
}

export function DayDetailModal({ dayNumber, onClose }) {
  const { state, updateBlock, setDayFlags, completeAllBlocks, resetDay, addBacklog, updateDsaProblem, bulkUpdateDsaDay } = useApp();
  const [confirmReset, setConfirmReset] = useState(false);
  const [backlogOpen, setBacklogOpen] = useState(false);
  const [backlogTask, setBacklogTask] = useState('');
  const [backlogPriority, setBacklogPriority] = useState('Medium');
  const [backlogReason, setBacklogReason] = useState('');
  const open = dayNumber !== null && dayNumber !== undefined;
  const meta = open ? TIMETABLE[dayNumber - 1] : null;

  useEffect(() => {
    setConfirmReset(false);
    setBacklogOpen(false);
    setBacklogTask('');
    setBacklogReason('');
  }, [dayNumber]);

  if (!open || !meta) return null;

  const day = state.days[String(meta.day)];
  const keys = blocksForMeta(meta);
  const status = dayStatus(day, meta);
  const complete = isDayComplete(day, meta);
  const actual = dayActualMinutes(day);
  const dayProblems = Object.entries(state.dsa.problems).filter(([, p]) => p.day === meta.day);

  const markAll = () => {
    completeAllBlocks(meta.day, keys);
    setDayFlags(meta.day, { deliverableDone: true, criteriaDone: true });
  };

  return (
    <Modal open onClose={onClose} wide title={`Day ${meta.day} — ${formatDate(meta.date, { weekday: true })}`} footer={
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Badge tone={status}>{status}</Badge>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Actual {Math.round((actual / 60) * 10) / 10}h of {Math.round((meta.plannedMinutes / 60) * 10) / 10}h
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn-primary !py-1.5 text-xs" onClick={markAll}>
            ✓ Mark day complete
          </button>
          <button type="button" className="btn-secondary !py-1.5 text-xs" onClick={() => setBacklogOpen(true)}>
            📌 Add to backlog
          </button>
          <button type="button" className="btn-danger !py-1.5 text-xs" onClick={() => setConfirmReset(true)}>
            Reset day
          </button>
        </div>
      </div>
    }>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <Badge tone="Pending">Week {meta.week}</Badge>
          <Badge tone="Pending">{meta.phase}</Badge>
          <Badge tone="Pending">{meta.isWeekend ? 'Weekend · 8h' : 'Weekday · 6h'}</Badge>
          {complete ? <Badge tone="Done">Day complete 🎉</Badge> : null}
        </div>

        <ProgressBar value={Math.round((actual / meta.plannedMinutes) * 100)} label={`Actual time: ${Math.round((actual / 60) * 10) / 10}h / ${Math.round((meta.plannedMinutes / 60) * 10) / 10}h planned`} />

        <div className="space-y-3">
          {keys.map((k) => (
            <BlockEditor key={k} dayNumber={meta.day} blockKey={k} meta={meta} day={day} />
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className={`rounded-xl border p-3 ${day.deliverableDone ? 'border-emerald-300 bg-emerald-50/60 dark:border-emerald-800 dark:bg-emerald-950/30' : 'border-slate-200 dark:border-slate-700'}`}>
            <label className="flex cursor-pointer items-start gap-2">
              <input type="checkbox" className="mt-0.5 h-4 w-4 accent-emerald-600" checked={day.deliverableDone} onChange={(e) => setDayFlags(meta.day, { deliverableDone: e.target.checked })} />
              <span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">Deliverable</span>
                <span className="mt-1 block whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-300">{meta.deliverable}</span>
              </span>
            </label>
          </div>
          <div className={`rounded-xl border p-3 ${day.criteriaDone ? 'border-emerald-300 bg-emerald-50/60 dark:border-emerald-800 dark:bg-emerald-950/30' : 'border-slate-200 dark:border-slate-700'}`}>
            <label className="flex cursor-pointer items-start gap-2">
              <input type="checkbox" className="mt-0.5 h-4 w-4 accent-emerald-600" checked={day.criteriaDone} onChange={(e) => setDayFlags(meta.day, { criteriaDone: e.target.checked })} />
              <span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">Completion Criteria</span>
                <span className="mt-1 block whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-300">{meta.completionCriteria}</span>
              </span>
            </label>
          </div>
        </div>

        {keys.some((k) => day.blocks[k].status === 'Blocked') ? (
          <div>
            <label className="label" htmlFor="blocked-reason">
              What is blocking this day?
            </label>
            <input id="blocked-reason" className="input" value={day.blockedReason} onChange={(e) => setDayFlags(meta.day, { blockedReason: e.target.value })} placeholder="e.g. stuck on recursion, will clear in the weekend backlog session" />
          </div>
        ) : null}

        {dayProblems.length ? (
          <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">DSA problems for this day ({dayProblems.filter(([, p]) => p.solved).length}/{dayProblems.length} solved)</p>
              <div className="flex gap-1.5">
                <button type="button" className="btn-secondary !py-1 text-xs" onClick={() => bulkUpdateDsaDay(meta.day, { solved: true })}>
                  All solved
                </button>
                <button type="button" className="btn-secondary !py-1 text-xs" onClick={() => bulkUpdateDsaDay(meta.day, { resolved: true, withoutHelp: true })}>
                  All re-solved
                </button>
              </div>
            </div>
            <div className="space-y-2">
              {dayProblems.map(([id, p]) => (
                <div key={id} className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="w-10 text-xs font-semibold text-slate-500 dark:text-slate-400">#{p.index}</span>
                  <input className="input !w-56 flex-1 !py-1 text-xs" placeholder="Problem name" value={p.name} onChange={(e) => updateDsaProblem(id, { name: e.target.value })} />
                  <label className="flex items-center gap-1 text-xs">
                    <input type="checkbox" className="accent-emerald-600" checked={p.solved} onChange={(e) => updateDsaProblem(id, { solved: e.target.checked })} /> Solved
                  </label>
                  <label className="flex items-center gap-1 text-xs">
                    <input type="checkbox" className="accent-emerald-600" checked={p.resolved} onChange={(e) => updateDsaProblem(id, { resolved: e.target.checked })} /> Re-solved
                  </label>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {meta.resources && meta.resources.length ? (
          <div>
            <p className="section-title mb-2">Resources</p>
            <ul className="space-y-1 text-sm">
              {meta.resources.map((r) => (
                <li key={r.url}>
                  <a href={r.url} target="_blank" rel="noreferrer" className="text-brand-600 hover:underline dark:text-brand-400">
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
          Need longer notes for this day? Open the{' '}
          <a className="font-semibold text-brand-600 hover:underline dark:text-brand-400" href={`#/notes?day=${meta.day}`}>
            Notes page
          </a>{' '}
          — general notes, key concepts, questions, revision list, links and end-of-day reflection are saved there.
        </div>
      </div>

      {backlogOpen ? (
        <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950/30">
          <p className="mb-2 text-sm font-bold text-amber-800 dark:text-amber-200">Add a backlog item for Day {meta.day}</p>
          <input className="input mb-2" placeholder="What was missed?" value={backlogTask} onChange={(e) => setBacklogTask(e.target.value)} />
          <div className="mb-2 grid grid-cols-2 gap-2">
            <select className="select" value={backlogPriority} onChange={(e) => setBacklogPriority(e.target.value)}>
              {BACKLOG_PRIORITIES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
            <input className="input" placeholder="Reason (optional)" value={backlogReason} onChange={(e) => setBacklogReason(e.target.value)} />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" className="btn-secondary !py-1 text-xs" onClick={() => setBacklogOpen(false)}>
              Cancel
            </button>
            <button
              type="button"
              className="btn-primary !py-1 text-xs"
              disabled={!backlogTask.trim()}
              onClick={() => {
                addBacklog({ task: backlogTask.trim(), originalDay: meta.day, priority: backlogPriority, reason: backlogReason.trim(), dueDate: '' });
                setBacklogOpen(false);
                setBacklogTask('');
                setBacklogReason('');
              }}
            >
              Add to backlog
            </button>
          </div>
        </div>
      ) : null}

      <ConfirmDialog
        open={confirmReset}
        title={`Reset Day ${meta.day}?`}
        message="This clears every block status, actual time, note and checkbox for this day. The rest of your tracker is not touched."
        confirmLabel="Reset this day"
        onCancel={() => setConfirmReset(false)}
        onConfirm={() => {
          resetDay(meta.day);
          setConfirmReset(false);
        }}
      />
    </Modal>
  );
}
