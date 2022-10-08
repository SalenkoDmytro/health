import React from 'react';
import * as Yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';

// Юзер дата
const userData = {
  weight: 100,
  height: 170,
  age: 30,
  bloodType: 1,
  desiredWeight: 60,
  dailyRate: 2000,
  notAllowedProducts: ['Омлет'],
};
const isAuthenticatedSelector = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmMyMDg1YmQwOTM2NTI4MTA3Y2UyNzQiLCJzaWQiOiI1ZmMyZDJmY2UxZDIwNTA2NzAyYmRkMjIiLCJpYXQiOjE2MDY2MDM1MTYsImV4cCI6MTYwNjYwNzExNn0.rJ_QjU4KvA76H96RHsvOBChK0Vjbd0NmqjMxdQVJIXA',
};

function CalculatorCaloriesForm({ openModal }) {
  // const dispatch = useDispatch();
  const isAuth = isAuthenticatedSelector.accessToken;
  const validationSchema = Yup.object().shape({
    height: Yup.number('fdfdfdfdf')
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
  const getNumbers = values => {
    const keys = Object.keys(values);
    keys.forEach(key => (values[key] = Number(values[key])));
    return values;
  };
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
      if (isAuth) {
        getNumbers(values);
        console.log(getNumbers(values));
      } else {
        getNumbers(values);

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
      </div>

      <button type="submit">Похудеть</button>
    </form>
  );
}

export default CalculatorCaloriesForm;
