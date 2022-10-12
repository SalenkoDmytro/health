import { useSelector } from 'react-redux';
import DiaryProductsListItem from 'components/diaryProductsListItem';
import { StyledWrap, StyledList, StyledItem } from './DiaryProductsList.styled';

export default function DiaryProductsList({ dayId, eatenProducts }) {
  return (
    <StyledWrap>
      <StyledList>
        {eatenProducts?.map(item => {
          return (
            <StyledItem key={item.id}>
              <DiaryProductsListItem
                dayId={dayId}
                eatenProductId={item.id}
                title={item.title}
                weight={item.weight}
                kcal={item.kcal}
              />
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledWrap>
  );
}
