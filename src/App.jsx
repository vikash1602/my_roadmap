import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import { Layout } from './components/layout/Layout.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Today } from './pages/Today.jsx';
import { Roadmap } from './pages/Roadmap.jsx';
import { CalendarPage } from './pages/CalendarPage.jsx';
import { ProgressPage } from './pages/ProgressPage.jsx';
import { Streaks } from './pages/Streaks.jsx';
import { Phases } from './pages/Phases.jsx';
import { Projects } from './pages/Projects.jsx';
import { DsaTracker } from './pages/DsaTracker.jsx';
import { PythonTracker } from './pages/PythonTracker.jsx';
import { FullStackTracker } from './pages/FullStackTracker.jsx';
import { Checkpoints } from './pages/Checkpoints.jsx';
import { ErrorLog } from './pages/ErrorLog.jsx';
import { Backlog } from './pages/Backlog.jsx';
import { NotesPage } from './pages/NotesPage.jsx';
import { SettingsPage } from './pages/SettingsPage.jsx';

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/today" element={<Today />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/streaks" element={<Streaks />} />
            <Route path="/phases" element={<Phases />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dsa" element={<DsaTracker />} />
            <Route path="/python" element={<PythonTracker />} />
            <Route path="/fullstack" element={<FullStackTracker />} />
            <Route path="/checkpoints" element={<Checkpoints />} />
            <Route path="/error-log" element={<ErrorLog />} />
            <Route path="/backlog" element={<Backlog />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </AppProvider>
  );
}
