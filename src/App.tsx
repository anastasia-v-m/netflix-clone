import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './containers/LandingPage';
import LoginPage from './containers/LoginPage';
import Page404 from './containers/Page404';
import PrivatePage from './containers/PrivatePage';
import PrivateRoute from './components/PrivateRoute';
import PageOnlyOnNetflix from './containers/PageOnlyOnNetflix';
import SearchPage from './containers/SearchPage/SearchPage';
import InternalPage from './containers/InternalPage';

export default function App(): JSX.Element {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login-form" element={<LoginPage />} />
          <Route path="/registration" element={<LoginPage reg="true" />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<Page404 />} />
          <Route
            path="/not-full-access"
            element={
              <PrivateRoute>
                <PrivatePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/only-on-netflix"
            element={
              <PrivateRoute>
                <PageOnlyOnNetflix />
              </PrivateRoute>
            }
          />
          <Route
            path="/announces"
            element={
              <PrivateRoute>
                <InternalPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/on-netflix"
            element={
              <PrivateRoute>
                <PageOnlyOnNetflix />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
