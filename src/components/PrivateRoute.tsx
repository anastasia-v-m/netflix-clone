import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }: { children: JSX.Element }): JSX.Element {
  const user = JSON.parse(sessionStorage.getItem('user') as string);

  if (!user) {
    return <Navigate to="/login-form" />;
  }
  return children;
}
