import { PLAN, TIMETABLE } from '../data/timetable.js';
import { PYTHON_MODULES, FULLSTACK_TECHS } from '../data/curriculum.js';
import { WEEKLY_CHECKPOINTS, CHECKPOINT_ROUTINE } from '../data/checkpoints.js';
import { PROJECTS } from '../data/projects.js';

export const STORAGE_KEY = 'pfs-dsa-tracker-v1';
export const STATE_VERSION = 1;

export const BLOCK_STATUSES = ['Not Started', 'In Progress', 'Done', 'Blocked'];
export const DAY_STATUSES = ['Not Started', 'In Progress', 'Done', 'Blocked'];
export const REVISION_STATUSES = ['Not Started', 'Revising', 'Revised'];
export const CONFIDENCE_LEVELS = [1, 2, 3, 4, 5];
export const PROJECT_STATUSES = ['Not Started', 'In Progress', 'Blocked', 'Completed'];
export const DELIVERY_STATUSES = ['Not Started', 'In Progress', 'Done'];
export const BACKLOG_PRIORITIES = ['High', 'Medium', 'Low'];
export const BACKLOG_STATUSES = ['Open', 'In Progress', 'Done'];
export const ERROR_CATEGORIES = ['Python', 'DSA', 'Full Stack', 'Project', 'Other'];

const emptyBlock = () => ({ status: 'Not Started', actualMinutes: 0, notes: '' });

export function blocksForDay(meta) {
  const keys = ['python', 'dsa', 'fullStack'];
  if (meta.isWeekend) keys.push('weekendExtra');
  return keys;
}

export const PLAN_BLOCK_MINUTES = {
  python: 90,
  dsa: 90,
  fullStack: 180,
  weekendExtra: 120,
};

function defaultDayState(meta) {
  const blocks = {};
  for (const key of blocksForDay(meta)) blocks[key] = emptyBlock();
  return {
    blocks,
    deliverableDone: false,
    criteriaDone: false,
    blockedReason: '',
    notes: {
      general: '',
      concepts: '',
      questions: '',
      revise: '',
      links: '',
      reflection: '',
    },
  };
}

function defaultDsaProblems() {
  const problems = {};
  for (const day of TIMETABLE) {
    const count = day.dsaMeta && day.dsaMeta.problems ? day.dsaMeta.problems : 0;
    for (let i = 1; i <= count; i += 1) {
      problems[`d${day.day}-p${i}`] = {
        day: day.day,
        index: i,
        topic: day.dsaMeta.topic,
        name: '',
        difficulty: '',
        solved: false,
        resolved: false,
        withoutHelp: false,
        timeComplexity: '',
        spaceComplexity: '',
        mistake: '',
        revision: 'Not Started',
      };
    }
  }
  return problems;
}

function defaultPythonTopics() {
  const topics = {};
  for (const m of PYTHON_MODULES) {
    topics[m.id] = { progress: 0, practice: 'Not Started', revision: 'Not Started', confidence: 1, notes: '' };
  }
  return topics;
}

function defaultFullStackTechs() {
  const techs = {};
  for (const t of FULLSTACK_TECHS) {
    techs[t.id] = { progress: 0, notes: '' };
  }
  return techs;
}

function defaultProjects() {
  const projects = {};
  for (const p of PROJECTS) {
    const tasks = {};
    for (const t of p.tasks) tasks[t.id] = false;
    projects[p.id] = {
      tasks,
      status: 'Not Started',
      githubUrl: '',
      readme: 'Not Started',
      testing: 'Not Started',
      deployment: 'Not Started',
      notes: '',
    };
  }
  return projects;
}

function defaultCheckpoints() {
  const checkpoints = {};
  for (const c of WEEKLY_CHECKPOINTS) {
    const items = {};
    for (const r of CHECKPOINT_ROUTINE) items[r.key] = false;
    checkpoints[String(c.week)] = { items, backlogCleared: false, notes: '' };
  }
  return checkpoints;
}

function preferredTheme() {
  try {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  } catch (e) {
    /* ignore */
  }
  return 'light';
}

export function createInitialState() {
  const days = {};
  for (const meta of TIMETABLE) days[String(meta.day)] = defaultDayState(meta);
  return {
    version: STATE_VERSION,
    theme: preferredTheme(),
    createdAt: new Date().toISOString(),
    days,
    dsa: { problems: defaultDsaProblems() },
    python: { topics: defaultPythonTopics() },
    fullStack: { techs: defaultFullStackTechs() },
    projects: defaultProjects(),
    checkpoints: defaultCheckpoints(),
    errors: [],
    backlog: [],
  };
}

