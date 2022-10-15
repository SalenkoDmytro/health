import PropTypes from 'prop-types';
import ButtonIcon from 'components/common/buttonIcon';
import {
  StyledNameText,
  StyledNumberText,
  StyledIconClose,
} from './DiaryProductsListItem.styled';

import useMatchMedia from 'hooks/useMatchMedia';
import { useDispatch } from 'react-redux';
import { deleteDayProduct } from 'redux/userData/userDataOperation';

function DiaryProductsListItem({ dayId, eatenProductId, title, weight, kcal }) {
  const dispatch = useDispatch();
  const { isMobile } = useMatchMedia();

  return (
    <>
      <StyledNameText>{title}</StyledNameText>
      <StyledNumberText>{weight} г</StyledNumberText>
      {!isMobile && (
        <StyledNumberText>{Math.floor(kcal)} ккал</StyledNumberText>
      )}
      <ButtonIcon
        type="button"
        onClick={() => dispatch(deleteDayProduct({ dayId, eatenProductId }))}
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
