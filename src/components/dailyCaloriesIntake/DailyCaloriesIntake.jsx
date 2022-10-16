import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  getRandomAllNotAllowedProducts,
  selectUDDailyRate,
  selectUDNotAllowedProducts,
} from 'redux/userData/userDataSelectors';

import Box from 'components/common/box';
import Button from 'components/common/button/Button';

import {
  StyledTitle,
  StyledTitleCalories,
  StyledCalories,
  StyledText,
  StyledList,
} from './DailyCaloriesIntake.styled';

function DailyCaloriesIntake() {
  const dailyRate = useSelector(selectUDDailyRate);
  const allNotAllowedProducts = useSelector(selectUDNotAllowedProducts);
  const randomNotAllowedProducts = getRandomAllNotAllowedProducts(
    allNotAllowedProducts,
    10
  );

  return (
    <Box>
      <StyledTitle>
        Ваша рекомендуемая суточная норма калорий составляет
      </StyledTitle>
      <StyledTitleCalories>
        <StyledCalories>{dailyRate}</StyledCalories> ккал
      </StyledTitleCalories>
      <StyledText>
        Продукты, которые вам не рекомендуется употреблять
      </StyledText>
      <StyledList>
        {randomNotAllowedProducts.map((item, index) => {
          return (
            <li key={index}>
              {index + 1}. {item}
            </li>
          );
        })}
      </StyledList>
      {/* </Box> */}

      <Box textAlign="center">
        <NavLink to="/registration">
          <Button>Начать худеть</Button>
        </NavLink>
      </Box>
    </Box>
  );
}

export default DailyCaloriesIntake;
