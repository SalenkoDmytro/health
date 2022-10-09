import { InputStyled } from 'components/calculatorCaloriesForm/CalculatorCaloriesForm.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import Button from 'components/common/button/Button';
import {
  FormContainer,
  FormTitle,
  LoginBtnWrapper,
  LoginFormContent,
  RegisterBtn,
} from './LoginForm.styled';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <FormTitle>Вход</FormTitle>
      <LoginFormContent onSubmit={handleSubmit}>
        <InputStyled
          required
          type="email"
          name="email"
          label="Почта"
          value={email}
          onChange={handleChange}
          variant="standard"
        />

        <InputStyled
          required
          type="password"
          name="password"
          label="Пароль"
          value={password}
          onChange={handleChange}
          variant="standard"
        />
        <LoginBtnWrapper>
          <Button type="submit">Вход</Button>
          <RegisterBtn to="/registration">Регистрация</RegisterBtn>
        </LoginBtnWrapper>
      </LoginFormContent>
    </FormContainer>
  );
}

export default LoginForm;
