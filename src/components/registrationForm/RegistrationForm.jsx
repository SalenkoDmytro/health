import React from 'react';
import { InputStyled } from 'components/calculatorCaloriesForm/CalculatorCaloriesForm.styled';
import {
  FormContainer,
  FormTitle,
  LoginBtnWrapper,
  LoginFormContent,
  RegisterBtn,
} from 'components/loginForm/LoginForm.styled';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { register } from 'redux/auth/authOperations';
import Button from 'components/common/button/Button';

function RegistrationForm() {
  const dispatch = useDispatch();
  const stateError = useSelector(state => state.auth.error);
  const errorExist = () => {
    if (stateError.includes(409) === true) {
      return 'занята почта';
    }
    if (stateError.includes(400) === true) {
      return 'проблемы из сервером';
    }
    return;
  };

  // ------- Валідація для форми -------

  const validationSchema = yup.object({
    username: yup
      .string('Введите Имя')
      .min(2, 'Короткое Имя')
      .max(40, 'Слишком длинное Имя максимум 40 символов')
      .required('Имя обязательно'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Почта обязательно'),
    password: yup
      .string('Enter your password')
      .min(4, 'Password should be of minimum 4 characters length')
      .required('Пароль обязательно'),
  });

  // ------- формік для матеріал UI -------

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: event => {
      const username = event.username;
      const email = event.email;
      const password = event.password;
      dispatch(register({ username, email, password }));
    },
  });

  return (
    <FormContainer>
      <FormTitle>регистрация</FormTitle>
      {stateError ? <p>{errorExist()}</p> : <></>}
      <form onSubmit={formik.handleSubmit}>
        <LoginFormContent>
          <InputStyled
            required
            type="name"
            name="username"
            label="Имя"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            variant="standard"
          />

          <InputStyled
            required
            type="email"
            name="email"
            label="Почта"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            variant="standard"
          />

          <InputStyled
            required
            type="password"
            name="password"
            label="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
