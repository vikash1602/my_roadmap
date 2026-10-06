import { PLAN, TIMETABLE } from '../data/timetable.js';

// All date logic here is plan-relative. The plan dates are fixed in the
// timetable data; the system clock only tells us where we are inside the plan.

export function parseISO(iso) {
  const [y, m, d] = String(iso).split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function toISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function todayISO() {
  return toISO(new Date());
}

export function addDays(iso, n) {
  const d = parseISO(iso);
  d.setDate(d.getDate() + n);
  return toISO(d);
}

export function diffInDays(aISO, bISO) {
  const ms = parseISO(bISO) - parseISO(aISO);
  return Math.round(ms / 86400000);
}

export const PLAN_START = PLAN.start;
export const PLAN_END = PLAN.end;

/** Day number (1..92) for an ISO date, or null when outside the plan. */
export function dayNumberForDate(iso) {
  const n = diffInDays(PLAN.start, iso) + 1;
  return n >= 1 && n <= PLAN.totalDays ? n : null;
}

export function dateForDayNumber(n) {
  return TIMETABLE[n - 1] ? TIMETABLE[n - 1].date : null;
}

export function metaForDay(n) {
  return TIMETABLE[n - 1] || null;
}

export function todayDayNumber() {
  return dayNumberForDate(todayISO());
}

/**
 * Where are we relative to the fixed plan range?
 * { stage: 'before' | 'during' | 'after', dayNumber, daysUntilStart, daysSinceEnd }
 */
export function planPosition(iso = todayISO()) {
  if (iso < PLAN.start) {
    return { stage: 'before', dayNumber: null, daysUntilStart: diffInDays(iso, PLAN.start), daysSinceEnd: null };
  }
  if (iso > PLAN.end) {
    return { stage: 'after', dayNumber: null, daysUntilStart: null, daysSinceEnd: diffInDays(PLAN.end, iso) };
  }
  return { stage: 'during', dayNumber: dayNumberForDate(iso), daysUntilStart: null, daysSinceEnd: null };
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function formatDate(iso, { weekday = false, year = true } = {}) {
  if (!iso) return '';
  const d = parseISO(iso);
  const base = `${d.getDate()} ${MONTHS[d.getMonth()]}` + (year ? ` ${d.getFullYear()}` : '');
  return weekday ? `${WEEKDAYS_LONG[d.getDay()]}, ${base}` : base;
}

export function weekdayName(iso) {
  return WEEKDAYS_LONG[parseISO(iso).getDay()];
}

export function monthKey(iso) {
  return iso ? iso.slice(0, 7) : '';
}

export function monthLabel(key) {
  const [y, m] = key.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

/** ISO dates of every day in a week number (1..14) based on the timetable. */
export function datesForWeek(week) {
  return TIMETABLE.filter((d) => d.week === week).map((d) => d.date);
}

export { MONTHS, WEEKDAYS_LONG };
