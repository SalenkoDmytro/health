import { InputStyled } from 'components/calculatorCaloriesForm/CalculatorCaloriesForm.styled';
import {
  FormContainer,
  FormTitle,
  LoginBtnWrapper,
  LoginFormContent,
  RegisterBtn,
} from 'components/loginForm/LoginForm.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import Button from 'components/common/button/Button';

function RegistrationForm() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ username, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <FormTitle>регистрация</FormTitle>
      <form onSubmit={handleSubmit}>
        <LoginFormContent>
          <InputStyled
            required
            type="text"
            name="name"
            label="Имя"
            value={username}
            onChange={handleChange}
            variant="standard"
          />

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
        </LoginFormContent>

        <LoginBtnWrapper>
          <RegisterBtn to="/login">Вход</RegisterBtn>
          <Button type="submit">Регистрация</Button>
        </LoginBtnWrapper>
      </form>
    </FormContainer>
  );
}

export default RegistrationForm;
