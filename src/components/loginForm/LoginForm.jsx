import { InputStyled } from 'components/calculatorCaloriesForm/CalculatorCaloriesForm.styled';
import React from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { login } from 'redux/auth/authOperations';
import Button from 'components/common/button/Button';
import {
  FormContainer,
  FormTitle,
  LoginBtnWrapper,
  LoginFormContent,
  RegisterBtn,
} from './LoginForm.styled';
import { selectAccessToken } from 'redux/auth/authSelectors';

function LoginForm() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAccessToken);

  // ------- Валідація для форми -------

  const validationSchema = yup.object({
    email: yup
      .string('Введите адрес электронной почты')
      .email('Введите действительный адрес электронной почты')
      .required('Электронная почта обязательна'),
    password: yup
      .string('Введите свой пароль')
      .min(8, 'Пароль должен иметь длину не менее 8 символов')
      .required('Требуется пароль'),
  });

  // ------- формік для матеріал UI -------

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: event => {
      const email = event.email;
      const password = event.password;
      if (!isAuth) {
        dispatch(login({ email, password }));
      }
    },
  });

  return (
    <FormContainer>
      <FormTitle>Вход</FormTitle>
      <form onSubmit={formik.handleSubmit}>
        <LoginFormContent>
          <InputStyled
            type="email"
            name="email"
            label="Почта *"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            variant="standard"
          />

          <InputStyled
            type="password"
            name="password"
            label="Пароль *"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            variant="standard"
          />
        </LoginFormContent>

        <LoginBtnWrapper>
          <Button type="submit">Вход</Button>
          <RegisterBtn to="/registration">Регистрация</RegisterBtn>
        </LoginBtnWrapper>
      </form>
    </FormContainer>
  );
}

export default LoginForm;
