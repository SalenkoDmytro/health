import { InputStyled } from 'components/dailyCaloriesForm/DailyCaloriesForm.styled';
import React from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { login } from 'redux/auth/authOperations';
import Button from 'components/common/button/Button';
import {
  ErrorText,
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
  const stateError = useSelector(state => state.auth.error);
  const errorExist = () => {
    if (stateError.includes(403) === true) {
      return (
        <>
          Электронная почта не существует <br />
          или неверный пароль
        </>
      );
    }
    if (stateError.includes(400) === true) {
      return 'Ой извините, проблема с сервером';
    }
  };

  // ------- Валідація для форми -------

  const validationSchema = yup.object({
    email: yup
      .string('Введите адрес электронной почты')
      .email('Почта не действительна')
      .required('Электронная почта обязательна'),
    password: yup
      .string('Введите свой пароль')
      .min(8, 'Не менее 8 символов')
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
      {stateError ? <ErrorText>{errorExist()}</ErrorText> : <></>}
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
