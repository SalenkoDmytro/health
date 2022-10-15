// import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

import { useSelector } from 'react-redux';

import Header from 'components/header/Header';
import { Container } from 'components/common/container/Container';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import PictureLeaf from 'components/common/picture/PictureLeaf';
import DailyCaloriesForm from 'components/dailyCaloriesForm/DailyCaloriesForm';

import { Calculator, CalculatorBox } from './CalculatorPage.styled';
import { SideBar } from 'components/rightSideBar/RightSideBar.styled';

function CalculatorPage() {
  // const userData = useSelector(Треба записати тут новий селектор виходячи з даних які в userData{
  //selectUDDailyRate,selectUDDaySummary,selectUDNotAllowedProducts
  //});

  return (
    <>
      <Header />
      <Container>
        <CalculatorBox>
          <Calculator>
            <DailyCaloriesForm />
          </Calculator>
          <SideBar>{/* <RightSideBar date={date} /> */}</SideBar>
        </CalculatorBox>
      </Container>
      <PictureLeaf />
    </>
  );
}

export default CalculatorPage;
