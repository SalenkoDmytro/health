import { useSelector } from 'react-redux';
import {
  SideBarStyled,
  Summary,
  SummaryList,
  SummaryListItem,
  SummarySubtitle,
  SummaryTitle,
} from './RightSideBar.styled';
import { selectUDNotAllowedProducts } from 'redux/userData/userDataSelectors';
import {
  selectUDDaySummary,
  selectUDDailyRate,
} from 'redux/userData/userDataSelectors';
import { getRandomAllNotAllowedProducts } from 'redux/userData/userDataSelectors';
import { nanoid } from '@reduxjs/toolkit';

function RightSideBar({ date }) {
  //Selectors
  const dailyRate = useSelector(selectUDDailyRate);
  const consumption = useSelector(selectUDDaySummary) || {};
  const notAllowedProducts = useSelector(selectUDNotAllowedProducts);

  const notAllowedList = getRandomAllNotAllowedProducts(notAllowedProducts, 4);
  const { kcalLeft, kcalConsumed, percentsOfDailyRate } = consumption;

  const formattedDate =
    date?.getDate() + '.' + (date?.getMonth() + 1) + '.' + date?.getFullYear();

  return (
    <SideBarStyled>
      <Summary>
        <SummaryTitle SummaryTitle>{formattedDate}</SummaryTitle>
        <SummaryList>
          <SummaryListItem>
            <span>Осталось</span>
            <span>{Math.trunc(kcalLeft)} ккал</span>
          </SummaryListItem>
          <SummaryListItem>
            <span>Употреблено</span>
            <span>{Math.trunc(kcalConsumed) || 0} ккал</span>
          </SummaryListItem>
          <SummaryListItem>
            <span>Дневная норма</span>
            <span>{Math.trunc(dailyRate)} ккал</span>
          </SummaryListItem>
          <SummaryListItem>
            <span>% от нормы</span>
            <span>{Math.trunc(percentsOfDailyRate) || 0} %</span>
          </SummaryListItem>
        </SummaryList>
      </Summary>
      <div>
        <SummaryTitle>Нерекомендуемые продукты </SummaryTitle>
        <SummarySubtitle></SummarySubtitle>
        <ul>
          {notAllowedList.map(product => (
            <li key={nanoid()}>{product}</li>
          ))}
        </ul>
      </div>
    </SideBarStyled>
  );
}

export default RightSideBar;
