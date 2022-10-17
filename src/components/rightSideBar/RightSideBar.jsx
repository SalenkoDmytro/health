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

function RightSideBar({ date }) {
  const dailyRate = useSelector(selectUDDailyRate);
  const consumption = useSelector(selectUDDaySummary) || {};
  const notAllowedProducts = useSelector(selectUDNotAllowedProducts) || [];

  const notAllowedList = getRandomAllNotAllowedProducts(notAllowedProducts, 6);

  const { /* kcalLeft, */ kcalConsumed, percentsOfDailyRate } = consumption;
  console.log('🚀 ~ RightSideBar ~ percentsOfDailyRate', percentsOfDailyRate);
  console.log('🚀 ~ RightSideBar ~ kcalConsumed', kcalConsumed);

  return (
    <>
      <SideBarStyled>
        <Summary>
          <SummaryTitle SummaryTitle>{date}</SummaryTitle>
          <SummaryList>
            <SummaryListItem>
              <span>Осталось</span>
              <span>
                {dailyRate - kcalConsumed < 0
                  ? '0 '
                  : Math.floor(dailyRate - kcalConsumed)}
                ккал
              </span>
            </SummaryListItem>
            <SummaryListItem>
              <span>Употреблено</span>
              <span>{Math.floor(kcalConsumed)} ккал</span>
            </SummaryListItem>
            <SummaryListItem>
              <span>Дневная норма</span>
              <span>{Math.floor(dailyRate)} ккал</span>
            </SummaryListItem>
            <SummaryListItem>
              <span>% от нормы</span>
              <span>
                {percentsOfDailyRate === 100
                  ? Math.floor((kcalConsumed / dailyRate) * 100)
                  : Math.floor(percentsOfDailyRate)}
                %
              </span>
            </SummaryListItem>
          </SummaryList>
        </Summary>
        <div>
          <SummaryTitle>Нерекомендуемые продукты </SummaryTitle>
          <SummarySubtitle></SummarySubtitle>
          <ul>
            {notAllowedList.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
      </SideBarStyled>
    </>
  );
}

export default RightSideBar;
