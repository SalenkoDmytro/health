// import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

import { useState } from 'react';
// import Header from 'components/header/Header';
import { Container } from 'components/common/container/Container';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import PictureLeaf from 'components/common/picture/PictureLeaf';
import DailyCaloriesForm from 'components/dailyCaloriesForm/DailyCaloriesForm';

import { Calculator, CalculatorBox } from './CalculatorPage.styled';
import { SideBar } from 'components/rightSideBar/RightSideBar.styled';

function CalculatorPage() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      {/* <Header /> */}
      <CalculatorBox>
        <Calculator>
          <Container>
            <DailyCaloriesForm />
          </Container>
        </Calculator>
        <Container>
          <SideBar>{/* <RightSideBar date={date} /> */}</SideBar>
        </Container>
      </CalculatorBox>
      <PictureLeaf />
    </>
  );
}

export default CalculatorPage;
