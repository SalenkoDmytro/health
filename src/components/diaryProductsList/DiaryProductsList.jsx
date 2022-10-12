// import { useSelector } from 'react';
import DiaryProductsListItem from 'components/diaryProductsListItem';
import { StyledWrap, StyledList, StyledItem } from './DiaryProductsList.styled';
// import { selectDailyProducts } from 'redux/daily/dailySelectors';

export default function DiaryProductsList({ dayInfo }) {
  return (
    <StyledWrap>
      <StyledList>
        {dayInfo?.eatenProducts?.map(({ id, title, weight, kcal }) => {
          return (
            <StyledItem key={id}>
              <DiaryProductsListItem
                dayId={dayInfo.id}
                eatenProductId={id}
                title={title}
                weight={weight}
                kcal={kcal}
              />
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledWrap>
  );
}
