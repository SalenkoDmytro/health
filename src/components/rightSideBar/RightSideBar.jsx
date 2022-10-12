import React from 'react';
import {
  SideBarStyled,
  Summary,
  SummaryList,
  SummaryListItem,
  SummarySubtitle,
  SummaryTitle,
} from './RightSideBar.styled';
import { useSelector } from 'react-redux';
import { selectDaySummary } from 'redux/day/daySelectors';

function RightSideBar({ date }) {
  const consumption = useSelector(selectDaySummary);
  const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
    consumption;

  return (
    <SideBarStyled>
      <Summary>
        <SummaryTitle SummaryTitle>{date.toLocaleString()}</SummaryTitle>
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
        <SummarySubtitle>
          Все бульоны/отвары, жирная рыба, икра и мясо, грибы, крупы (пшено,
          перловая, пшеничная)
        </SummarySubtitle>
      </div>
    </SideBarStyled>
  );
}

export default RightSideBar;
