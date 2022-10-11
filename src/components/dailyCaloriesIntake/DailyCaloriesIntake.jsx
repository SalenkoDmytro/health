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
import { NavLink } from 'react-router-dom';

const initial = {
  weight: 110,
  height: 186,
  age: 30,
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
    for (let i = 0; i < 100; i += 1) {
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
      {/* <Box
        width={296}
        maxHeight={122}
        overflow="hidden"
        overflowY="auto"
        mr="auto"
        ml="auto"
        marginBottom={40}
        > */}
      <StyledList>
        {notAllowedProducts.map((item, index) => {
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
