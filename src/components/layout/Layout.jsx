import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';
import { formatDate } from '../../lib/dates.js';
import { SearchOverlay } from '../SearchOverlay.jsx';

export const NAV_GROUPS = [
  {
    title: 'Overview',
    items: [
      { to: '/', label: 'Dashboard', icon: '🏠' },
      { to: '/today', label: "Today's Focus", icon: '🎯' },
      { to: '/roadmap', label: '92-Day Roadmap', icon: '🗺️' },
      { to: '/calendar', label: 'Calendar', icon: '📅' },
    ],
  },
  {
    title: 'Tracking',
    items: [
      { to: '/progress', label: 'Progress', icon: '📈' },
      { to: '/streaks', label: 'Streaks & Habits', icon: '🔥' },
      { to: '/phases', label: 'Phases', icon: '🧭' },
      { to: '/projects', label: 'Projects', icon: '🛠️' },
    ],
  },
  {
    title: 'Subjects',
    items: [
      { to: '/dsa', label: 'DSA Tracker', icon: '🧮' },
      { to: '/python', label: 'Python Tracker', icon: '🐍' },
      { to: '/fullstack', label: 'Full Stack Tracker', icon: '🌐' },
    ],
  },
  {
    title: 'Journal & Tools',
    items: [
      { to: '/checkpoints', label: 'Weekly Checkpoints', icon: '✅' },
      { to: '/error-log', label: 'Error Log', icon: '📝' },
      { to: '/backlog', label: 'Backlog', icon: '📌' },
      { to: '/notes', label: 'Notes', icon: '🗒️' },
      { to: '/settings', label: 'Settings', icon: '⚙️' },
    ],
  },
];

const ALL_NAV = NAV_GROUPS.flatMap((g) => g.items);

const PAGE_TITLES = {
  '/': 'Dashboard',
  '/today': "Today's Focus",
  '/roadmap': '92-Day Roadmap',
  '/calendar': 'Calendar',
  '/progress': 'Progress',
  '/streaks': 'Streaks & Habits',
  '/phases': 'Phase Tracker',
  '/projects': 'Project Tracker',
  '/dsa': 'DSA Tracker',
  '/python': 'Python Tracker',
  '/fullstack': 'Full Stack Tracker',
  '/checkpoints': 'Weekly Checkpoints',
  '/error-log': 'Error Log',
  '/backlog': 'Backlog',
  '/notes': 'Notes',
  '/settings': 'Settings',
};

const BOTTOM_NAV = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/today', label: 'Today', icon: '🎯' },
  { to: '/roadmap', label: 'Roadmap', icon: '🗺️' },
  { to: '/progress', label: 'Progress', icon: '📈' },
];

function SidebarLink({ item }) {
  return (
    <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
      <span className="w-5 text-center text-base leading-none">{item.icon}</span>
      <span>{item.label}</span>
    </NavLink>
  );
}

export function Layout() {
  const { state, stats, toggleTheme } = useApp();
  const [searchOpen, setSearchOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMoreOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const title = PAGE_TITLES[location.pathname] || 'My Journey';
  const position = stats.position;

  const positionChip =
    position.stage === 'before'
      ? `Starts ${formatDate('2026-10-07')} (in ${position.daysUntilStart} day${position.daysUntilStart === 1 ? '' : 's'})`
      : position.stage === 'after'
        ? 'Plan completed'
        : `Day ${stats.todayDay} of 92`;

  return (
    <div className="min-h-screen">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-xl text-white shadow-sm">🚀</div>
          <div>
            <p className="text-sm font-extrabold leading-tight text-slate-800 dark:text-slate-100">My Journey</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Python Full Stack + DSA</p>
          </div>
        </div>
        <nav className="scrollbar-thin flex-1 space-y-4 overflow-y-auto px-3 pb-6">
          {NAV_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{group.title}</p>
              <div className="space-y-0.5">
                {group.items.map((item) => (
                  <SidebarLink key={item.to} item={item} />
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="border-t border-slate-200 px-4 py-3 text-[11px] text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <p className="font-semibold text-slate-600 dark:text-slate-300">07 Oct 2026 → 06 Jan 2027</p>
          <p>92 days · 604 planned hours</p>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
          <div className="flex items-center justify-between gap-2 px-4 py-3 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-lg text-white lg:hidden">🚀</div>
              <div className="min-w-0">
                <h1 className="truncate text-lg font-extrabold text-slate-800 dark:text-slate-100">{title}</h1>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                  {positionChip}
                  {position.stage === 'during' ? ` · ${stats.todayMeta ? `Week ${stats.todayMeta.week} · ${stats.todayMeta.phase}` : ''}` : ''}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              {stats.currentStreak > 0 ? (
                <span className="chip hidden bg-amber-100 text-amber-700 sm:inline-flex dark:bg-amber-900/60 dark:text-amber-300">🔥 {stats.currentStreak}-day streak</span>
              ) : null}
              <button type="button" className="btn-secondary !px-2.5" onClick={() => setSearchOpen(true)} title="Search (Ctrl+K)" aria-label="Search">
                <span aria-hidden>🔍</span>
                <span className="hidden text-xs text-slate-400 md:inline">Ctrl K</span>
              </button>
              <button type="button" className="btn-secondary !px-2.5" onClick={toggleTheme} title="Toggle dark mode" aria-label="Toggle theme">
                {state.theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 pb-24 pt-5 sm:px-6 lg:pb-10">
          <Outlet />
        </main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur lg:hidden dark:border-slate-800 dark:bg-slate-900/95">
        <div className="grid grid-cols-5">
          {BOTTOM_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-2 text-[10px] font-semibold ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-500 dark:text-slate-400'}`
              }
            >
              <span className="text-lg leading-none">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
          <button type="button" onClick={() => setMoreOpen(true)} className="flex flex-col items-center gap-0.5 py-2 text-[10px] font-semibold text-slate-500 dark:text-slate-400">
            <span className="text-lg leading-none">☰</span>
            More
          </button>
        </div>
      </nav>

      {moreOpen ? (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-slate-900/60 backdrop-blur-sm lg:hidden" onClick={() => setMoreOpen(false)}>
          <div className="max-h-[85vh] overflow-y-auto rounded-t-2xl bg-white p-4 dark:bg-slate-900" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">All pages</p>
              <button type="button" className="btn-ghost !px-2 !py-1" onClick={() => setMoreOpen(false)} aria-label="Close menu">
                ✕
              </button>
            </div>
            <button
              type="button"
              className="btn-secondary mb-3 w-full"
              onClick={() => {
                setMoreOpen(false);
                setSearchOpen(true);
              }}
            >
              🔍 Search everything
            </button>
            <div className="grid grid-cols-2 gap-1.5">
              {ALL_NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium ${
                      isActive
                        ? 'bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  <span>{item.icon}</span>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
