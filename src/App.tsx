import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './containers/LandingPage';
import LoginPage from './containers/LoginPage';
import Page404 from './containers/Page404';
import Stub from './components/Stub';
import PrivatePage from './containers/PrivatePage';
import PrivateRoute from './components/PrivateRoute';

export default function App(): JSX.Element {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login-form" element={<LoginPage />} />
          <Route path="/registration" element={<LoginPage reg="true" />} />
          <Route path="/search" element={<Page404 />} />
          <Route path="/stub" element={<Stub />} />
          <Route
            path="/private-page"
            element={
              <PrivateRoute>
                <PrivatePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
