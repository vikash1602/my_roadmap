import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useApp } from '../context/AppContext.jsx';

const AXIS = '#94a3b8';
const GRID = 'rgba(148,163,184,0.25)';

function useChartColors() {
  const { state } = useApp();
  const dark = state.theme === 'dark';
  return {
    planned: dark ? '#334155' : '#cbd5e1',
    actual: '#3d6df0',
    done: '#10b981',
    amber: '#f59e0b',
    rose: '#f43f5e',
    tooltip: {
      backgroundColor: dark ? '#0f172a' : '#ffffff',
      border: `1px solid ${dark ? '#1e293b' : '#e2e8f0'}`,
      borderRadius: 10,
      fontSize: 12,
      color: dark ? '#e2e8f0' : '#0f172a',
    },
    label: dark ? '#cbd5e1' : '#475569',
  };
}

function tooltipProps(c) {
  return {
    contentStyle: c.tooltip,
    labelStyle: { color: c.label, fontWeight: 600 },
    itemStyle: { color: c.label },
  };
}

export function WeeklyHoursChart({ weeks, height = 240 }) {
  const c = useChartColors();
  const data = weeks.map((w) => ({ name: w.label, Planned: w.plannedHours, Actual: w.actualHours, pct: w.pct }));
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 5, left: -18, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} unit="h" />
        <Tooltip {...tooltipProps(c)} formatter={(v) => `${v} h`} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="Planned" fill={c.planned} radius={[4, 4, 0, 0]} />
        <Bar dataKey="Actual" fill={c.actual} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function WeeklyCompletionChart({ weeks, height = 220 }) {
  const c = useChartColors();
  const data = weeks.map((w) => ({ name: w.label, Completion: w.pct }));
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 5, right: 5, left: -18, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} />
        <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} unit="%" />
        <Tooltip {...tooltipProps(c)} formatter={(v) => `${v}%`} />
        <Line type="monotone" dataKey="Completion" stroke={c.actual} strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function MonthlyHoursChart({ months, height = 220 }) {
  const c = useChartColors();
  const data = months.map((m) => ({ name: m.label, Planned: m.plannedHours, Actual: m.actualHours }));
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 5, left: -18, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} unit="h" />
        <Tooltip {...tooltipProps(c)} formatter={(v) => `${v} h`} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="Planned" fill={c.planned} radius={[4, 4, 0, 0]} />
        <Bar dataKey="Actual" fill={c.done} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function PhaseChart({ phases, height = 260 }) {
  const c = useChartColors();
  const data = phases.map((p) => ({ name: p.shortName, Progress: p.pct, done: p.doneDays, total: p.totalDays }));
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 0 }}>
        <CartesianGrid stroke={GRID} horizontal={false} />
        <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} unit="%" />
        <YAxis type="category" dataKey="name" width={86} tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} />
        <Tooltip {...tooltipProps(c)} formatter={(v, n, p) => [`${v}% (${p.payload.done}/${p.payload.total} days)`, 'Progress']} />
        <Bar dataKey="Progress" fill={c.actual} radius={[0, 6, 6, 0]} barSize={18}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.Progress === 100 ? c.done : c.actual} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function SubjectChart({ subjects, height = 220 }) {
  const c = useChartColors();
  const labels = { python: 'Python', dsa: 'DSA', fullStack: 'Full Stack', weekendExtra: 'Weekend Extra' };
  const data = Object.entries(subjects).map(([key, s]) => ({
    name: labels[key] || key,
    Planned: Math.round((s.plannedMinutes / 60) * 10) / 10,
    Done: Math.round((s.doneMinutes / 60) * 10) / 10,
    Actual: Math.round((s.actualMinutes / 60) * 10) / 10,
  }));
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 5, left: -18, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 11, fill: AXIS }} tickLine={false} axisLine={false} unit="h" />
        <Tooltip {...tooltipProps(c)} formatter={(v) => `${v} h`} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="Planned" fill={c.planned} radius={[4, 4, 0, 0]} />
        <Bar dataKey="Actual" fill={c.amber} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
