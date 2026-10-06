import { TIMETABLE } from '../data/timetable.js';
import { PHASES } from '../data/phases.js';
import { WEEKLY_CHECKPOINTS } from '../data/checkpoints.js';
import { PROJECTS } from '../data/projects.js';
import { PLAN_BLOCK_MINUTES } from './storage.js';
import { todayISO, dayNumberForDate, planPosition, monthKey, monthLabel } from './dates.js';

export function blocksForMeta(meta) {
  const keys = ['python', 'dsa', 'fullStack'];
  if (meta.isWeekend) keys.push('weekendExtra');
  return keys;
}

export function isBlockDone(dayState, key) {
  return dayState && dayState.blocks && dayState.blocks[key] && dayState.blocks[key].status === 'Done';
}

export function isBlockBlocked(dayState, key) {
  return dayState && dayState.blocks && dayState.blocks[key] && dayState.blocks[key].status === 'Blocked';
}

/** A day is complete only when every block, the deliverable and the criteria are done. */
export function isDayComplete(dayState, meta) {
  if (!dayState) return false;
  const keys = blocksForMeta(meta);
  const allBlocks = keys.every((k) => isBlockDone(dayState, k));
  return allBlocks && !!dayState.deliverableDone && !!dayState.criteriaDone;
}

export function dayStatus(dayState, meta) {
  if (!dayState) return 'Not Started';
  const keys = blocksForMeta(meta);
  if (keys.some((k) => isBlockBlocked(dayState, k))) return 'Blocked';
  if (isDayComplete(dayState, meta)) return 'Done';
  const anyProgress =
    keys.some((k) => dayState.blocks[k] && dayState.blocks[k].status !== 'Not Started') ||
    keys.some((k) => dayState.blocks[k] && dayState.blocks[k].actualMinutes > 0) ||
    dayState.deliverableDone ||
    dayState.criteriaDone;
  return anyProgress ? 'In Progress' : 'Not Started';
}

/** 0..1 based on completed block minutes, plus half-weight for deliverable / criteria. */
export function dayProgressFraction(dayState, meta) {
  if (!dayState) return 0;
  const keys = blocksForMeta(meta);
  const total = keys.reduce((s, k) => s + PLAN_BLOCK_MINUTES[k], 0);
  const doneMin = keys.reduce((s, k) => s + (isBlockDone(dayState, k) ? PLAN_BLOCK_MINUTES[k] : 0), 0);
  const extras = (dayState.deliverableDone ? 40 : 0) + (dayState.criteriaDone ? 40 : 0);
  const denom = total + 80;
  return Math.min(1, (doneMin + extras) / denom);
}

export function dayPlannedMinutes(meta) {
  return meta.plannedMinutes;
}

export function dayActualMinutes(dayState) {
  if (!dayState) return 0;
  return Object.values(dayState.blocks).reduce((s, b) => s + (b.actualMinutes || 0), 0);
}

