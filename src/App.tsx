import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import LoginMerchantPage from './pages/auth/LoginMerchantPage';
import RegisterPage from './pages/auth/RegisterPage';

export default function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loginMerchant" element={<LoginMerchantPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
  );
}
