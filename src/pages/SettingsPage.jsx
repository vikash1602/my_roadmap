import { useRef, useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { TIMETABLE, PLAN } from '../data/timetable.js';
import { formatDate } from '../lib/dates.js';
import { STORAGE_KEY, serializeState, parseImportedJSON, downloadFile, stamp } from '../lib/storage.js';
import { trackerCSV, dsaCSV, errorLogCSV, backlogCSV } from '../lib/csv.js';
import { Badge, Card, ConfirmDialog, SectionHeader } from '../components/ui/index.jsx';

export function SettingsPage() {
  const { state, stats, setTheme, replaceState, resetAll } = useApp();
  const fileRef = useRef(null);
  const [feedback, setFeedback] = useState(null);
  const [pendingImport, setPendingImport] = useState(null);
  const [resetOpen, setResetOpen] = useState(false);

  const storageSizeKB = Math.round((JSON.stringify(state).length / 1024) * 10) / 10;

  const handleFile = async (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = parseImportedJSON(text);
      setPendingImport({ name: file.name, data: parsed });
      setFeedback(null);
    } catch (err) {
      setPendingImport(null);
      setFeedback({ type: 'err', message: `Could not import this file: ${err.message}` });
    }
  };

  return (
    <div className="space-y-4">
      <Card className="space-y-3">
        <SectionHeader title="Appearance" subtitle="Your preference is saved with all other tracker data." />
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className={state.theme === 'light' ? 'btn-primary' : 'btn-secondary'}
            onClick={() => setTheme('light')}
          >
            ☀️ Light mode
          </button>
          <button
            type="button"
            className={state.theme === 'dark' ? 'btn-primary' : 'btn-secondary'}
            onClick={() => setTheme('dark')}
          >
            🌙 Dark mode
          </button>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            The dark-mode button in the top bar toggles this too.
          </span>
        </div>
      </Card>

      <Card className="space-y-3">
        <SectionHeader
          title="Data Management"
          subtitle="Everything lives in this browser's localStorage. Export regularly to keep a safe backup, and import it again on any device."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
            <p className="text-sm font-bold text-slate-800 dark:text-slate-100">Backup (JSON)</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              A complete snapshot of the tracker: every day, DSA problem, module, project, checkpoint, note, error and backlog item.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button type="button" className="btn-primary" onClick={() => downloadFile(`study-tracker-backup-${stamp()}.json`, serializeState(state))}>
                ⬇ Export JSON
              </button>
              <button type="button" className="btn-secondary" onClick={() => fileRef.current && fileRef.current.click()}>
                ⬆ Import JSON
              </button>
              <input ref={fileRef} type="file" accept="application/json,.json" className="hidden" onChange={handleFile} />
            </div>
            {feedback ? (
              <p className={`mt-2 text-xs font-semibold ${feedback.type === 'ok' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                {feedback.message}
              </p>
            ) : null}
          </div>

          <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
            <p className="text-sm font-bold text-slate-800 dark:text-slate-100">Spreadsheet (CSV)</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Open any of these in Excel or Google Sheets. The full tracker export has one row per study day with statuses and hours.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button type="button" className="btn-secondary" onClick={() => downloadFile(`tracker-full-${stamp()}.csv`, trackerCSV(state), 'text/csv')}>
                Full tracker
              </button>
              <button type="button" className="btn-secondary" onClick={() => downloadFile(`dsa-problems-${stamp()}.csv`, dsaCSV(state), 'text/csv')}>
                DSA problems
              </button>
              <button type="button" className="btn-secondary" onClick={() => downloadFile(`error-log-${stamp()}.csv`, errorLogCSV(state), 'text/csv')}>
                Error log
              </button>
              <button type="button" className="btn-secondary" onClick={() => downloadFile(`backlog-${stamp()}.csv`, backlogCSV(state), 'text/csv')}>
                Backlog
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-rose-200 p-4 dark:border-rose-900/60">
          <p className="text-sm font-bold text-rose-700 dark:text-rose-400">Danger zone</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            Reset deletes every checkbox, note, hour, error, backlog item and setting in this tracker. Export a backup first — this cannot be undone.
          </p>
          <button type="button" className="btn-danger mt-3" onClick={() => setResetOpen(true)}>
            Reset all data
          </button>
        </div>
      </Card>

      <Card className="space-y-3">
        <SectionHeader title="Storage" subtitle="What is currently saved in this browser." />
        <div className="grid gap-3 text-xs sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Storage key', value: STORAGE_KEY },
            { label: 'Saved size', value: `≈ ${storageSizeKB} KB` },
            { label: 'Data since', value: state.createdAt ? formatDate(state.createdAt.slice(0, 10)) : '—' },
            { label: 'Days tracked', value: `${stats.daysStarted} started · ${stats.daysCompleted} complete` },
            { label: 'DSA problem slots', value: `${stats.dsa.solved}/${stats.dsa.total} solved` },
            { label: 'Error log entries', value: String(state.errors.length) },
            { label: 'Backlog items', value: `${state.backlog.length} (${stats.backlogCount} open)` },
            { label: 'Notes', value: `${Object.values(state.days).filter((d) => Object.values(d.notes).some((v) => v && v.trim())).length} days with notes` },
          ].map((r) => (
            <div key={r.label} className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800/60">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{r.label}</p>
              <p className="mt-0.5 break-words font-semibold text-slate-700 dark:text-slate-200">{r.value}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="space-y-3">
        <SectionHeader title="About This Tracker" subtitle="Built from the Python Full Stack + DSA journey study guide." />
        <div className="grid gap-3 text-xs sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800/60">
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Plan</p>
            <p className="mt-0.5 font-semibold text-slate-700 dark:text-slate-200">
              {PLAN.totalDays} days · {PLAN.totalHours} planned hours
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800/60">
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Fixed dates</p>
            <p className="mt-0.5 font-semibold text-slate-700 dark:text-slate-200">
              {formatDate(PLAN.start)} → {formatDate(PLAN.end)}
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800/60">
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Today's position</p>
            <p className="mt-0.5 font-semibold text-slate-700 dark:text-slate-200">
              {stats.position.stage === 'before' && `Starts in ${stats.position.daysUntilStart} day(s)`}
              {stats.position.stage === 'during' && `Day ${stats.todayDay} of ${PLAN.totalDays}`}
              {stats.position.stage === 'after' && `Finished ${stats.position.daysSinceEnd} day(s) ago`}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Badge>AHEAD / ON TRACK / BEHIND is calculated from your real progress</Badge>
          <span>
            The plan dates are fixed ({formatDate(PLAN.start)} to {formatDate(PLAN.end)}); the calendar date of your device only decides which day is highlighted as "today". Outside the plan window you can still browse and edit every one of the {TIMETABLE.length} days.
          </span>
        </div>
      </Card>

      <ConfirmDialog
        open={!!pendingImport}
        title="Import this backup?"
        message={`"${pendingImport ? pendingImport.name : ''}" will replace ALL current tracker data in this browser. Anything you have entered since your last export will be lost.`}
        confirmLabel="Replace all data"
        onConfirm={() => {
          replaceState(pendingImport.data);
          setPendingImport(null);
          setFeedback({ type: 'ok', message: 'Backup imported successfully. All pages now show the imported progress.' });
        }}
        onCancel={() => setPendingImport(null)}
      />

      <ConfirmDialog
        open={resetOpen}
        title="Reset all tracker data?"
        message="This permanently deletes every checkbox, hour, note, DSA entry, project update, checkpoint, error and backlog item from this browser. Export a JSON backup first if you might want this data back."
        confirmLabel="Yes, delete everything"
        onConfirm={() => {
          resetAll();
          setResetOpen(false);
          setFeedback({ type: 'ok', message: 'All data has been reset. You are starting fresh.' });
        }}
        onCancel={() => setResetOpen(false)}
      />
    </div>
  );
}
