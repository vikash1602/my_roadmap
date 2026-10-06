import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { PROJECTS, PROJECT_STATUS_OPTIONS, DELIVERY_OPTIONS } from '../data/projects.js';
import { formatDate } from '../lib/dates.js';
import { Badge, Card, ProgressRing, Tabs } from '../components/ui/index.jsx';

const STATUS_TABS = [
  { key: 'all', label: 'All projects' },
  ...PROJECT_STATUS_OPTIONS.map((s) => ({ key: s, label: s })),
];

function StatusSelect({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <select className="select" value={value || options[0]} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function ProjectCard({ project, open, onToggle }) {
  const { state, toggleProjectTask, updateProject } = useApp();
  const ps = state.projects[project.id] || { tasks: {} };
  const done = project.tasks.filter((t) => ps.tasks && ps.tasks[t.id]).length;
  const pct = Math.round((done / project.tasks.length) * 100);
  const status = ps.status || 'Not Started';
  const tone = status === 'Completed' ? 'Completed' : status;

  return (
    <Card>
      <button type="button" className="flex w-full items-start justify-between gap-3 text-left" onClick={onToggle}>
        <div className="flex items-start gap-3">
          <ProgressRing value={pct} size={64} stroke={7} color={status === 'Completed' ? '#10b981' : '#3d6df0'}>
            <span className="text-xs font-extrabold text-slate-700 dark:text-slate-200">{pct}%</span>
          </ProgressRing>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {project.order}. {project.name}
              </h3>
              <Badge tone={tone}>{status}</Badge>
            </div>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {project.block} · Days {project.dayRange[0]}–{project.dayRange[1]} · {formatDate(project.start, { year: false })} → {formatDate(project.end)} ·{' '}
              {done}/{project.tasks.length} tasks
            </p>
            <div className="mt-1 flex flex-wrap gap-1">
              {project.tech.map((t) => (
                <span key={t} className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <span className="text-lg text-slate-400">{open ? '▾' : '▸'}</span>
      </button>

      {open ? (
        <div className="mt-4 space-y-4 border-t border-slate-200 pt-4 dark:border-slate-800">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Features</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{project.features}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Milestone</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{project.milestone}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Testing target: {project.testsTarget}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Task checklist</p>
            <div className="mt-2 space-y-1.5">
              {project.tasks.map((t) => (
                <label key={t.id} className="flex cursor-pointer items-start gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800/60">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 accent-brand-600"
                    checked={!!(ps.tasks && ps.tasks[t.id])}
                    onChange={() => toggleProjectTask(project.id, t.id)}
                  />
                  <span className={`text-xs leading-relaxed ${ps.tasks && ps.tasks[t.id] ? 'text-slate-400 line-through dark:text-slate-500' : 'text-slate-600 dark:text-slate-300'}`}>
                    <Link to={`/roadmap?day=${t.day}`} className="mr-1 font-bold text-brand-600 hover:underline dark:text-brand-400" onClick={(e) => e.stopPropagation()}>
                      D{t.day}
                    </Link>
                    {t.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <StatusSelect label="Project status" value={status} options={PROJECT_STATUS_OPTIONS} onChange={(v) => updateProject(project.id, { status: v })} />
            <StatusSelect label="README" value={ps.readme || 'Not Started'} options={DELIVERY_OPTIONS} onChange={(v) => updateProject(project.id, { readme: v })} />
            <StatusSelect label="Testing" value={ps.testing || 'Not Started'} options={DELIVERY_OPTIONS} onChange={(v) => updateProject(project.id, { testing: v })} />
            <StatusSelect label="Deployment" value={ps.deployment || 'Not Started'} options={DELIVERY_OPTIONS} onChange={(v) => updateProject(project.id, { deployment: v })} />
          </div>

          <label className="block">
            <span className="label">GitHub repository URL</span>
            <input
              className="input"
              type="url"
              placeholder="https://github.com/your-username/your-repo"
              value={ps.githubUrl || ''}
              onChange={(e) => updateProject(project.id, { githubUrl: e.target.value })}
            />
            {ps.githubUrl ? (
              <a href={ps.githubUrl} target="_blank" rel="noreferrer" className="mt-1 inline-block text-xs font-semibold text-brand-600 hover:underline dark:text-brand-400">
                Open repository ↗
              </a>
            ) : null}
          </label>

          <label className="block">
            <span className="label">Notes</span>
            <textarea
              className="input min-h-[80px]"
              placeholder="What went well, what to improve, links to screenshots or deployed app…"
              value={ps.notes || ''}
              onChange={(e) => updateProject(project.id, { notes: e.target.value })}
            />
          </label>

          <div className="flex flex-wrap items-center gap-2">
            {project.tasks.map((t) => (
              <Link key={t.id} to={`/roadmap?day=${t.day}`} className="chip bg-brand-50 text-brand-700 hover:bg-brand-100 dark:bg-brand-950 dark:text-brand-300">
                Day {t.day}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </Card>
  );
}

export function Projects() {
  const { state, stats } = useApp();
  const [tab, setTab] = useState('all');
  const [openId, setOpenId] = useState(PROJECTS[0].id);

  const visible = PROJECTS.filter((p) => {
    if (tab === 'all') return true;
    const status = (state.projects[p.id] || {}).status || 'Not Started';
    return status === tab;
  });

  return (
    <div className="space-y-4">
      <Card className="flex flex-wrap items-center justify-between gap-3">
        <Tabs tabs={STATUS_TABS} active={tab} onChange={setTab} />
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {stats.projectStats.filter((s) => s.pct === 100).length} of {PROJECTS.length} projects fully checked off
        </p>
      </Card>

      {visible.length ? (
        <div className="space-y-3">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} open={openId === p.id} onToggle={() => setOpenId(openId === p.id ? null : p.id)} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-500 dark:text-slate-400">No projects with status “{tab}”.</p>
      )}
    </div>
  );
}
