import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { loadState, saveState, clearStorage, createInitialState, normalizeState } from '../lib/storage.js';
import { computeStats } from '../lib/progress.js';

const AppContext = createContext(null);

const uid = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;

export function AppProvider({ children }) {
  const [state, setState] = useState(() => loadState());
  const saveTimer = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    if (state.theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [state.theme]);

  useEffect(() => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => saveState(state), 250);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [state]);

  const api = useMemo(() => {
    const updateDay = (dayNumber, updater) =>
      setState((prev) => {
        const key = String(dayNumber);
        const day = prev.days[key];
        if (!day) return prev;
        return { ...prev, days: { ...prev.days, [key]: updater(day) } };
      });

    return {
      state,
      toggleTheme: () => setState((p) => ({ ...p, theme: p.theme === 'dark' ? 'light' : 'dark' })),
      setTheme: (theme) => setState((p) => ({ ...p, theme })),

      updateBlock: (dayNumber, blockKey, patch) =>
        updateDay(dayNumber, (day) => ({
          ...day,
          blocks: { ...day.blocks, [blockKey]: { ...day.blocks[blockKey], ...patch } },
        })),

      toggleBlockDone: (dayNumber, blockKey) =>
        updateDay(dayNumber, (day) => {
          const b = day.blocks[blockKey];
          if (!b) return day;
          const next = b.status === 'Done' ? 'Not Started' : 'Done';
          return { ...day, blocks: { ...day.blocks, [blockKey]: { ...b, status: next } } };
        }),

      setBlockStatus: (dayNumber, blockKey, status) =>
        updateDay(dayNumber, (day) => ({
          ...day,
          blocks: {
            ...day.blocks,
            [blockKey]: { ...day.blocks[blockKey], status, ...(status === 'Blocked' ? {} : {}) },
          },
        })),

      completeAllBlocks: (dayNumber, keys) =>
        updateDay(dayNumber, (day) => {
          const blocks = { ...day.blocks };
          for (const k of keys) if (blocks[k]) blocks[k] = { ...blocks[k], status: 'Done' };
          return { ...day, blocks };
        }),

      setDayFlags: (dayNumber, patch) => updateDay(dayNumber, (day) => ({ ...day, ...patch })),

      setDayNotes: (dayNumber, noteKey, value) =>
        updateDay(dayNumber, (day) => ({ ...day, notes: { ...day.notes, [noteKey]: value } })),

      resetDay: (dayNumber) =>
        setState((prev) => {
          const fresh = createInitialState();
          return { ...prev, days: { ...prev.days, [String(dayNumber)]: fresh.days[String(dayNumber)] } };
        }),

      updateDsaProblem: (id, patch) =>
        setState((prev) => ({
          ...prev,
          dsa: { problems: { ...prev.dsa.problems, [id]: { ...prev.dsa.problems[id], ...patch } } },
        })),

      bulkUpdateDsaDay: (dayNumber, patch) =>
        setState((prev) => {
          const problems = { ...prev.dsa.problems };
          for (const id of Object.keys(problems)) {
            if (problems[id].day === dayNumber) problems[id] = { ...problems[id], ...patch };
          }
          return { ...prev, dsa: { problems } };
        }),

      updatePythonTopic: (id, patch) =>
        setState((prev) => ({
          ...prev,
          python: { topics: { ...prev.python.topics, [id]: { ...prev.python.topics[id], ...patch } } },
        })),

      updateFullStackTech: (id, patch) =>
        setState((prev) => ({
          ...prev,
          fullStack: { techs: { ...prev.fullStack.techs, [id]: { ...prev.fullStack.techs[id], ...patch } } },
        })),

      updateProject: (id, patch) =>
        setState((prev) => ({ ...prev, projects: { ...prev.projects, [id]: { ...prev.projects[id], ...patch } } })),

      toggleProjectTask: (projectId, taskId) =>
        setState((prev) => {
          const proj = prev.projects[projectId];
          return {
            ...prev,
            projects: {
              ...prev.projects,
              [projectId]: { ...proj, tasks: { ...proj.tasks, [taskId]: !proj.tasks[taskId] } },
            },
          };
        }),

      toggleCheckpointItem: (week, key) =>
        setState((prev) => {
          const cp = prev.checkpoints[String(week)];
          return {
            ...prev,
            checkpoints: {
              ...prev.checkpoints,
              [String(week)]: { ...cp, items: { ...cp.items, [key]: !cp.items[key] } },
            },
          };
        }),

      updateCheckpoint: (week, patch) =>
        setState((prev) => ({
          ...prev,
          checkpoints: { ...prev.checkpoints, [String(week)]: { ...prev.checkpoints[String(week)], ...patch } },
        })),

      addError: (entry) =>
        setState((prev) => ({ ...prev, errors: [{ id: uid(), date: new Date().toISOString().slice(0, 10), reviewed: false, ...entry }, ...prev.errors] })),

      updateError: (id, patch) =>
        setState((prev) => ({ ...prev, errors: prev.errors.map((e) => (e.id === id ? { ...e, ...patch } : e)) })),

      deleteError: (id) => setState((prev) => ({ ...prev, errors: prev.errors.filter((e) => e.id !== id) })),

      addBacklog: (entry) =>
        setState((prev) => ({ ...prev, backlog: [{ id: uid(), status: 'Open', priority: 'Medium', ...entry }, ...prev.backlog] })),

      updateBacklog: (id, patch) =>
        setState((prev) => ({ ...prev, backlog: prev.backlog.map((b) => (b.id === id ? { ...b, ...patch } : b)) })),

      deleteBacklog: (id) => setState((prev) => ({ ...prev, backlog: prev.backlog.filter((b) => b.id !== id) })),

      replaceState: (raw) => setState(normalizeState(raw)),

      resetAll: () => {
        clearStorage();
        const fresh = createInitialState();
        fresh.theme = state.theme;
        setState(fresh);
      },
    };
  }, [state]);

  const stats = useMemo(() => computeStats(state), [state]);

  const value = useMemo(() => ({ ...api, stats }), [api, stats]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
