import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';

export const PrivateRout = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};