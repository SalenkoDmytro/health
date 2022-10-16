import useMatchMedia from 'hooks/useMatchMedia';

import DiaryProductsListItem from 'components/diaryProductsListItem';
import { StyledWrap, StyledList, StyledItem } from './DiaryProductsList.styled';
import {
  StyledModalOpenIcon,
  StyledModalIcon,
} from './DiaryProductsList.styled';
import addIcon from 'assets/icons/addProduct.svg';

export default function DiaryProductsList({
  dayId,
  eatenProducts = [],
  openModal,
}) {
  const { isMobile } = useMatchMedia();

  return (
    <StyledWrap>
      <StyledList>
        {eatenProducts?.map(item => {
          return (
            <StyledItem key={item?.id}>
              <DiaryProductsListItem
                dayId={dayId}
                eatenProductId={item?.id}
                title={item?.title}
                weight={item?.weight}
                kcal={item?.kcal}
              />
            </StyledItem>
          );
        })}
      </StyledList>
      {isMobile && (
        <StyledModalOpenIcon
          onClick={() => {
            openModal();
          }}
          aria-label="открыть модалку"
        >
          <StyledModalIcon src={addIcon} />
        </StyledModalOpenIcon>
      )}
    </StyledWrap>
  );
}
