import { useEffect } from 'react';

export function Card({ className = '', children, ...rest }) {
  return (
    <div className={`card ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
      <div>
        <h2 className="text-base font-bold text-slate-800 dark:text-slate-100">{title}</h2>
        {subtitle ? <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function StatCard({ label, value, sub, accent = 'text-brand-600 dark:text-brand-400', icon }) {
  return (
    <div className="card-tight">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
        {icon ? <span className="text-lg leading-none">{icon}</span> : null}
      </div>
      <p className={`mt-1 text-2xl font-extrabold ${accent}`}>{value}</p>
      {sub ? <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{sub}</p> : null}
    </div>
  );
}

const STATUS_COLORS = {
  Done: 'bg-emerald-500',
  'In Progress': 'bg-amber-500',
  Blocked: 'bg-rose-500',
  'Not Started': 'bg-slate-300 dark:bg-slate-600',
};

export function ProgressBar({ value, color = 'bg-brand-500', height = 'h-2', label }) {
  const pct = Math.max(0, Math.min(100, Math.round(value || 0)));
  return (
    <div>
      {label ? (
        <div className="mb-1 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>{label}</span>
          <span className="font-semibold">{pct}%</span>
        </div>
      ) : null}
      <div className={`w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700 ${height}`}>
        <div
          className={`${height} rounded-full ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

export function statusBarClass(status) {
  return STATUS_COLORS[status] || 'bg-brand-500';
}

export function ProgressRing({ value = 0, size = 96, stroke = 9, color = '#3d6df0', trackColor = 'rgba(148,163,184,0.25)', children }) {
  const pct = Math.max(0, Math.min(100, value || 0));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke={trackColor} strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">{children}</div>
    </div>
  );
}

const BADGE_STYLES = {
  Done: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300',
  Completed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300',
  'In Progress': 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300',
  Pending: 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300',
  Blocked: 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300',
  'Not Started': 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300',
  AHEAD: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300',
  'ON TRACK': 'bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-300',
  BEHIND: 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300',
  Easy: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300',
  Medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300',
  Hard: 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300',
  High: 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300',
  Low: 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300',
  Open: 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300',
  Revising: 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300',
  Revised: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300',
};

export function Badge({ children, tone, className = '' }) {
  const style = BADGE_STYLES[tone || children] || 'bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-300';
  return <span className={`chip ${style} ${className}`}>{children}</span>;
}

export function Modal({ open, onClose, title, children, wide = false, footer }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-4" onClick={onClose}>
      <div
        className={`flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-xl dark:bg-slate-900 sm:rounded-2xl ${wide ? 'sm:max-w-3xl' : 'sm:max-w-lg'}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">{title}</h3>
          <button type="button" className="btn-ghost !px-2 !py-1 text-lg" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="scrollbar-thin flex-1 overflow-y-auto px-5 py-4">{children}</div>
        {footer ? <div className="border-t border-slate-200 px-5 py-3 dark:border-slate-800">{footer}</div> : null}
      </div>
    </div>
  );
}

export function ConfirmDialog({ open, title = 'Are you sure?', message, confirmLabel = 'Confirm', danger = true, onConfirm, onCancel }) {
  return (
    <Modal open={open} onClose={onCancel} title={title}>
      <p className="text-sm text-slate-600 dark:text-slate-300">{message}</p>
      <div className="mt-5 flex justify-end gap-2">
        <button type="button" className="btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="button" className={danger ? 'btn-danger' : 'btn-primary'} onClick={onConfirm}>
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
}

export function EmptyState({ icon = '📭', title, message }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 px-6 py-10 text-center dark:border-slate-700">
      <span className="text-3xl">{icon}</span>
      <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{title}</p>
      {message ? <p className="mt-1 max-w-md text-xs text-slate-500 dark:text-slate-400">{message}</p> : null}
    </div>
  );
}

export function Tabs({ tabs, active, onChange }) {
  return (
    <div className="scrollbar-thin flex gap-1 overflow-x-auto rounded-xl bg-slate-200/70 p-1 dark:bg-slate-800/70">
      {tabs.map((t) => (
        <button
          key={t.key}
          type="button"
          className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
            active === t.key
              ? 'bg-white text-brand-700 shadow-sm dark:bg-slate-900 dark:text-brand-300'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
          }`}
          onClick={() => onChange(t.key)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
