import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'Redux/auth/authOperations';
import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'Pages/HomePage/HomePage';
import { PrivateRout } from 'components/CustomRouts/PrivateRoute';
import { RestrictedRout } from 'components/CustomRouts/RestrictedRout';

const PhoneBookPage = lazy(() =>
  import('../../Pages/PhoneBookPage/PhoneBook').then(module => ({
    ...module,
    default: module.PhoneBookPage,
  }))
);

const RegisterPage = lazy(() =>
  import('../../Pages/Registre/RegisterPage').then(module => ({
    ...module,
    default: module.RegisterPage,
  }))
);

const LoginPage = lazy(() =>
  import('../../Pages/LogIn/LoginPage').then(module => ({
    ...module,
    default: module.LoginPage,
  }))
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(refreshUser());
    navigate(`/${location.pathname}`);
  }, [dispatch, navigate, location.pathname]);

  return isRefreshing ? (
    <b
      style={{
        display: 'block',
        textAlign: 'center',
      }}
    >
      Page is refreshing ...
    </b>
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="phoneBook"
            element={
              <PrivateRout redirectTo="/" component={<PhoneBookPage />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRout
                redirectTo="/phoneBook"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="logIn"
            element={
              <RestrictedRout
                redirectTo="/phoneBook"
                component={<LoginPage />}
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
