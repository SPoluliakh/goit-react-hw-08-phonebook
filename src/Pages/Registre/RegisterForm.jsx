import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/authOperations';
import { Input } from '@mui/material';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <Input type="text" name="name" />
      </label>
      <label>
        Email
        <Input type="email" name="email" />
      </label>
      <label>
        Password
        <Input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
