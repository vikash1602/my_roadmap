import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext.jsx';
import { FULLSTACK_TECHS } from '../data/curriculum.js';
import { Badge, Card, ProgressBar, SectionHeader, StatCard, Tabs } from '../components/ui/index.jsx';

const AREA_TABS = [{ key: 'all', label: 'All areas' }];
for (const t of FULLSTACK_TECHS) {
  if (!AREA_TABS.some((a) => a.key === t.area)) AREA_TABS.push({ key: t.area, label: t.area });
}

function ModuleRow({ module, values, onChange, open, onToggle }) {
  const pct = values.progress || 0;
  return (
    <div className="rounded-xl border border-slate-100 px-3 py-3 dark:border-slate-800">
      <button type="button" className="flex w-full items-start justify-between gap-2 text-left" onClick={onToggle}>
        <div>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            {module.num}. {module.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{module.outcome}</p>
        </div>
        <div className="flex items-center gap-2">
          {pct === 100 ? <Badge tone="Done">100%</Badge> : <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{pct}%</span>}
          <span className="text-slate-400">{open ? '▾' : '▸'}</span>
        </div>
      </button>
      <div className="mt-2 flex items-center gap-3">
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
      </div>
      {open ? (
        <div className="mt-3 space-y-2 border-t border-slate-100 pt-3 dark:border-slate-800">
          <div className="flex flex-wrap gap-1">
            {module.topics.split('; ').map((t) => (
              <span key={t} className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {t}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Resource: <span className="whitespace-pre-line">{module.resource.split('&#10;').join(' · ')}</span>
          </p>
          <textarea
            className="input min-h-[60px] text-xs"
            placeholder="Notes for this module…"
            value={values.notes || ''}
            onChange={(e) => onChange({ notes: e.target.value })}
          />
        </div>
      ) : null}
    </div>
  );
}

export function FullStackTracker() {
  const { state, updateFullStackTech } = useApp();
  const [areaTab, setAreaTab] = useState('all');
  const [openId, setOpenId] = useState(null);

  const techs = state.fullStack.techs;
  const grouped = useMemo(() => {
    const map = new Map();
    for (const t of FULLSTACK_TECHS) {
      if (!map.has(t.area)) map.set(t.area, []);
      map.get(t.area).push(t);
    }
    return [...map.entries()].map(([area, modules]) => {
      const pct = Math.round(modules.reduce((s, m) => s + ((techs[m.id] && techs[m.id].progress) || 0), 0) / modules.length);
      return { area, modules, pct };
    });
  }, [techs]);

  const visible = areaTab === 'all' ? grouped : grouped.filter((g) => g.area === areaTab);
  const overall = grouped.length ? Math.round(grouped.reduce((s, g) => s + g.pct, 0) / grouped.length) : 0;
  const completedAreas = grouped.filter((g) => g.pct === 100).length;
  const totalModules = FULLSTACK_TECHS.length;
  const doneModules = FULLSTACK_TECHS.filter((m) => (techs[m.id] && techs[m.id].progress) === 100).length;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Overall Full Stack Progress" value={`${overall}%`} sub="average across the 14 technology areas" />
        <StatCard label="Areas Completed" value={`${completedAreas} / ${grouped.length}`} sub="technology areas at 100%" accent="text-emerald-600 dark:text-emerald-400" />
        <StatCard label="Modules Completed" value={`${doneModules} / ${totalModules}`} sub="individual modules at 100%" accent="text-brand-600 dark:text-brand-400" />
        <StatCard label="Areas Tracked" value={grouped.length} sub="HTML, CSS, JavaScript, React, Django, SQL, Docker and more" accent="text-amber-600 dark:text-amber-400" />
      </div>

      <Card className="space-y-3">
        <SectionHeader title="Full Stack Technologies" subtitle="14 areas from the study guide — drag the sliders to track your progress." />
        <div className="scrollbar-thin overflow-x-auto">
          <Tabs tabs={AREA_TABS} active={areaTab} onChange={setAreaTab} />
        </div>
        <ProgressBar value={overall} label="Overall progress" height="h-2.5" />
      </Card>

      <div className="space-y-3">
        {visible.map(({ area, modules, pct }) => (
          <Card key={area}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">{area}</h3>
                <Badge tone={pct === 100 ? 'Completed' : pct > 0 ? 'In Progress' : 'Not Started'}>
                  {pct === 100 ? 'Completed' : pct > 0 ? 'In Progress' : 'Not Started'}
                </Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {modules.length} module{modules.length > 1 ? 's' : ''}
                </span>
              </div>
              <span className="text-sm font-extrabold text-brand-600 dark:text-brand-400">{pct}%</span>
            </div>
            <div className="mt-2">
              <ProgressBar value={pct} color={pct === 100 ? 'bg-emerald-500' : 'bg-brand-500'} />
            </div>
            <div className="mt-3 space-y-2">
              {modules.map((m) => (
                <ModuleRow
                  key={m.id}
                  module={m}
                  values={techs[m.id] || { progress: 0, notes: '' }}
                  onChange={(patch) => updateFullStackTech(m.id, patch)}
                  open={openId === m.id}
                  onToggle={() => setOpenId(openId === m.id ? null : m.id)}
                />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
