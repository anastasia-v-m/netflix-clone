import React, { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './containers/LandingPage';
import LoginPage from './containers/LoginPage';
import Page404 from './containers/Page404';
import Stub from './components/Stub';

// export default function App(): ReactNode {
export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <LandingPage />
        </Route>
        <Route path="/login-form"  >
          <LoginPage />
        </Route>
        <Route path="/registration"  >
          <Page404 />
        </Route>
        <Route path="/search"  >
          <Page404 />
        </Route>
        <Route path="/stub" >
          <Stub />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
