import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MailPage from './components/MailPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mail" element={<MailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </HashRouter>
  );
}

export default App;
