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
  const notAllowedProducts = useSelector(selectUDNotAllowedProducts);
  // console.log(
  //   '🚀 ~ file: RightSideBar.jsx ~ line 21 ~ RightSideBar ~ notAllowedProducts',
  //   notAllowedProducts
  // );

  const notAllowedList = getRandomAllNotAllowedProducts(
    notAllowedProducts[0],
    6
  );

  const { kcalLeft, kcalConsumed, percentsOfDailyRate } = consumption;
  // const formattedDate = date.toISOString().split('T')[0];

  return (
    <>
      <SideBarStyled>
        <Summary>
          <SummaryTitle SummaryTitle>{date}</SummaryTitle>
          <SummaryList>
            <SummaryListItem>
              <span>Осталось</span>
              <span>{Math.floor(kcalLeft)} ккал</span>
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
              <span>{Math.floor(percentsOfDailyRate)} %</span>
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
