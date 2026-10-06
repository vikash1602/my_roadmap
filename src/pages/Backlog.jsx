import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { todayISO, metaForDay } from '../lib/dates.js';
import { BACKLOG_PRIORITIES, BACKLOG_STATUSES, downloadFile, stamp } from '../lib/storage.js';
import { backlogCSV } from '../lib/csv.js';
import { Badge, Card, ConfirmDialog, EmptyState, Modal, SectionHeader, StatCard, Tabs } from '../components/ui/index.jsx';

const EMPTY_FORM = {
  task: '',
  originalDay: '',
  priority: 'Medium',
  reason: '',
  dueDate: '',
  status: 'Open',
};

const FILTER_TABS = [
  { key: 'all', label: 'All items' },
  ...BACKLOG_STATUSES.map((s) => ({ key: s, label: s })),
  { key: 'high', label: 'High priority' },
];

function dayLabel(n) {
  const meta = metaForDay(Number(n));
  if (!meta) return n ? `D${n}` : '—';
  return `D${n} · ${meta.weekday.slice(0, 3)} ${meta.date.slice(8)}/${meta.date.slice(5, 7)}`;
}

function BacklogForm({ open, initial, onClose, onSave }) {
  const [form, setForm] = useState(initial);
  const set = (patch) => setForm((f) => ({ ...f, ...patch }));

  return (
    <Modal open={open} onClose={onClose} title={initial.id ? 'Edit backlog item' : 'Add to backlog'} wide>
      <div className="space-y-3">
        <label className="block">
          <span className="label">Task</span>
          <input
            className="input"
            placeholder="What was left unfinished? e.g. Finish 3Array — Kadane's algorithm practice"
            value={form.task}
            onChange={(e) => set({ task: e.target.value })}
          />
        </label>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="block">
            <span className="label">Original day</span>
            <select className="select" value={form.originalDay} onChange={(e) => set({ originalDay: e.target.value })}>
              <option value="">— none —</option>
              {Array.from({ length: 92 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {dayLabel(n)}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="label">Priority</span>
            <select className="select" value={form.priority} onChange={(e) => set({ priority: e.target.value })}>
              {BACKLOG_PRIORITIES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="label">Due date (clear by)</span>
            <input type="date" className="input" value={form.dueDate} onChange={(e) => set({ dueDate: e.target.value })} />
          </label>
        </div>
        <label className="block">
          <span className="label">Reason / note</span>
          <textarea
            className="input min-h-[60px]"
            placeholder="Why did it slip? (ran out of time, got stuck, health, other commitment…)"
            value={form.reason}
            onChange={(e) => set({ reason: e.target.value })}
          />
        </label>
        <label className="block sm:max-w-[200px]">
          <span className="label">Status</span>
          <select className="select" value={form.status} onChange={(e) => set({ status: e.target.value })}>
            {BACKLOG_STATUSES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <div className="flex justify-end gap-2 pt-1">
          <button type="button" className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={() => onSave(form)}
            disabled={!form.task.trim()}
          >
            {initial.id ? 'Save changes' : 'Add item'}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export function Backlog() {
  const { state, stats, addBacklog, updateBacklog, deleteBacklog } = useApp();
  const navigate = useNavigate();
  const [tab, setTab] = useState('all');
  const [pq, setPq] = useState('all');
  const [q, setQ] = useState('');
  const [editing, setEditing] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);

  const today = todayISO();

  const items = useMemo(() => {
    const query = q.trim().toLowerCase();
    return [...state.backlog]
      .sort((a, b) => {
        if ((a.status === 'Done') !== (b.status === 'Done')) return a.status === 'Done' ? 1 : -1;
        const pa = BACKLOG_PRIORITIES.indexOf(a.priority);
        const pb = BACKLOG_PRIORITIES.indexOf(b.priority);
        if (pa !== pb) return pa - pb;
        return (a.dueDate || '9999').localeCompare(b.dueDate || '9999');
      })
      .filter((b) => {
        if (BACKLOG_STATUSES.includes(tab) && b.status !== tab) return false;
        if (tab === 'high' && b.priority !== 'High') return false;
        if (pq !== 'all' && b.priority !== pq) return false;
        if (query) {
          const hay = [b.task, b.reason, b.priority, b.status].join(' ').toLowerCase();
          if (!hay.includes(query)) return false;
        }
        return true;
      });
  }, [state.backlog, tab, pq, q]);

  const doneCount = state.backlog.filter((b) => b.status === 'Done').length;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Open Items" value={stats.pendingBacklog} sub="waiting to be picked up" accent="text-amber-600 dark:text-amber-400" icon="📥" />
        <StatCard label="In Progress" value={stats.inProgressBacklog} sub="being cleared right now" icon="🔁" />
        <StatCard label="Done" value={doneCount} sub="backlog cleared for good" accent="text-emerald-600 dark:text-emerald-400" icon="✅" />
        <StatCard label="Total Logged" value={state.backlog.length} sub="items that ever slipped" icon="📋" />
      </div>

      <Card className="space-y-3">
        <SectionHeader
          title="Backlog"
          subtitle="Every task you couldn't finish on its planned day. Clear it during the weekend catch-up so nothing is silently lost."
          action={
            <div className="flex gap-2">
              <button type="button" className="btn-secondary" onClick={() => downloadFile(`backlog-${stamp()}.csv`, backlogCSV(state), 'text/csv')}>
                Export CSV
              </button>
              <button type="button" className="btn-primary" onClick={() => setEditing({ ...EMPTY_FORM, dueDate: today })}>
                + Add item
              </button>
            </div>
          }
        />
        <div className="flex flex-wrap items-center gap-3">
          <input className="input sm:!w-72" placeholder="Search backlog (task, reason…)…" value={q} onChange={(e) => setQ(e.target.value)} />
          <select className="select sm:!w-40" value={pq} onChange={(e) => setPq(e.target.value)}>
            <option value="all">All priorities</option>
            {BACKLOG_PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p} priority
              </option>
            ))}
          </select>
          <div className="scrollbar-thin overflow-x-auto">
            <Tabs tabs={FILTER_TABS} active={tab} onChange={setTab} />
          </div>
        </div>
      </Card>

      {items.length ? (
        <div className="space-y-3">
          {items.map((b) => {
            const overdue = b.status !== 'Done' && b.dueDate && b.dueDate < today;
            const meta = b.originalDay ? metaForDay(Number(b.originalDay)) : null;
            return (
              <Card key={b.id}>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-emerald-600"
                        checked={b.status === 'Done'}
                        onChange={() => updateBacklog(b.id, { status: b.status === 'Done' ? 'Open' : 'Done' })}
                      />
                    </label>
                    <span className={`text-sm font-semibold ${b.status === 'Done' ? 'text-slate-400 line-through dark:text-slate-500' : 'text-slate-800 dark:text-slate-100'}`}>
                      {b.task}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge tone={b.priority}>{b.priority}</Badge>
                    <select className="select !py-1 !text-xs sm:!w-32" value={b.status} onChange={(e) => updateBacklog(b.id, { status: e.target.value })}>
                      {BACKLOG_STATUSES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                    <button type="button" className="btn-ghost !px-2 !py-1 text-xs" onClick={() => setEditing({ ...EMPTY_FORM, ...b })}>
                      Edit
                    </button>
                    <button type="button" className="btn-ghost !px-2 !py-1 text-xs text-rose-600 dark:text-rose-400" onClick={() => setPendingDelete(b)}>
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                  {meta ? (
                    <button
                      type="button"
                      className="font-semibold text-brand-600 hover:underline dark:text-brand-400"
                      onClick={() => navigate(`/roadmap?day=${meta.day}`)}
                    >
                      Original day: {dayLabel(meta.day)} ↗
                    </button>
                  ) : (
                    <span>Original day: —</span>
                  )}
                  <span>
                    Due:{' '}
                    <span className={overdue ? 'font-bold text-rose-500' : 'font-semibold text-slate-600 dark:text-slate-300'}>
                      {b.dueDate || 'not set'}
                    </span>
                    {overdue ? ' · overdue' : ''}
                  </span>
                </div>
                {b.reason ? <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{b.reason}</p> : null}
              </Card>
            );
          })}
        </div>
      ) : (
        <EmptyState
          icon="🧹"
          title={state.backlog.length ? 'No items match this filter' : 'Backlog is empty — great job'}
          message="When a day's work doesn't get finished, add it here so you can clear it during the next weekend catch-up instead of losing it."
        />
      )}

      {editing ? (
        <BacklogForm
          open
          initial={editing}
          onClose={() => setEditing(null)}
          onSave={(form) => {
            const payload = { ...form, originalDay: form.originalDay === '' ? '' : Number(form.originalDay) };
            if (form.id) updateBacklog(form.id, payload);
            else addBacklog(payload);
            setEditing(null);
          }}
        />
      ) : null}

      <ConfirmDialog
        open={!!pendingDelete}
        title="Delete this backlog item?"
        message="The task, its reason and its due date will be removed. This cannot be undone."
        confirmLabel="Delete item"
        onConfirm={() => {
          deleteBacklog(pendingDelete.id);
          setPendingDelete(null);
        }}
        onCancel={() => setPendingDelete(null)}
      />
    </div>
  );
}
