import { useSelector } from 'react-redux';
import {
  SideBarStyled,
  Summary,
  SummaryList,
  SummaryListItem,
  SummarySubtitle,
  SummaryTitle,
} from './RightSideBar.styled';
import {
  selectUDDaySummary,
  selectUDDailyRate,
} from 'redux/userData/userDataSelectors';

function RightSideBar({ date }) {
  const dailyRate = useSelector(selectUDDailyRate);
  const consumption = useSelector(selectUDDaySummary) || {};
  const { kcalLeft, kcalConsumed, percentsOfDailyRate } = consumption;

  const formattedDate =
    date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

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
        <SummarySubtitle>
          Все бульоны/отвары, жирная рыба, икра и мясо, грибы, крупы (пшено,
          перловая, пшеничная)
        </SummarySubtitle>
      </div>
    </SideBarStyled>
  );
}

export default RightSideBar;
