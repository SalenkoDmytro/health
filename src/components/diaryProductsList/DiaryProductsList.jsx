import useMatchMedia from 'hooks/useMatchMedia';

import DiaryProductsListItem from 'components/diaryProductsListItem';
import { StyledWrap, StyledList, StyledItem } from './DiaryProductsList.styled';

export default function DiaryProductsList({ dayId, eatenProducts }) {
  const { isMobile } = useMatchMedia();

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
      {console.log('Прописати для кнопки відкриття модалки')}
      {isMobile && (
        <button
          onClick={() => {
            console.log('відкриття модалки');
          }}
        >
          Додати
        </button>
      )}
    </StyledWrap>
  );
}
