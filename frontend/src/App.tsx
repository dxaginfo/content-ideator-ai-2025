import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const IdeaGeneratorPage = React.lazy(() => import('./pages/IdeaGeneratorPage'));
const SavedIdeasPage = React.lazy(() => import('./pages/SavedIdeasPage'));
const CalendarPage = React.lazy(() => import('./pages/CalendarPage'));
const AnalyticsPage = React.lazy(() => import('./pages/AnalyticsPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="generator" element={<IdeaGeneratorPage />} />
          <Route path="saved" element={<SavedIdeasPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default App;
