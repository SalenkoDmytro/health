import { useEffect } from 'react';
import Button from 'components/common/button/Button';
import {
  StyledTitle,
  StyledTitleCalories,
  StyledCalories,
  StyledText,
  StyledList,
} from './DailyCaloriesIntake.styled';
import Box from 'components/common/box';
import { useDispatch, useSelector } from 'react-redux';
import { dailyRateUnauthorized } from 'redux/daily/dailyOperations';
import { selectDailyProducts } from 'redux/daily/dailySelectors';

const initial = {
  weight: 110,
  height: 186,
  age: 36,
  desiredWeight: 85,
  bloodType: 2,
};

function DailyCaloriesIntake() {
  const dailyRate = useSelector(selectDailyProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dailyRateUnauthorized(initial));
  }, [dispatch]);

  function randomProducts(product) {
    const arr = [];
    for (let i = 0; i < 4; i += 1) {
      const randomIdex = product[Math.floor(Math.random() * product.length)];
      arr.push(randomIdex);
    }
    return arr;
  }
  const notAllowedProducts = randomProducts(dailyRate.notAllowedProducts);
  console.log(dailyRate);

  return (
    <Box>
      <StyledTitle>
        Ваша рекомендуемая суточная норма калорий составляет
      </StyledTitle>
      <StyledTitleCalories>
        <StyledCalories>{dailyRate?.dailyRate}</StyledCalories> ккал
      </StyledTitleCalories>
      <StyledText>
        Продукты, которые вам не рекомендуется употреблять
      </StyledText>
      <StyledList>
        {notAllowedProducts.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </StyledList>
      <Box textAlign="center">
        <Button>Начать худеть</Button>
      </Box>
    </Box>
  );
}

export default DailyCaloriesIntake;