/** Merge a loaded/imported state over a fresh default so no key is ever missing. */
export function normalizeState(raw) {
  const base = createInitialState();
  if (!raw || typeof raw !== 'object') return base;
  const out = { ...base, ...raw };
  out.version = STATE_VERSION;
  if (raw.theme === 'dark' || raw.theme === 'light') out.theme = raw.theme;
  out.days = base.days;
  for (const meta of TIMETABLE) {
    const key = String(meta.day);
    const saved = raw.days && raw.days[key] ? raw.days[key] : {};
    const day = defaultDayState(meta);
    day.deliverableDone = !!saved.deliverableDone;
    day.criteriaDone = !!saved.criteriaDone;
    day.blockedReason = typeof saved.blockedReason === 'string' ? saved.blockedReason : '';
    const savedBlocks = saved.blocks || {};
    for (const bKey of Object.keys(day.blocks)) {
      const sb = savedBlocks[bKey] || {};
      day.blocks[bKey] = {
        status: BLOCK_STATUSES.includes(sb.status) ? sb.status : 'Not Started',
        actualMinutes: Number.isFinite(sb.actualMinutes) && sb.actualMinutes >= 0 ? Math.round(sb.actualMinutes) : 0,
        notes: typeof sb.notes === 'string' ? sb.notes : '',
      };
    }
    if (saved.notes && typeof saved.notes === 'object') {
      for (const nk of Object.keys(day.notes)) {
        if (typeof saved.notes[nk] === 'string') day.notes[nk] = saved.notes[nk];
      }
    }
    out.days[key] = day;
  }
  out.dsa = { problems: { ...base.dsa.problems } };
  if (raw.dsa && raw.dsa.problems) {
    for (const id of Object.keys(out.dsa.problems)) {
      if (raw.dsa.problems[id]) out.dsa.problems[id] = { ...out.dsa.problems[id], ...raw.dsa.problems[id] };
    }
  }
  out.python = { topics: { ...base.python.topics } };
  if (raw.python && raw.python.topics) {
    for (const id of Object.keys(out.python.topics)) {
      if (raw.python.topics[id]) out.python.topics[id] = { ...out.python.topics[id], ...raw.python.topics[id] };
    }
  }
  out.fullStack = { techs: { ...base.fullStack.techs } };
  if (raw.fullStack && raw.fullStack.techs) {
    for (const id of Object.keys(out.fullStack.techs)) {
      if (raw.fullStack.techs[id]) out.fullStack.techs[id] = { ...out.fullStack.techs[id], ...raw.fullStack.techs[id] };
    }
  }
  out.projects = defaultProjects();
  if (raw.projects) {
    for (const id of Object.keys(out.projects)) {
      if (raw.projects[id]) out.projects[id] = { ...out.projects[id], ...raw.projects[id] };
      if (raw.projects[id] && raw.projects[id].tasks) {
        out.projects[id].tasks = { ...out.projects[id].tasks, ...raw.projects[id].tasks };
      }
    }
  }
  out.checkpoints = defaultCheckpoints();
  if (raw.checkpoints) {
    for (const wk of Object.keys(out.checkpoints)) {
      if (raw.checkpoints[wk]) {
        out.checkpoints[wk] = { ...out.checkpoints[wk], ...raw.checkpoints[wk] };
        if (raw.checkpoints[wk].items) {
          out.checkpoints[wk].items = { ...out.checkpoints[wk].items, ...raw.checkpoints[wk].items };
        }
      }
    }
  }
  out.errors = Array.isArray(raw.errors) ? raw.errors : [];
  out.backlog = Array.isArray(raw.backlog) ? raw.backlog : [];
  return out;
}

export function loadState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialState();
    return normalizeState(JSON.parse(raw));
  } catch (e) {
    console.warn('Could not read saved data, starting fresh.', e);
    return createInitialState();
  }
}

export function saveState(state) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (e) {
    console.error('Could not save data to localStorage.', e);
    return false;
  }
}

export function clearStorage() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error(e);
  }
}

export function serializeState(state) {
  return JSON.stringify(state, null, 2);
}

export function parseImportedJSON(text) {
  const raw = JSON.parse(text);
  if (!raw || typeof raw !== 'object' || !raw.days) {
    throw new Error('This file does not look like a tracker backup (missing "days").');
  }
  return normalizeState(raw);
}

export function downloadFile(filename, content, mime = 'application/json') {
  const blob = new Blob([content], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function stamp() {
  return new Date().toISOString().slice(0, 10);
}

export function planMinutesForDay(meta) {
  return meta.plannedMinutes;
}

export const TOTAL_PLANNED_MINUTES = TIMETABLE.reduce((sum, d) => sum + d.plannedMinutes, 0);

export { PLAN, TIMETABLE };
