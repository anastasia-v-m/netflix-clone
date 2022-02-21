import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }: { children: JSX.Element }): JSX.Element {
  const user = JSON.parse(sessionStorage.getItem('user') as string);
  const { pathname } = document.location;

  if (!user && pathname !== '/details') {
    return <Navigate to="/" />;
  }

  if (!user && pathname === '/details') {
    return <Navigate to="/public" />;
  }

  return children;
}
