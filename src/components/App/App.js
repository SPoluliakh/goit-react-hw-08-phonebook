import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'Redux/auth/authOperations';

import { Layout } from 'components/Layout/Layout';
import { PhoneBookPage } from 'Pages/PhoneBook/PhoneBook';
import { RegisterPage } from 'Pages/Registre/RegisterForm';
import { LoginPage } from 'Pages/LogIn/LoginForm';
import { HomePage } from 'Pages/Home/Home';
import { PrivateRout } from 'components/CustomRouts/PrivateRoute';
import { RestrictedRout } from 'components/CustomRouts/RestrictedRout';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="phoneBook"
          element={<PrivateRout redirectTo="/" component={<PhoneBookPage />} />}
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
            <RestrictedRout redirectTo="/phoneBook" component={<LoginPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
