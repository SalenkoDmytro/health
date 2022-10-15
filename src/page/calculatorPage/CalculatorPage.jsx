import CalculatorCaloriesForm from '../../components/calculatorCaloriesForm/CalculatorCaloriesForm';
// import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

import { useSelector } from 'react-redux';
import { Container } from '../../components/common/container/Container';
import PictureLeaf from '../../components/common/picture/PictureLeaf';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import { Calculator, CalculatorBox } from './CalculatorPage.styled';
import Header from 'components/header/Header';
import { SideBar } from '../../components/rightSideBar/RightSideBar.styled';
import DailyCaloriesForm from 'components/dailyCaloriesForm/DailyCaloriesForm';

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
            {/* <CalculatorCaloriesForm /> */}
          </Calculator>
          <SideBar>{/* <RightSideBar date={date} /> */}</SideBar>
        </CalculatorBox>
      </Container>
      <PictureLeaf />
    </>
  );
}

export default CalculatorPage;
