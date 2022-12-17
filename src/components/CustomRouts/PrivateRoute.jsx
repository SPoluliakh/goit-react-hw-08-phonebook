import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from 'components/hooks/useAuth';

export const PrivateRout = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRout.propTypes = {
  Component: PropTypes.object,
  redirectTo: PropTypes.string.isRequired,
};
