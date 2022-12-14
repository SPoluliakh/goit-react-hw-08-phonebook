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
        <Route path="phoneBook" element={<PhoneBookPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="logIn" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
