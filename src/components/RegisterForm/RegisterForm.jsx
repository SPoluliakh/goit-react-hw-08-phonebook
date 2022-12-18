import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/authOperations';
import * as SC from './RegisterForm.styled';

export const RegisterForm = () => {
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
    <SC.RegisterForm onSubmit={handleSubmit} autoComplete="off">
      <SC.Wrapper>
        <SC.InnerWrapper>
          <SC.LabelArea htmlFor="name">Name </SC.LabelArea>
          <SC.LabelArea htmlFor="email">Email </SC.LabelArea>
          <SC.LabelArea htmlFor="password">Password </SC.LabelArea>
        </SC.InnerWrapper>
        <SC.InnerWrapper>
          <SC.InputArea
            id="name"
            type="text"
            name="name"
            placeholder="Lucas Moura"
          />
          <SC.InputArea
            id="email"
            type="email"
            name="email"
            placeholder="LucasMoura@mail.com"
          />
          <SC.InputArea
            id="password"
            type="password"
            name="password"
            placeholder="**********"
          />
        </SC.InnerWrapper>
      </SC.Wrapper>

      <SC.RegisterButton variant="contained" type="submit">
        Register
      </SC.RegisterButton>
    </SC.RegisterForm>
  );
};
