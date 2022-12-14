import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';

export const RestrictedRout = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
