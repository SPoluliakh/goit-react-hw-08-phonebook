import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/authOperations';
import { Button } from '@mui/material';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <Button variant="contained" type="submit">
        Log In
      </Button>
    </form>
  );
};
