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

  let yourDate = new Date(Date.now());
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
  const formatDate = yourDate.toISOString().split('T')[0];

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
              <RightSideBar date={formatDate} />
            </SideBar>
          </Container>
        )}
      </CalculatorBox>
      <PictureLeaf />
    </>
  );
}

export default CalculatorPage;
