import { useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { Container } from 'components/common/container/Container';
import RightSideBar from 'components/rightSideBar/RightSideBar';
import PictureLeaf from 'components/common/picture/PictureLeaf';
import DailyCaloriesForm from 'components/dailyCaloriesForm/DailyCaloriesForm';

import { Calculator, CalculatorBox } from './CalculatorPage.styled';
import { SideBar } from 'components/rightSideBar/RightSideBar.styled';

function CalculatorPage() {
  const isAuth = useSelector(selectAccessToken);

  return (
    <>
      <CalculatorBox>
        <Calculator>
          <Container>
            <DailyCaloriesForm />
          </Container>
        </Calculator>
        {isAuth && (
          <Container>
            <SideBar>
              <RightSideBar date={'2022-10-16'} />
            </SideBar>
          </Container>
        )}
      </CalculatorBox>
      <PictureLeaf />
    </>
  );
}

export default CalculatorPage;
