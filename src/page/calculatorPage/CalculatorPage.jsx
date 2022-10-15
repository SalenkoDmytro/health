import React, { useEffect, useState } from 'react';
import CalculatorCaloriesForm from '../../components/calculatorCaloriesForm/CalculatorCaloriesForm';
import { getUser } from '../../redux/user/userOperations';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../components/common/container/Container';
import PictureLeaf from '../../components/common/picture/PictureLeaf';
import Box from 'components/common/box/Box';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import { Calculator, CalculatorBox } from './CalculatorPage.styled';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import { SideBar } from '../../components/rightSideBar/RightSideBar.styled';

function CalculatorPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);
  // const userData = useSelector(Треба записати тут новий селектор виходячи з даних які в userData{
  //selectUDDailyRate,selectUDDaySummary,selectUDNotAllowedProducts
  //});
  const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   if (isAuth && !userData) {
  //     dispatch(getUser());
  //     // console.log('isAuth1', isAuth);
  //   }
  // }, [dispatch, isAuth, userData]);

  return (
    <>
      <Header />
      <Container>
        <CalculatorBox>
          <Calculator>
            <CalculatorCaloriesForm />
          </Calculator>
          <SideBar>{/* <RightSideBar date={date} /> */}</SideBar>
        </CalculatorBox>
      </Container>
      <PictureLeaf />
    </>
  );
}

export default CalculatorPage;
