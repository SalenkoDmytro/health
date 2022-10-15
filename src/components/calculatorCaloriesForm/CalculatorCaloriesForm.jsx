// import { useDispatch, useSelector } from 'react-redux';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// // import TextField from '@mui/material/TextField';

// import { selectAccessToken } from 'redux/auth/authSelectors';

// // import { selectUser } from 'redux/user/userSelectors';
// // import {
// //   dailyRateAuthorized,
// //   dailyRateUnauthorized,
// // } from 'redux/daily/dailyOperations';

// import {
//   dailyRateAuthorized,
//   dailyRateUnauthorized,
// } from 'redux/userData/userDataOperation';

// // import { fetchCurrentUser } from 'redux/auth/authOperations';
// import Button from 'components/common/button/Button';
// import BpRadio from './CalculatorCaloriesForm.styled';
// import {
//   InputStyled,
//   CalcFormWrapper,
//   UserMainDataWrapper,
//   BtnGroup,
//   MainForm,
//   FormContent,
//   FormTitle,
//   BloodText,
//   BloodGroup,
//   StyledRadioGroup,
//   BloodTextRed,
//   ControlLabel,
// } from './CalculatorCaloriesForm.styled';

// import {
//   selectUDBodyParams,
//   selectUDUserId,
// } from 'redux/userData/userDataSelectors';

// function CalculatorCaloriesForm({ openModal }) {
//   const dispatch = useDispatch();
//   const isAuth = useSelector(selectAccessToken);
//   const userBodyParams = useSelector(selectUDBodyParams);
//   const userId = useSelector(selectUDUserId);

//   // ------- Валідація для форми -------

//   const validationSchema = Yup.object().shape({
//     height: Yup.number()
//       .min(100, 'Минимальное значение 100 см.')
//       .max(250, 'Максимальное значение 250 см.')
//       .required('Обязательно'),
//     age: Yup.number()
//       .min(18, 'Минимум 18 лет')
//       .max(100, 'Максимум 100 лет')
//       .required('Обязательно'),
//     weight: Yup.number()
//       .min(20, 'Минимум 20 кг.')
//       .max(500, 'Максимум 500 кг.')
//       .required('Обязательно'),
//     desiredWeight: Yup.number()
//       .min(20, 'Минимум 20 кг.')
//       .max(500, 'Максимум 500 кг.')
//       .required('Обязательно')
//       .when('weight', (weight, schema) => {
//         return schema.test({
//           test: desiredWeight => !!weight && desiredWeight < weight,
//           message: 'Вес должен быть меньше текущего',
//         });
//       }),
//     bloodType: Yup.number().required('Обязательно *'),
//   });

//   // ------- формік для матеріал UI -------

//   const formik = useFormik({
//     initialValues: {
//       // height: userData && userData.height ? userData.height : '',
//       // age: userData && userData.age ? userData.age : '',
//       // weight: userData && userData.weight ? userData.weight : '',
//       // desiredWeight:
//       //   userData && userData.desiredWeight ? userData.desiredWeight : '',
//       // bloodType:
//       //   userData && userData.bloodType ? userData.bloodType.toString() : '',

//       height: userBodyParams?.height ? userBodyParams.height : '',
//       age: userBodyParams?.age ? userBodyParams.age : '',
//       weight: userBodyParams?.weight ? userBodyParams.weight : '',
//       desiredWeight: userBodyParams?.desiredWeight
//         ? userBodyParams.desiredWeight
//         : '',
//       bloodType: userBodyParams?.bloodType
//         ? userBodyParams.bloodType.toString()
//         : '',
//     },
//     validationSchema: validationSchema,

//     onSubmit: values => {
//       if (isAuth) {
//         // console.log(1111111111);
//         dispatch(dailyRateAuthorized({ userId, ...values }));
//       } else {
//         dispatch(dailyRateUnauthorized(values));
//         // console.log(222222222);

//         console.log('🚀 :rofl:');
//         if (openModal) {
//           setTimeout(() => {
//             openModal();
//           }, 1000);
//         }
//       }
//     },
//   });

//   return (
//     <MainForm onSubmit={formik.handleSubmit}>
//       <FormTitle>Узнай свою суточную норму калорий</FormTitle>

//       <FormContent>
//         <CalcFormWrapper>
//           <UserMainDataWrapper>
//             <InputStyled
//               id="height"
//               name="height"
//               label="Рост *"
//               type="number"
//               value={formik.values.height}
//               onChange={formik.handleChange}
//               error={formik.touched.height && Boolean(formik.errors.height)}
//               helperText={formik.touched.height && formik.errors.height}
//               variant="standard"
//             />
//             <InputStyled
//               id="age"
//               name="age"
//               label="Возраст *"
//               type="number"
//               value={formik.values.age}
//               onChange={formik.handleChange}
//               error={formik.touched.age && Boolean(formik.errors.age)}
//               helperText={formik.touched.age && formik.errors.age}
//               variant="standard"
//             />
//             <InputStyled
//               id="weight"
//               name="weight"
//               label="Вес *"
//               type="number"
//               value={formik.values.weight}
//               onChange={formik.handleChange}
//               error={formik.touched.weight && Boolean(formik.errors.weight)}
//               helperText={formik.touched.weight && formik.errors.weight}
//               variant="standard"
//             />
//           </UserMainDataWrapper>
//           <UserMainDataWrapper>
//             <InputStyled
//               id="desiredWeight"
//               name="desiredWeight"
//               label="Желаемый вес *"
//               type="number"
//               value={formik.values.desiredWeight}
//               onChange={formik.handleChange}
//               error={
//                 formik.touched.desiredWeight &&
//                 Boolean(formik.errors.desiredWeight)
//               }
//               helperText={
//                 formik.touched.desiredWeight && formik.errors.desiredWeight
//               }
//               variant="standard"
//             />
//             <BloodGroup>
//               {formik.touched.bloodType && Boolean(formik.errors.bloodType) ? (
//                 <BloodTextRed>Группа крови *</BloodTextRed>
//               ) : (
//                 <BloodText>Группа крови *</BloodText>
//               )}

//               <StyledRadioGroup
//                 row
//                 required
//                 id="bloodType"
//                 name="bloodType"
//                 value={formik.values.bloodType}
//                 onChange={formik.handleChange}
//               >
//                 <ControlLabel
//                   name="bloodType"
//                   value="1"
//                   control={<BpRadio />}
//                   label="1"
//                 />
//                 <ControlLabel
//                   name="bloodType"
//                   value="2"
//                   control={<BpRadio />}
//                   label="2"
//                 />
//                 <ControlLabel
//                   name="bloodType"
//                   value="3"
//                   control={<BpRadio />}
//                   label="3"
//                 />
//                 <ControlLabel
//                   name="bloodType"
//                   value="4"
//                   control={<BpRadio />}
//                   label="4"
//                 />
//               </StyledRadioGroup>
//               {formik.touched.bloodType && formik.errors.bloodType && (
//                 <BloodTextRed>{formik.errors.bloodType}</BloodTextRed>
//               )}
//             </BloodGroup>
//           </UserMainDataWrapper>
//         </CalcFormWrapper>
//         <BtnGroup>
//           <Button type="submit">Похудеть</Button>
//         </BtnGroup>
//       </FormContent>
//     </MainForm>
//   );
// }

// export default CalculatorCaloriesForm;
