import { TIMETABLE } from '../data/timetable.js';
import { dayStatus, isBlockDone, dayActualMinutes } from './progress.js';

const esc = (v) => {
  const s = v === null || v === undefined ? '' : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const row = (cols) => cols.map(esc).join(',');

/** Full tracker as CSV: one row per study day with block statuses and hours. */
export function trackerCSV(state) {
  const header = [
    'Day',
    'Date',
    'Weekday',
    'Week',
    'Phase',
    'Day Status',
    'Python',
    'DSA',
    'Full Stack',
    'Weekend Extra',
    'Planned Hours',
    'Actual Hours',
    'Deliverable Done',
    'Criteria Done',
    'Notes',
  ];
  const lines = [row(header)];
  for (const meta of TIMETABLE) {
    const day = state.days[String(meta.day)];
    lines.push(
      row([
        meta.day,
        meta.date,
        meta.weekday,
        meta.week,
        meta.phase,
        dayStatus(day, meta),
        day.blocks.python ? day.blocks.python.status : 'n/a',
        day.blocks.dsa ? day.blocks.dsa.status : 'n/a',
        day.blocks.fullStack ? day.blocks.fullStack.status : 'n/a',
        meta.isWeekend ? (isBlockDone(day, 'weekendExtra') ? 'Done' : day.blocks.weekendExtra.status) : 'n/a',
        (meta.plannedMinutes / 60).toFixed(1),
        (dayActualMinutes(day) / 60).toFixed(1),
        day.deliverableDone ? 'Yes' : 'No',
        day.criteriaDone ? 'Yes' : 'No',
        (day.notes && day.notes.general ? day.notes.general : '').replace(/\n/g, ' '),
      ])
    );
  }
  return lines.join('\r\n');
}

export function dsaCSV(state) {
  const header = [
    'Problem ID',
    'Day',
    'Topic',
    'Problem',
    'Difficulty',
    'Solved',
    'Re-solved',
    'Solved Without Help',
    'Time Complexity',
    'Space Complexity',
    'Mistake',
    'Revision Status',
  ];
  const lines = [row(header)];
  for (const p of Object.values(state.dsa.problems)) {
    lines.push(
      row([p.id, p.day, p.topic, p.name, p.difficulty, p.solved ? 'Yes' : 'No', p.resolved ? 'Yes' : 'No', p.withoutHelp ? 'Yes' : 'No', p.timeComplexity, p.spaceComplexity, p.mistake, p.revision])
    );
  }
  return lines.join('\r\n');
}

export function errorLogCSV(state) {
  const header = ['Date', 'Category', 'Topic', 'Problem', 'Mistake', 'Cause', 'Fix', 'Lesson', 'Reviewed'];
  const lines = [row(header)];
  for (const e of state.errors) {
    lines.push(row([e.date, e.category, e.topic, e.problem, e.mistake, e.cause, e.fix, e.lesson, e.reviewed ? 'Yes' : 'No']));
  }
  return lines.join('\r\n');
}

export function backlogCSV(state) {
  const header = ['Task', 'Original Day', 'Priority', 'Reason', 'Due Date', 'Status'];
  const lines = [row(header)];
  for (const b of state.backlog) {
    lines.push(row([b.task, b.originalDay, b.priority, b.reason, b.dueDate, b.status]));
  }
  return lines.join('\r\n');
}