export function projectCompletion(state, project) {
  const ps = state.projects[project.id] || {};
  const ids = project.tasks.map((t) => t.id);
  const done = ids.filter((id) => ps.tasks && ps.tasks[id]).length;
  const total = ids.length;
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

export function checkpointStatus(state, week) {
  const cp = state.checkpoints[String(week)];
  const routine = WEEKLY_CHECKPOINTS.find((c) => c.week === Number(week));
  if (!cp || !routine) return { status: 'Pending', done: 0, total: 0 };
  const keys = Object.keys(cp.items || {});
  const done = keys.filter((k) => cp.items[k]).length;
  const total = keys.length || 1;
  const allDone = keys.length > 0 && done === keys.length && cp.backlogCleared;
  let status = 'Pending';
  if (allDone) status = 'Completed';
  else if (done > 0 || cp.backlogCleared) status = 'In Progress';
  return { status, done, total };
}

export function currentStreakOf(state) {
  const todayDay = dayNumberForDate(todayISO());
  let end = todayDay;
  if (end === null) {
    const pos = planPosition();
    if (pos.stage === 'before') return 0;
    end = TIMETABLE.length; // after plan: count from the end
    if (!isDayComplete(state.days[String(end)], TIMETABLE[end - 1])) {
      return 0;
    }
  } else if (!isDayComplete(state.days[String(todayDay)], TIMETABLE[todayDay - 1])) {
    end = todayDay - 1;
  }
  let streak = 0;
  for (let i = end; i >= 1; i -= 1) {
    if (isDayComplete(state.days[String(i)], TIMETABLE[i - 1])) streak += 1;
    else break;
  }
  return streak;
}

export function longestStreakOf(state) {
  let best = 0;
  let run = 0;
  for (let i = 1; i <= TIMETABLE.length; i += 1) {
    if (isDayComplete(state.days[String(i)], TIMETABLE[i - 1])) {
      run += 1;
      if (run > best) best = run;
    } else {
      run = 0;
    }
  }
  return best;
}

function subjectStats(state) {
  const subjects = ['python', 'dsa', 'fullStack', 'weekendExtra'];
  const out = {};
  for (const s of subjects) out[s] = { plannedMinutes: 0, doneMinutes: 0, actualMinutes: 0, pct: 0 };
  for (const meta of TIMETABLE) {
    const day = state.days[String(meta.day)];
    for (const k of blocksForMeta(meta)) {
      out[k].plannedMinutes += PLAN_BLOCK_MINUTES[k];
      if (isBlockDone(day, k)) out[k].doneMinutes += PLAN_BLOCK_MINUTES[k];
      out[k].actualMinutes += (day.blocks[k] && day.blocks[k].actualMinutes) || 0;
    }
  }
  for (const s of subjects) {
    out[s].pct = out[s].plannedMinutes ? Math.round((out[s].doneMinutes / out[s].plannedMinutes) * 100) : 0;
  }
  return out;
}

function weekStats(state) {
  const weeks = [];
  for (let w = 1; w <= 14; w += 1) {
    const days = TIMETABLE.filter((d) => d.week === w);
    if (!days.length) continue;
    let plannedMinutes = 0;
    let actualMinutes = 0;
    let doneDays = 0;
    let doneMinutes = 0;
    for (const meta of days) {
      const day = state.days[String(meta.day)];
      plannedMinutes += meta.plannedMinutes;
      actualMinutes += dayActualMinutes(day);
      if (isDayComplete(day, meta)) doneDays += 1;
      for (const k of blocksForMeta(meta)) {
        if (isBlockDone(day, k)) doneMinutes += PLAN_BLOCK_MINUTES[k];
      }
    }
    weeks.push({
      week: w,
      label: `W${w}`,
      startDate: days[0].date,
      endDate: days[days.length - 1].date,
      totalDays: days.length,
      doneDays,
      plannedHours: Math.round((plannedMinutes / 60) * 10) / 10,
      actualHours: Math.round((actualMinutes / 60) * 10) / 10,
      completedPlannedHours: Math.round((doneMinutes / 60) * 10) / 10,
      pct: plannedMinutes ? Math.round((doneMinutes / plannedMinutes) * 100) : 0,
    });
  }
  return weeks;
}

function monthStats(state) {
  const map = new Map();
  for (const meta of TIMETABLE) {
    const key = monthKey(meta.date);
    if (!map.has(key)) {
      map.set(key, { key, label: monthLabel(key), plannedMinutes: 0, actualMinutes: 0, doneDays: 0, totalDays: 0, doneMinutes: 0 });
    }
    const m = map.get(key);
    const day = state.days[String(meta.day)];
    m.plannedMinutes += meta.plannedMinutes;
    m.actualMinutes += dayActualMinutes(day);
    m.totalDays += 1;
    if (isDayComplete(day, meta)) m.doneDays += 1;
    for (const k of blocksForMeta(meta)) {
      if (isBlockDone(day, k)) m.doneMinutes += PLAN_BLOCK_MINUTES[k];
    }
  }
  return [...map.values()].map((m) => ({
    ...m,
    plannedHours: Math.round((m.plannedMinutes / 60) * 10) / 10,
    actualHours: Math.round((m.actualMinutes / 60) * 10) / 10,
    pct: m.plannedMinutes ? Math.round((m.doneMinutes / m.plannedMinutes) * 100) : 0,
  }));
}

function phaseStats(state) {
  return PHASES.map((phase) => {
    const days = TIMETABLE.filter((d) => d.phaseId === phase.id);
    let plannedMinutes = 0;
    let actualMinutes = 0;
    let doneDays = 0;
    let doneMinutes = 0;
    for (const meta of days) {
      const day = state.days[String(meta.day)];
      plannedMinutes += meta.plannedMinutes;
      actualMinutes += dayActualMinutes(day);
      if (isDayComplete(day, meta)) doneDays += 1;
      for (const k of blocksForMeta(meta)) {
        if (isBlockDone(day, k)) doneMinutes += PLAN_BLOCK_MINUTES[k];
      }
    }
    return {
      ...phase,
      plannedHours: Math.round((plannedMinutes / 60) * 10) / 10,
      actualHours: Math.round((actualMinutes / 60) * 10) / 10,
      doneDays,
      totalDays: days.length,
      pct: plannedMinutes ? Math.round((doneMinutes / plannedMinutes) * 100) : 0,
    };
  });
}

function windowConsistency(state, windowDays) {
  const today = todayISO();
  const inWindow = TIMETABLE.filter((d) => {
    const delta = (new Date(d.date) - new Date(today)) / 86400000;
    return delta <= 0 && delta > -windowDays;
  });
  if (!inWindow.length) return { pct: 0, done: 0, total: 0 };
  const done = inWindow.filter((d) => isDayComplete(state.days[String(d.day)], d)).length;
  return { pct: Math.round((done / inWindow.length) * 100), done, total: inWindow.length };
}

export function computeStats(state) {
  const today = todayISO();
  const position = planPosition(today);
  const todayDay = position.stage === 'during' ? position.dayNumber : null;

  let doneMinutes = 0;
  let plannedMinutes = 0;
  let actualMinutes = 0;
  let daysCompleted = 0;
  let daysStarted = 0;
  let expectedPre = 0;
  let todayDone = false;

  for (const meta of TIMETABLE) {
    const day = state.days[String(meta.day)];
    plannedMinutes += meta.plannedMinutes;
    actualMinutes += dayActualMinutes(day);
    const complete = isDayComplete(day, meta);
    if (complete) daysCompleted += 1;
    if (dayStatus(day, meta) !== 'Not Started') daysStarted += 1;
    for (const k of blocksForMeta(meta)) {
      if (isBlockDone(day, k)) doneMinutes += PLAN_BLOCK_MINUTES[k];
    }
    if (meta.date < today) expectedPre += 1;
  }
  if (todayDay) todayDone = isDayComplete(state.days[String(todayDay)], TIMETABLE[todayDay - 1]);

  const expected = position.stage === 'before' ? 0 : position.stage === 'after' ? TIMETABLE.length : expectedPre + (todayDone ? 1 : 0);
  const diff = daysCompleted - expected;
  let status = 'ON TRACK';
  if (diff > 0) status = 'AHEAD';
  else if (diff < 0) status = 'BEHIND';

  const weeks = weekStats(state);
  const months = monthStats(state);
  const phases = phaseStats(state);
  const subjects = subjectStats(state);
  const last7 = windowConsistency(state, 7);
  const last30 = windowConsistency(state, 30);

  const elapsedDays = position.stage === 'before' ? 0 : position.stage === 'after' ? TIMETABLE.length : expectedPre + 1;
  const avgHoursPerDay = elapsedDays ? Math.round((actualMinutes / 60 / elapsedDays) * 10) / 10 : 0;

  const weeksSoFar = weeks.filter((w) => w.startDate <= today);
  const avgWeeklyCompletion = weeksSoFar.length
    ? Math.round(weeksSoFar.reduce((s, w) => s + w.pct, 0) / weeksSoFar.length)
    : 0;

  const backlogOpen = state.backlog.filter((b) => b.status !== 'Done');
  const backlogCount = backlogOpen.length;
  const pendingBacklog = backlogOpen.filter((b) => b.status === 'Open').length;
  const inProgressBacklog = backlogOpen.filter((b) => b.status === 'In Progress').length;

  const recentMistakes = [...state.errors]
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, 5);

  const todayMeta = todayDay ? TIMETABLE[todayDay - 1] : null;
  const nextMeta =
    position.stage === 'during' && todayDay < TIMETABLE.length
      ? TIMETABLE[todayDay]
      : position.stage === 'before'
        ? TIMETABLE[0]
        : null;

  const dsasolved = Object.values(state.dsa.problems);
  const dsaSolvedCount = dsasolved.filter((p) => p.solved).length;
  const dsaTotalCount = dsasolved.length;
  const dsaResolvedCount = dsasolved.filter((p) => p.resolved).length;
  const dsaNoHelpCount = dsasolved.filter((p) => p.withoutHelp).length;

  return {
    today,
    position,
    todayDay,
    todayMeta,
    todayDone,
    nextMeta,
    totalDays: TIMETABLE.length,
    daysCompleted,
    daysRemaining: TIMETABLE.length - daysCompleted,
    daysStarted,
    overallPct: plannedMinutes ? Math.round((doneMinutes / plannedMinutes) * 100) : 0,
    plannedHours: Math.round((plannedMinutes / 60) * 10) / 10,
    donePlannedHours: Math.round((doneMinutes / 60) * 10) / 10,
    actualHours: Math.round((actualMinutes / 60) * 10) / 10,
    expected,
    aheadBehind: { diff, status },
    currentStreak: currentStreakOf(state),
    longestStreak: longestStreakOf(state),
    subjects,
    weeks,
    months,
    phases,
    consistency: { last7, last30, avgWeeklyCompletion, avgHoursPerDay },
    backlogCount,
    pendingBacklog,
    inProgressBacklog,
    backlogList: backlogOpen,
    recentMistakes,
    errorCount: state.errors.length,
    unreviewedErrors: state.errors.filter((e) => !e.reviewed).length,
    dsa: {
      solved: dsaSolvedCount,
      total: dsaTotalCount,
      resolved: dsaResolvedCount,
      withoutHelp: dsaNoHelpCount,
      pct: dsaTotalCount ? Math.round((dsaSolvedCount / dsaTotalCount) * 100) : 0,
    },
    projectStats: PROJECTS.map((p) => ({ project: p, ...projectCompletion(state, p) })),
  };
}
