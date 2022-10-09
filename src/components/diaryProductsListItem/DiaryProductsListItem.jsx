import { IoIosClose } from 'react-icons/io';
import ButtonIcon from 'components/common/buttonIcon';
import {
  StyledItem,
  StyledNameText,
  StyledNumberText,
} from './DiaryProductsListItem.styled';

import Box from 'components/common/box/Box';
function DiaryProductsListItem({ id, title, weight, kcal }) {
  const countKcal = (weight, kcal) => {
    return Math.floor(kcal * (weight / 100));
  };

  return (
    <Box>
      <StyledItem key={id}>
        <StyledNameText>{title}</StyledNameText>
        {/* select menu замість p*/}
        <StyledNumberText>{weight} г</StyledNumberText>
        <StyledNumberText>{countKcal(weight, kcal)} ккал</StyledNumberText>.
        <ButtonIcon type="button" aria-label="delete product">
          <IoIosClose size="20px" />
        </ButtonIcon>
      </StyledItem>
    </Box>
  );
}

export default DiaryProductsListItem;
