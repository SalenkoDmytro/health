import { useSelector } from 'react';
import DiaryProductsListItem from 'components/diaryProductsListItem';
import { StyledWrap, StyledList, StyledItem } from './DiaryProductsList.styled';
import { selectDailyProducts } from 'redux/daily/dailySelectors';

const eatenProductsExample = [
  {
    title: 'Меланж яичный',
    weight: 200,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6a',
  },
  {
    title: 'Шоколад',
    weight: 200,
    kcal: 457,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6b',
  },
  {
    title: 'Яблуко',
    weight: 100,
    kcal: 257,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6c',
  },
  {
    title: 'Банан',
    weight: 100,
    kcal: 187,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Молоко',
    weight: 100,
    kcal: 257,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
  },
  {
    title: 'Сир',
    weight: 100,
    kcal: 187,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6f',
  },
];

export default function DiaryProductsList() {
  // const products = useSelector(selectDailyProducts);
  // console.log('🚀 ~ DiaryProductsList ~ products', products);

  const onDeleteBtn = id => {
    console.log(id);
  };

  return (
    <StyledWrap>
      <StyledList>
        {eatenProductsExample.map(({ id, title, weight, kcal }) => {
          return (
            <StyledItem key={id}>
              <DiaryProductsListItem
                id={id}
                title={title}
                weight={weight}
                kcal={kcal}
                onDelete={onDeleteBtn}
              />
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledWrap>
  );
}
