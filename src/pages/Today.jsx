import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { TIMETABLE } from '../data/timetable.js';
import { formatDate } from '../lib/dates.js';
import { blocksForMeta, dayActualMinutes, dayProgressFraction, dayStatus, isDayComplete } from '../lib/progress.js';
import { BACKLOG_PRIORITIES } from '../lib/storage.js';
import { Badge, Card, ProgressBar, ProgressRing, SectionHeader } from '../components/ui/index.jsx';
import { BlockEditor } from '../components/DayDetailModal.jsx';

const NOTES_LABELS = {
  general: 'General notes',
  concepts: 'Key concepts learned',
  questions: 'Questions to ask',
  revise: 'Things to revise',
  links: 'Links & references',
  reflection: 'End-of-day reflection',
};

function DayEditor({ dayNumber }) {
  const { state, setDayFlags, setDayNotes, completeAllBlocks, addBacklog } = useApp();
  const meta = TIMETABLE[dayNumber - 1];
  const day = state.days[String(dayNumber)];
  const keys = blocksForMeta(meta);
  const status = dayStatus(day, meta);
  const complete = isDayComplete(day, meta);
  const actual = dayActualMinutes(day);
  const progress = Math.round(dayProgressFraction(day, meta) * 100);

  const [backlogTask, setBacklogTask] = useState('');
  const [backlogPriority, setBacklogPriority] = useState('Medium');

  return (
    <div className="space-y-4">
      <Card className="!p-0 overflow-hidden">
        <div className="grid gap-0 md:grid-cols-[1.6fr_1fr]">
          <div className="p-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={status}>{status}</Badge>
              <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">Week {meta.week}</span>
              <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{meta.phase}</span>
              <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{meta.isWeekend ? 'Weekend · 8h planned' : 'Weekday · 6h planned'}</span>
            </div>
            <h2 className="mt-3 text-xl font-extrabold text-slate-800 dark:text-slate-100">
              Day {meta.day} — {formatDate(meta.date, { weekday: true })}
            </h2>
            {complete ? <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">This day is complete. Great work! 🎉</p> : null}
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                className="btn-primary !py-1.5 text-xs"
                onClick={() => {
                  completeAllBlocks(meta.day, keys);
                  setDayFlags(meta.day, { deliverableDone: true, criteriaDone: true });
                }}
              >
                ✓ Mark all blocks done
              </button>
              <Link to={`/notes?day=${meta.day}`} className="btn-secondary !py-1.5 text-xs">
                🗒️ Open day notes
              </Link>
              <Link to={`/roadmap?day=${meta.day}`} className="btn-secondary !py-1.5 text-xs">
                🗺️ Full day details
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 border-t border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/40 md:border-l md:border-t-0">
            <ProgressRing value={progress} size={110} stroke={10}>
              <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">{progress}%</p>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">today</p>
            </ProgressRing>
            <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <p>
                Actual time<span className="ml-2 font-extrabold text-slate-800 dark:text-slate-100">{Math.round((actual / 60) * 10) / 10}h</span>
              </p>
              <p>
                Planned<span className="ml-2 font-extrabold text-slate-800 dark:text-slate-100">{Math.round((meta.plannedMinutes / 60) * 10) / 10}h</span>
              </p>
              <p>
                DSA problems<span className="ml-2 font-extrabold text-slate-800 dark:text-slate-100">{meta.dsaMeta ? meta.dsaMeta.problems : 0}</span>
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <ProgressBar value={Math.round((actual / meta.plannedMinutes) * 100)} label={`Today's logged time: ${Math.round((actual / 60) * 10) / 10}h / ${Math.round((meta.plannedMinutes / 60) * 10) / 10}h`} />
      </Card>

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

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <SectionHeader title="Day Notes" subtitle="Saved automatically as you type" action={<Link to={`/notes?day=${meta.day}`} className="text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400">Full notes page</Link>} />
          <div className="space-y-3">
            {Object.keys(NOTES_LABELS).map((key) => (
              <div key={key}>
                <label className="label" htmlFor={`note-${key}`}>
                  {NOTES_LABELS[key]}
                </label>
                <textarea id={`note-${key}`} className="input min-h-[56px] text-sm" value={day.notes[key]} onChange={(e) => setDayNotes(meta.day, key, e.target.value)} />
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
          <Card>
            <SectionHeader title="Resources for today" subtitle="From the study guide and tracker" />
            <ul className="space-y-1.5 text-sm">
              {meta.resources.map((r) => (
                <li key={r.url} className="flex items-start gap-2">
                  <span className="mt-0.5 text-slate-400">🔗</span>
                  <a href={r.url} target="_blank" rel="noreferrer" className="text-brand-600 hover:underline dark:text-brand-400">
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <SectionHeader title="Missed something?" subtitle="Push unfinished work to the weekend backlog" />
            <div className="flex flex-col gap-2 sm:flex-row">
              <input className="input flex-1" placeholder="e.g. finish binary search problem 3" value={backlogTask} onChange={(e) => setBacklogTask(e.target.value)} />
              <select className="select sm:!w-32" value={backlogPriority} onChange={(e) => setBacklogPriority(e.target.value)}>
                {BACKLOG_PRIORITIES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              <button
                type="button"
                className="btn-primary"
                disabled={!backlogTask.trim()}
                onClick={() => {
                  addBacklog({ task: backlogTask.trim(), originalDay: meta.day, priority: backlogPriority, reason: 'Missed during the study day', dueDate: '' });
                  setBacklogTask('');
                }}
              >
                Add
              </button>
            </div>
          </Card>

          <Card>
            <SectionHeader title="DSA problems today" subtitle={meta.dsaMeta ? `Topic: ${meta.dsaMeta.topic}` : ''} action={<Link to={`/dsa?day=${meta.day}`} className="text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400">Open tracker</Link>} />
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {meta.dsaMeta ? `${meta.dsaMeta.problems} problems on the DSA tracker are assigned to Day ${meta.day}. Mark them solved, re-solved and without help there.` : 'No DSA metadata for this day.'}
            </p>
            {meta.dsaMeta ? (
              <p className="mt-2 rounded-lg bg-slate-50 p-2 text-xs text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">Pattern: {meta.dsaMeta.pattern}</p>
            ) : null}
          </Card>
        </div>
      </div>
    </div>
  );
}

export function Today() {
  const { stats } = useApp();
  const [params, setParams] = useSearchParams();
  const requested = Number(params.get('day')) || null;

  const defaultDay = stats.position.stage === 'before' ? 1 : stats.position.stage === 'during' ? stats.todayDay : 92;
  const dayNumber = requested && requested >= 1 && requested <= 92 ? requested : defaultDay;

  useEffect(() => {
    setParams(dayNumber === defaultDay ? {} : { day: String(dayNumber) }, { replace: true });
  }, [dayNumber, defaultDay, setParams]);

  const notice = useMemo(() => {
    if (stats.position.stage === 'before') {
      return `The plan starts on ${formatDate('2026-10-07')} — this is a preview of Day 1. You can already tick things off if you start early.`;
    }
    if (stats.position.stage === 'after') {
      return 'The 92-day plan is finished. This is Day 92 — you can still browse and update any day.';
    }
    if (dayNumber !== stats.todayDay) {
      return `You are viewing Day ${dayNumber} (today is Day ${stats.todayDay}). Use "Back to today" to jump back.`;
    }
    if (stats.todayMeta && stats.todayMeta.checkpoint) {
      return 'It is Sunday — run the Weekly Checkpoint routine after finishing today\'s blocks.';
    }
    return null;
  }, [stats, dayNumber]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button type="button" className="btn-secondary" disabled={dayNumber <= 1} onClick={() => setParams({ day: String(dayNumber - 1) })}>
            ← Previous
          </button>
          <button type="button" className="btn-primary" onClick={() => setParams(stats.todayDay ? { day: String(stats.todayDay) } : { day: '1' })}>
            Back to today
          </button>
          <button type="button" className="btn-secondary" disabled={dayNumber >= 92} onClick={() => setParams({ day: String(dayNumber + 1) })}>
            Next →
          </button>
        </div>
        <Link to="/roadmap" className="btn-ghost text-xs">
          Browse all 92 days →
        </Link>
      </div>

      {notice ? (
        <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800 dark:border-brand-900 dark:bg-brand-950/50 dark:text-brand-200">{notice}</div>
      ) : null}

      <DayEditor dayNumber={dayNumber} />
    </div>
  );
}
