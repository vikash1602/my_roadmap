import { useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { PYTHON_MODULES } from '../data/curriculum.js';
import { DELIVERY_STATUSES, REVISION_STATUSES, CONFIDENCE_LEVELS } from '../lib/storage.js';
import { Badge, Card, ProgressBar, ProgressRing, SectionHeader, StatCard } from '../components/ui/index.jsx';

function ConfidencePicker({ value, onChange }) {
  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Confidence">
      {CONFIDENCE_LEVELS.map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          onClick={() => onChange(n)}
          title={`Confidence ${n} of 5`}
          className={`h-7 w-7 rounded-full text-xs font-bold transition-colors ${
            n <= value ? 'bg-amber-400 text-amber-950' : 'bg-slate-200 text-slate-500 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-400'
          }`}
        >
          {n}
        </button>
      ))}
      <span className="ml-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">{value}/5</span>
    </div>
  );
}

function ModuleCard({ module, values, onChange, open, onToggle }) {
  const pct = values.progress || 0;
  return (
    <Card>
      <button type="button" className="flex w-full items-start justify-between gap-3 text-left" onClick={onToggle}>
        <div className="flex items-center gap-3">
          <ProgressRing value={pct} size={56} stroke={6} color={pct === 100 ? '#10b981' : '#3d6df0'}>
            <span className="text-[10px] font-extrabold text-slate-700 dark:text-slate-200">{pct}%</span>
          </ProgressRing>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {module.num}. {module.name}
              </h3>
              <Badge tone={module.priority === 'Must' ? 'Medium' : 'Low'}>{module.priority}</Badge>
              {pct === 100 ? <Badge tone="Completed">Completed</Badge> : null}
            </div>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{module.outcome}</p>
          </div>
        </div>
        <span className="text-lg text-slate-400">{open ? '▾' : '▸'}</span>
      </button>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex items-center gap-3">
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={pct}
            onChange={(e) => onChange({ progress: Number(e.target.value) })}
            className="w-full accent-brand-600"
            aria-label={`${module.name} progress`}
          />
          <span className="w-10 text-right text-xs font-bold text-slate-600 dark:text-slate-300">{pct}%</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            Practice
            <select className="select !w-auto !py-1 text-xs" value={values.practice} onChange={(e) => onChange({ practice: e.target.value })}>
              {DELIVERY_STATUSES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            Revision
            <select className="select !w-auto !py-1 text-xs" value={values.revision} onChange={(e) => onChange({ revision: e.target.value })}>
              {REVISION_STATUSES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {open ? (
        <div className="mt-4 space-y-4 border-t border-slate-200 pt-4 dark:border-slate-800">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Topics in this module</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {module.topics.split('; ').map((t) => (
                <span key={t} className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Confidence</p>
              <div className="mt-1">
                <ConfidencePicker value={values.confidence} onChange={(n) => onChange({ confidence: n })} />
              </div>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              <p className="font-bold uppercase tracking-wide">Resources</p>
              <p className="mt-1 max-w-xl whitespace-pre-line">{module.resource.includes(' — ') ? module.resource.split('&#10;').join('\n') : module.resource}</p>
            </div>
          </div>

          <label className="block">
            <span className="label">Notes</span>
            <textarea
              className="input min-h-[70px]"
              placeholder="What clicked, what needs another pass, which exercises to redo…"
              value={values.notes}
              onChange={(e) => onChange({ notes: e.target.value })}
            />
          </label>
        </div>
      ) : null}
    </Card>
  );
}

export function PythonTracker() {
  const { state, updatePythonTopic } = useApp();
  const [openId, setOpenId] = useState(null);

  const topics = state.python.topics;
  const entries = PYTHON_MODULES.map((m) => ({ module: m, values: topics[m.id] || { progress: 0, practice: 'Not Started', revision: 'Not Started', confidence: 1, notes: '' } }));
  const avg = Math.round(entries.reduce((s, e) => s + (e.values.progress || 0), 0) / entries.length);
  const completed = entries.filter((e) => e.values.progress === 100).length;
  const confident = entries.filter((e) => e.values.confidence >= 4).length;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Average Progress" value={`${avg}%`} sub="across all 12 Python modules" />
        <StatCard label="Modules Completed" value={`${completed} / 12`} sub="modules at 100%" accent="text-emerald-600 dark:text-emerald-400" />
        <StatCard label="Confident (4–5)" value={`${confident} / 12`} sub="modules you rated 4 or higher" accent="text-amber-600 dark:text-amber-400" />
        <StatCard label="Revision Passes" value={entries.filter((e) => e.values.revision === 'Revised').length} sub="modules fully revised" accent="text-brand-600 dark:text-brand-400" />
      </div>

      <Card>
        <SectionHeader title="Python Module Progress" subtitle="12 modules from the study guide — update progress, practice, revision, confidence and notes as you go." />
        <ProgressBar value={avg} label="Overall Python progress" />
      </Card>

      <div className="space-y-3">
        {entries.map(({ module, values }) => (
          <ModuleCard
            key={module.id}
            module={module}
            values={values}
            onChange={(patch) => updatePythonTopic(module.id, patch)}
            open={openId === module.id}
            onToggle={() => setOpenId(openId === module.id ? null : module.id)}
          />
        ))}
      </div>
    </div>
  );
}
