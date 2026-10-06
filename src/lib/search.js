import { TIMETABLE } from '../data/timetable.js';
import { PROJECTS } from '../data/projects.js';
import { PYTHON_MODULES, FULLSTACK_TECHS } from '../data/curriculum.js';
import { formatDate } from './dates.js';

const includes = (hay, needle) => typeof hay === 'string' && hay.toLowerCase().includes(needle);

/**
 * Global search across days, topics, projects, DSA problems, notes,
 * backlog items and the error log. Pure client-side, case-insensitive.
 */
export function globalSearch(state, query, limit = 8) {
  const q = String(query || '').trim().toLowerCase();
  const empty = { days: [], topics: [], projects: [], dsaProblems: [], notes: [], backlog: [], errors: [] };
  if (q.length < 2) return empty;

  const days = [];
  for (const meta of TIMETABLE) {
    const day = state.days[String(meta.day)];
    const haystack = [meta.python, meta.dsa, meta.fullStack, meta.weekendExtra, meta.deliverable, meta.completionCriteria].join(' ');
    if (includes(haystack, q) || includes(String(meta.day), q) || includes(meta.date, q)) {
      days.push({
        day: meta.day,
        date: meta.date,
        label: `Day ${meta.day} — ${formatDate(meta.date, { weekday: false })}`,
        snippet: firstMatchSnippet([meta.python, meta.dsa, meta.fullStack], q),
      });
    }
    if (days.length >= limit) break;
  }

  const topics = [];
  for (const meta of TIMETABLE) {
    if (!meta.dsaMeta) continue;
    if (includes(meta.dsaMeta.topic, q) || includes(meta.dsaMeta.concept, q) || includes(meta.dsaMeta.pattern, q)) {
      topics.push({ day: meta.day, type: 'DSA topic', label: meta.dsaMeta.topic, sub: `Day ${meta.day} — ${formatDate(meta.date)}` });
    }
    if (topics.length >= limit) break;
  }
  for (const m of PYTHON_MODULES) {
    if (topics.length >= limit) break;
    if (includes(m.name, q) || includes(m.topics, q)) {
      topics.push({ type: 'Python module', label: `Module ${m.num}: ${m.name}`, sub: m.priority, to: '/python', stateKey: m.id });
    }
  }
  for (const t of FULLSTACK_TECHS) {
    if (topics.length >= limit) break;
    if (includes(t.name, q) || includes(t.topics, q)) {
      topics.push({ type: 'Full Stack', label: t.name, sub: t.area, to: '/fullstack', stateKey: t.id });
    }
  }

  const projects = [];
  for (const p of PROJECTS) {
    const hay = [p.name, p.shortName, p.tech.join(' '), p.features, p.milestone, ...p.tasks.map((t) => t.label)].join(' ');
    if (includes(hay, q)) {
      projects.push({ id: p.id, label: p.name, sub: `Project ${p.order} — ${p.block}`, to: '/projects' });
    }
  }

  const dsaProblems = [];
  for (const [id, p] of Object.entries(state.dsa.problems)) {
    const hay = [p.name, p.topic, p.mistake, p.timeComplexity].join(' ');
    if ((p.name && includes(p.name, q)) || includes(p.topic, q) || (p.mistake && includes(p.mistake, q))) {
      dsaProblems.push({
        id,
        label: p.name || `(unnamed problem ${p.index})`,
        sub: `Day ${p.day} — ${p.topic}`,
        to: `/dsa?day=${p.day}`,
      });
    }
    if (dsaProblems.length >= limit) break;
  }

  const notes = [];
  for (const meta of TIMETABLE) {
    const day = state.days[String(meta.day)];
    if (!day || !day.notes) continue;
    for (const [key, value] of Object.entries(day.notes)) {
      if (value && includes(value, q)) {
        notes.push({
          day: meta.day,
          label: `Day ${meta.day} notes — ${key}`,
          snippet: snippet(value, q),
          to: `/notes?day=${meta.day}`,
        });
        break;
      }
    }
    if (notes.length >= limit) break;
  }

  const backlog = (state.backlog || [])
    .filter((b) => includes(b.task, q) || includes(b.reason, q))
    .slice(0, limit)
    .map((b) => ({
      id: b.id,
      label: b.task,
      sub: `From Day ${b.originalDay} — ${b.priority} priority — ${b.status}`,
      to: '/backlog',
    }));

  const errors = (state.errors || [])
    .filter((e) => [e.topic, e.problem, e.mistake, e.cause, e.fix, e.lesson, e.category].some((f) => includes(f, q)))
    .slice(0, limit)
    .map((e) => ({
      id: e.id,
      label: e.problem || e.topic || 'Error log entry',
      sub: `${e.category || ''} — ${e.date || ''} — ${e.mistake || ''}`.trim(),
      to: '/error-log',
    }));

  return { days, topics, projects, dsaProblems, notes, backlog, errors };
}

export function searchResultCount(results) {
  return Object.values(results).reduce((s, arr) => s + arr.length, 0);
}

function firstMatchSnippet(fields, q) {
  for (const f of fields) {
    if (includes(f, q)) return snippet(f, q);
  }
  return '';
}

function snippet(text, q) {
  const idx = text.toLowerCase().indexOf(q);
  if (idx < 0) return text.slice(0, 90);
  const start = Math.max(0, idx - 35);
  const end = Math.min(text.length, idx + q.length + 45);
  return `${start > 0 ? '…' : ''}${text.slice(start, end)}${end < text.length ? '…' : ''}`;
}
