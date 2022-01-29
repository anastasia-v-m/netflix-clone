import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './containers/LandingPage';
import LoginPage from './containers/LoginPage';
import Page404 from './containers/Page404';
import Stub from './components/Stub';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-form" element={<LoginPage />} />
        <Route path="/registration" element={<Page404 />} />
        <Route path="/search" element={<Page404 />} />
        <Route path="/stub" element={<Stub />} />
      </Routes>
    </BrowserRouter>
  );
}
