import React from 'react';
import {
  SideBarStyled,
  Summary,
  SummaryList,
  SummaryListItem,
  SummarySubtitle,
  SummaryTitle,
} from './RightSideBar.styled';

function RightSideBar({ date }) {
  console.log(date.toLocaleString());
  return (
    <SideBarStyled>
      <Summary>
        <SummaryTitle SummaryTitle>{date.toLocaleString()}</SummaryTitle>
        <SummaryList>
          < SummaryListItem>
            <span>Осталось</span>
            <span>000 ккал</span>
          </SummaryListItem>
          <SummaryListItem>
            <span>Употреблено</span>
            <span>000 ккал</span>
          </SummaryListItem>
          <SummaryListItem>
            <span>Дневная норма</span>
            <span>000 ккал</span>
          </SummaryListItem>
          <SummaryListItem>
            <span>n% от нормы</span>
            <span>000 ккал</span>
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
