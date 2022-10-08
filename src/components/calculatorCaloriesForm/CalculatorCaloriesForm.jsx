import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { grey, orange, pink } from '@mui/material/colors';

import { selectAccessToken } from 'redux/auth/authSelectors';
import { getUserData } from 'redux/user/userSelectors';
import {
  dailyRateAuthorized,
  dailyRateUnauthorized,
} from 'redux/daily/dailyOperations';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import Button from 'components/common/button/Button';
import BpRadio, { RadioStyled } from './CalculatorCaloriesForm.styled';

function CalculatorCaloriesForm({ openModal }) {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAccessToken);
  const userData = useSelector(getUserData);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, isAuth]);

  console.log(userData);

  // ------- Валідація для форми -------

  const validationSchema = Yup.object().shape({
    height: Yup.number()
      .min(100, 'Минимальное значение 100 см.')
      .max(250, 'Максимальное значение 250 см.')
      .required('Обязательно'),
    age: Yup.number()
      .min(18, 'Минимум 18 лет')
      .max(100, 'Максимум 100 лет')
      .required('Обязательно'),
    weight: Yup.number()
      .min(20, 'Минимум 20 кг.')
      .max(500, 'Максимум 500 кг.')
      .required('Обязательно'),
    desiredWeight: Yup.number()
      .min(20, 'Минимум 20 кг.')
      .max(500, 'Максимум 500 кг.')
      .required('Обязательно')
      .when('weight', (weight, schema) => {
        return schema.test({
          test: desiredWeight => !!weight && desiredWeight < weight,
          message: 'Желаемый вес должен быть меньше текущего',
        });
      }),
    bloodType: Yup.number().required('Обязательно'),
  });

  // ------- формік для матеріал UI -------

  const formik = useFormik({
    initialValues: {
      height: userData && userData.height ? userData.height : '',
      age: userData && userData.age ? userData.age : '',
      weight: userData && userData.weight ? userData.weight : '',
      desiredWeight:
        userData && userData.desiredWeight ? userData.desiredWeight : '',
      bloodType:
        userData && userData.bloodType ? userData.bloodType.toString() : '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      if (isAuth) {
        dispatch(dailyRateUnauthorized(values));
        console.log(values);
      } else {
        dispatch(dailyRateAuthorized(values));

        if (openModal) {
          setTimeout(() => {
            openModal();
          }, 1000);
        }
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {isAuth ? (
        <h2>Узнай свою суточную норму калорий</h2>
      ) : (
        <h2>Просчитай свою суточную норму калорий прямо сейчас</h2>
      )}
      <div>
        <TextField
          required
          id="height"
          name="height"
          label="Рост"
          value={formik.values.height}
          onChange={formik.handleChange}
          error={formik.touched.height && Boolean(formik.errors.height)}
          helperText={formik.touched.height && formik.errors.height}
          variant="standard"
        />
        <TextField
          required
          id="age"
          name="age"
          label="Возраст"
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
          variant="standard"
        />
        <TextField
          required
          id="weight"
          name="weight"
          label="Вес"
          value={formik.values.weight}
          onChange={formik.handleChange}
          error={formik.touched.weight && Boolean(formik.errors.weight)}
          helperText={formik.touched.weight && formik.errors.weight}
          variant="standard"
        />
        <TextField
          required
          id="desiredWeight"
          name="desiredWeight"
          label="Желаемый вес"
          value={formik.values.desiredWeight}
          onChange={formik.handleChange}
          error={
            formik.touched.desiredWeight && Boolean(formik.errors.desiredWeight)
          }
          helperText={
            formik.touched.desiredWeight && formik.errors.desiredWeight
          }
          variant="standard"
        />
        <>
          <p>Группа крови*</p>
          <RadioGroup
            row
            required
            id="bloodType"
            name="bloodType"
            defaultValue="1"
            onChange={formik.handleChange}
          >
            <FormControlLabel
              name="bloodType"
              value="1"
              control={<BpRadio />}
              label="1"
            />
            <FormControlLabel
              name="bloodType"
              value="2"
              control={<BpRadio />}
              label="2"
            />
            <FormControlLabel
              name="bloodType"
              value="3"
              control={<BpRadio />}
              label="3"
            />
            <RadioStyled
              name="bloodType"
              value="4"
              control={<BpRadio />}
              label="4"
              sx={{
                fontFamily: 'Verdana',
              }}
            />
          </RadioGroup>
        </>
      </div>

      <Button type="submit">Похудеть</Button>
    </form>
  );
}

export default CalculatorCaloriesForm;
