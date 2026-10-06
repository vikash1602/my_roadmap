import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { TIMETABLE } from '../data/timetable.js';
import { formatDate, todayISO } from '../lib/dates.js';
import { dayStatus } from '../lib/progress.js';
import { Card, SectionHeader } from '../components/ui/index.jsx';
import { DayDetailModal } from '../components/DayDetailModal.jsx';

const MONTHS_TO_SHOW = [
  { key: '2026-10', label: 'October 2026' },
  { key: '2026-11', label: 'November 2026' },
  { key: '2026-12', label: 'December 2026' },
  { key: '2027-01', label: 'January 2027' },
];

const CELL_STYLES = {
  Done: 'bg-emerald-500 text-white hover:bg-emerald-600',
  'In Progress': 'bg-amber-400 text-amber-950 hover:bg-amber-500',
  Blocked: 'bg-rose-500 text-white hover:bg-rose-600',
  'Not Started': 'bg-slate-200 text-slate-600 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600',
};

const LEGEND = [
  { label: 'Done', cls: 'bg-emerald-500' },
  { label: 'In Progress', cls: 'bg-amber-400' },
  { label: 'Blocked', cls: 'bg-rose-500' },
  { label: 'Not Started', cls: 'bg-slate-200 dark:bg-slate-700' },
];

function buildMonthGrid(monthKey) {
  const [y, m] = monthKey.split('-').map(Number);
  const first = new Date(y, m - 1, 1);
  // Monday-first grid: JS getDay() is 0=Sunday.
  const offset = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(y, m, 0).getDate();
  const cells = [];
  for (let i = 0; i < offset; i += 1) cells.push(null);
  for (let d = 1; d <= daysInMonth; d += 1) {
    const iso = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    cells.push({ day: d, iso });
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

const BY_DATE = new Map(TIMETABLE.map((meta) => [meta.date, meta]));

function MonthGrid({ monthKey, label, onOpen, today }) {
  const { state } = useApp();
  const cells = buildMonthGrid(monthKey);

  return (
    <Card>
      <SectionHeader title={label} subtitle={`${cells.filter(Boolean).length} calendar days`} />
      <div className="grid grid-cols-7 gap-1 text-center">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
          <div key={d} className="pb-1 text-[11px] font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            {d}
          </div>
        ))}
        {cells.map((cell, i) => {
          if (!cell) return <div key={`empty-${i}`} className="aspect-square" />;
          const meta = BY_DATE.get(cell.iso);
          if (!meta) {
            return (
              <div
                key={cell.iso}
                className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-slate-200 text-xs text-slate-300 dark:border-slate-800 dark:text-slate-600"
              >
                {cell.day}
              </div>
            );
          }
          const status = dayStatus(state.days[String(meta.day)], meta);
          const isToday = cell.iso === today;
          return (
            <button
              key={cell.iso}
              type="button"
              onClick={() => onOpen(meta.day)}
              title={`Day ${meta.day} · ${formatDate(meta.date)} · ${status}`}
              className={`flex aspect-square flex-col items-center justify-center rounded-lg text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 ${CELL_STYLES[status]} ${
                isToday ? 'ring-2 ring-brand-500 ring-offset-1 dark:ring-offset-slate-900' : ''
              }`}
            >
              <span>{cell.day}</span>
              <span className="text-[9px] font-semibold opacity-80">D{meta.day}</span>
            </button>
          );
        })}
      </div>
      {monthKey === '2026-10' ? (
        <p className="mt-2 text-[11px] text-slate-400 dark:text-slate-500">Plan begins 7 Oct 2026. Cells before that are outside the plan.</p>
      ) : null}
      {monthKey === '2027-01' ? (
        <p className="mt-2 text-[11px] text-slate-400 dark:text-slate-500">Plan ends 6 Jan 2027. Cells after that are outside the plan.</p>
      ) : null}
    </Card>
  );
}

export function CalendarPage() {
  const [params, setParams] = useSearchParams();
  const openDay = Number(params.get('day')) || null;
  const [view, setView] = useState('all');
  const today = todayISO();

  const months = view === 'all' ? MONTHS_TO_SHOW : MONTHS_TO_SHOW.filter((m) => m.key === view);

  return (
    <div className="space-y-4">
      <Card className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {LEGEND.map((l) => (
            <span key={l.label} className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span className={`inline-block h-3 w-3 rounded ${l.cls}`} />
              {l.label}
            </span>
          ))}
        </div>
        <div className="flex gap-1 rounded-xl bg-slate-200/70 p-1 dark:bg-slate-800/70">
          <button type="button" className={`rounded-lg px-3 py-1.5 text-sm font-medium ${view === 'all' ? 'bg-white text-brand-700 shadow-sm dark:bg-slate-900 dark:text-brand-300' : 'text-slate-600 dark:text-slate-400'}`} onClick={() => setView('all')}>
            All months
          </button>
          {MONTHS_TO_SHOW.map((m) => (
            <button
              key={m.key}
              type="button"
              className={`rounded-lg px-3 py-1.5 text-sm font-medium ${view === m.key ? 'bg-white text-brand-700 shadow-sm dark:bg-slate-900 dark:text-brand-300' : 'text-slate-600 dark:text-slate-400'}`}
              onClick={() => setView(m.key)}
            >
              {m.label.split(' ')[0]}
            </button>
          ))}
        </div>
      </Card>

      <div className={`grid gap-4 ${view === 'all' ? 'xl:grid-cols-2' : ''}`}>
        {months.map((m) => (
          <MonthGrid key={m.key} monthKey={m.key} label={m.label} onOpen={(n) => setParams({ day: String(n) })} today={today} />
        ))}
      </div>

      <DayDetailModal dayNumber={openDay} onClose={() => setParams({})} />
    </div>
  );
}
