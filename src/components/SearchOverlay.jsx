import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { globalSearch, searchResultCount } from '../lib/search.js';

function Group({ title, items, onPick }) {
  if (!items.length) return null;
  return (
    <div>
      <p className="px-1 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{title}</p>
      <div className="space-y-1">
        {items.map((item, i) => (
          <button
            key={`${title}-${item.id || item.day || item.label}-${i}`}
            type="button"
            className="w-full rounded-lg px-3 py-2 text-left transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => onPick(item)}
          >
            <p className="truncate text-sm font-semibold text-slate-700 dark:text-slate-200">{item.label}</p>
            <p className="truncate text-xs text-slate-500 dark:text-slate-400">{item.sub || item.snippet}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export function SearchOverlay({ open, onClose }) {
  const { state } = useApp();
  const [q, setQ] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQ('');
      setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const results = useMemo(() => globalSearch(state, q), [state, q]);
  const count = searchResultCount(results);

  const pick = (item) => {
    onClose();
    if (item.day) navigate(`/roadmap?day=${item.day}`);
    else if (item.to) navigate(item.to);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-slate-900/60 p-3 backdrop-blur-sm sm:p-8" onClick={onClose}>
      <div className="flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
          <span aria-hidden>🔍</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search days, topics, projects, DSA problems, notes, backlog, error log…"
            className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none dark:text-slate-100"
          />
          <button type="button" className="btn-ghost !px-2 !py-1 text-xs" onClick={onClose}>
            Esc
          </button>
        </div>
        <div className="scrollbar-thin flex-1 space-y-4 overflow-y-auto p-4">
          {q.trim().length < 2 ? (
            <p className="py-8 text-center text-sm text-slate-400 dark:text-slate-500">
              Type at least 2 characters. Searches all 92 days, topics, projects, DSA problems, notes, backlog and the error log.
            </p>
          ) : count === 0 ? (
            <p className="py-8 text-center text-sm text-slate-400 dark:text-slate-500">No results for “{q}”.</p>
          ) : (
            <>
              <Group title={`Days (${results.days.length})`} items={results.days} onPick={pick} />
              <Group title={`Topics (${results.topics.length})`} items={results.topics} onPick={pick} />
              <Group title={`Projects (${results.projects.length})`} items={results.projects} onPick={pick} />
              <Group title={`DSA problems (${results.dsaProblems.length})`} items={results.dsaProblems} onPick={pick} />
              <Group title={`Notes (${results.notes.length})`} items={results.notes.map((n) => ({ ...n, sub: n.snippet }))} onPick={pick} />
              <Group title={`Backlog (${results.backlog.length})`} items={results.backlog} onPick={pick} />
              <Group title={`Error log (${results.errors.length})`} items={results.errors} onPick={pick} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
