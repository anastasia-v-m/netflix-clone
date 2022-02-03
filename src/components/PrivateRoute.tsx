import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const user = JSON.parse(sessionStorage.getItem('user') as string);
  console.log(user);

  if (!user) {
    return <Navigate to="/login-form" />;
  }
  return children;
}
