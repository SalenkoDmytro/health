import PropTypes from 'prop-types';
import ButtonIcon from 'components/common/buttonIcon';
import {
  StyledNameText,
  StyledNumberText,
  StyledIconClose,
} from './DiaryProductsListItem.styled';

import useMatchMedia from 'hooks/useMatchMedia';

function DiaryProductsListItem({ id, title, weight, kcal, onDelete }) {
  const { isMobile } = useMatchMedia();
  const countKcal = (weight, kcal) => {
    return Math.floor(kcal * (weight / 100));
  };

  return (
    <>
      <StyledNameText>{title}</StyledNameText>
      <StyledNumberText>{weight} г</StyledNumberText>
      {!isMobile && (
        <StyledNumberText>{countKcal(weight, kcal)} ккал</StyledNumberText>
      )}
      <ButtonIcon
        type="button"
        onClick={() => onDelete(id)}
        aria-label="delete product"
      >
        <StyledIconClose />
      </ButtonIcon>
    </>
  );
}

DiaryProductsListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  weight: PropTypes.number,
  kcal: PropTypes.number,
  onDelete: PropTypes.func,
};

export default DiaryProductsListItem;
