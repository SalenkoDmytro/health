import React, { useEffect, useState } from 'react';
import CalculatorCaloriesForm from '../../components/calculatorCaloriesForm/CalculatorCaloriesForm';
import { getUser } from '../../redux/user/userOperations';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { getUserData } from '../../redux/user/userSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../components/common/container/Container';
import PictureLeaf from '../../components/common/picture/PictureLeaf';
import Box from 'components/common/box/Box';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import { CalculatorBox } from './CalculatorPage.styled';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

function CalculatorPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);
  const userData = useSelector(getUserData);
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
          <Box width="60%">
            <CalculatorCaloriesForm />
          </Box>
          <Box width="40%">
            <RightSideBar date={date} />
          </Box>
        </CalculatorBox>
      </Container>
      <PictureLeaf />
      <Footer />
    </>
  );
}

export default CalculatorPage;
