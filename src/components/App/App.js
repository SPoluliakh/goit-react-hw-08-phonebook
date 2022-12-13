import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { PhoneBookPage } from 'Pages/PhoneBook/PhoneBook';
import { RegisterPage } from 'Pages/Registre/RegisterForm';
import { LoginPage } from 'Pages/LogIn/LoginForm';
import { HomePage } from 'Pages/Home/Home';

export const App = () => {
  return (
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
