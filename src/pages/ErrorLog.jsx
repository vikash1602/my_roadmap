import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { todayISO } from '../lib/dates.js';
import { ERROR_CATEGORIES } from '../lib/storage.js';
import { errorLogCSV } from '../lib/csv.js';
import { downloadFile, stamp } from '../lib/storage.js';
import { Badge, Card, ConfirmDialog, EmptyState, Modal, SectionHeader, StatCard, Tabs } from '../components/ui/index.jsx';

const EMPTY_FORM = {
  date: '',
  category: 'DSA',
  topic: '',
  problem: '',
  mistake: '',
  cause: '',
  fix: '',
  lesson: '',
  reviewed: false,
};

const FILTER_TABS = [
  { key: 'all', label: 'All entries' },
  { key: 'unreviewed', label: 'Not reviewed' },
  { key: 'reviewed', label: 'Reviewed' },
  ...ERROR_CATEGORIES.map((c) => ({ key: c, label: c })),
];

function ErrorForm({ open, initial, onClose, onSave }) {
  const [form, setForm] = useState(initial);
  const set = (patch) => setForm((f) => ({ ...f, ...patch }));

  return (
    <Modal open={open} onClose={onClose} title={initial.id ? 'Edit error entry' : 'Log a new mistake'} wide>
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="block">
            <span className="label">Date</span>
            <input type="date" className="input" value={form.date} onChange={(e) => set({ date: e.target.value })} />
          </label>
          <label className="block">
            <span className="label">Category</span>
            <select className="select" value={form.category} onChange={(e) => set({ category: e.target.value })}>
              {ERROR_CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="label">Topic</span>
            <input className="input" placeholder="e.g. Sliding Window, Django ORM, useEffect" value={form.topic} onChange={(e) => set({ topic: e.target.value })} />
          </label>
        </div>
        <label className="block">
          <span className="label">Problem / task</span>
          <input className="input" placeholder="What were you solving when it went wrong?" value={form.problem} onChange={(e) => set({ problem: e.target.value })} />
        </label>
        <label className="block">
          <span className="label">The mistake</span>
          <textarea className="input min-h-[60px]" placeholder="Describe exactly what went wrong…" value={form.mistake} onChange={(e) => set({ mistake: e.target.value })} />
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="label">Root cause</span>
            <textarea className="input min-h-[60px]" placeholder="Why did it happen? (concept gap, typo, wrong assumption…)" value={form.cause} onChange={(e) => set({ cause: e.target.value })} />
          </label>
          <label className="block">
            <span className="label">Fix</span>
            <textarea className="input min-h-[60px]" placeholder="How did you fix it?" value={form.fix} onChange={(e) => set({ fix: e.target.value })} />
          </label>
        </div>
        <label className="block">
          <span className="label">Lesson / rule for the future</span>
          <textarea className="input min-h-[60px]" placeholder="One sentence you want to remember next time." value={form.lesson} onChange={(e) => set({ lesson: e.target.value })} />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
          <input type="checkbox" className="h-4 w-4 accent-emerald-600" checked={form.reviewed} onChange={(e) => set({ reviewed: e.target.checked })} />
          Reviewed (I understand this mistake now)
        </label>
        <div className="flex justify-end gap-2 pt-1">
          <button type="button" className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="btn-primary" onClick={() => onSave(form)} disabled={!form.mistake.trim() && !form.problem.trim()}>
            {initial.id ? 'Save changes' : 'Add entry'}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export function ErrorLog() {
  const { state, addError, updateError, deleteError } = useApp();
  const [tab, setTab] = useState('all');
  const [q, setQ] = useState('');
  const [editing, setEditing] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);

  const entries = useMemo(() => {
    const query = q.trim().toLowerCase();
    return [...state.errors]
      .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
      .filter((e) => {
        if (tab === 'unreviewed' && e.reviewed) return false;
        if (tab === 'reviewed' && !e.reviewed) return false;
        if (ERROR_CATEGORIES.includes(tab) && e.category !== tab) return false;
        if (query) {
          const hay = [e.topic, e.problem, e.mistake, e.cause, e.fix, e.lesson, e.category].join(' ').toLowerCase();
          if (!hay.includes(query)) return false;
        }
        return true;
      });
  }, [state.errors, tab, q]);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Total Entries" value={state.errors.length} sub="mistakes logged so far" />
        <StatCard label="Not Reviewed" value={state.errors.filter((e) => !e.reviewed).length} sub="entries still to revisit" accent="text-rose-600 dark:text-rose-400" />
        <StatCard label="Reviewed" value={state.errors.filter((e) => e.reviewed).length} sub="mistakes you understand and fixed" accent="text-emerald-600 dark:text-emerald-400" />
      </div>

      <Card className="space-y-3">
        <SectionHeader
          title="Error Log"
          subtitle="Every bug, wrong answer and mistake — with cause, fix and the lesson you keep."
          action={
            <div className="flex gap-2">
              <button type="button" className="btn-secondary" onClick={() => downloadFile(`error-log-${stamp()}.csv`, errorLogCSV(state), 'text/csv')}>
                Export CSV
              </button>
              <button type="button" className="btn-primary" onClick={() => setEditing({ ...EMPTY_FORM, date: todayISO() })}>
                + Log a mistake
              </button>
            </div>
          }
        />
        <div className="flex flex-wrap items-center gap-3">
          <input className="input sm:!w-72" placeholder="Search entries (topic, mistake, lesson…)…" value={q} onChange={(e) => setQ(e.target.value)} />
          <div className="scrollbar-thin overflow-x-auto">
            <Tabs tabs={FILTER_TABS} active={tab} onChange={setTab} />
          </div>
        </div>
      </Card>

      {entries.length ? (
        <div className="space-y-3">
          {entries.map((e) => (
            <Card key={e.id}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{e.date}</span>
                  <Badge tone={e.category} className="!bg-slate-100 !text-slate-600 dark:!bg-slate-800 dark:!text-slate-300">
                    {e.category}
                  </Badge>
                  {e.topic ? <Badge>{e.topic}</Badge> : null}
                  <Badge tone={e.reviewed ? 'Revised' : 'Open'}>{e.reviewed ? 'Reviewed' : 'Not reviewed'}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <label className="flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <input type="checkbox" className="h-4 w-4 accent-emerald-600" checked={!!e.reviewed} onChange={() => updateError(e.id, { reviewed: !e.reviewed })} />
                    Reviewed
                  </label>
                  <button type="button" className="btn-ghost !px-2 !py-1 text-xs" onClick={() => setEditing({ ...EMPTY_FORM, ...e })}>
                    Edit
                  </button>
                  <button type="button" className="btn-ghost !px-2 !py-1 text-xs text-rose-600 dark:text-rose-400" onClick={() => setPendingDelete(e)}>
                    Delete
                  </button>
                </div>
              </div>
              {e.problem ? <p className="mt-2 text-xs font-semibold text-slate-600 dark:text-slate-300">{e.problem}</p> : null}
              <div className="mt-2 grid gap-3 sm:grid-cols-3">
                {e.mistake ? (
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-rose-500">Mistake</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{e.mistake}</p>
                  </div>
                ) : null}
                {e.cause ? (
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-amber-500">Cause</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{e.cause}</p>
                  </div>
                ) : null}
                {e.fix ? (
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-500">Fix</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{e.fix}</p>
                  </div>
                ) : null}
              </div>
              {e.lesson ? (
                <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-xs font-semibold leading-relaxed text-brand-800 dark:bg-brand-950 dark:text-brand-200">
                  💡 {e.lesson}
                </p>
              ) : null}
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          icon="📝"
          title={state.errors.length ? 'No entries match this filter' : 'No mistakes logged yet'}
          message="When a bug or wrong answer teaches you something, log it here with its cause, fix and lesson so you never repeat it."
        />
      )}

      {editing ? (
        <ErrorForm
          open
          initial={editing}
          onClose={() => setEditing(null)}
          onSave={(form) => {
            if (form.id) updateError(form.id, form);
            else addError(form);
            setEditing(null);
          }}
        />
      ) : null}

      <ConfirmDialog
        open={!!pendingDelete}
        title="Delete this error entry?"
        message="This mistake, its cause and its lesson will be removed from the log. This cannot be undone."
        confirmLabel="Delete entry"
        onConfirm={() => {
          deleteError(pendingDelete.id);
          setPendingDelete(null);
        }}
        onCancel={() => setPendingDelete(null)}
      />
    </div>
  );
}
