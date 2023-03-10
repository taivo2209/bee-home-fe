import React from 'react';
import Navbar from './containers/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import LoginLessorPage from './pages/auth/LoginLessorPage';
import RegisterPage from './pages/auth/RegisterPage';

export default function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loginLessor" element={<LoginLessorPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
  );
}
