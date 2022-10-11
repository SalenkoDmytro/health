import styled from 'styled-components';
import { Form, Field } from 'formik';
// import { IoIosAddCircle } from 'react-icons/io';
import ButtonIcon from 'components/common/buttonIcon';

export const StyledProductForm = styled.form`
  display: flex;
  align-items: baseline;
  width: 100%;
`;

export const LabelStyled = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: ${p => p.theme.colors.text.primaryText};
  transition: ${p => p.theme.animation.cubic};
  transition-property: transform;
`;

export const InputStyled = styled(Field)`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  font: inherit;
  outline: none;
  padding: 10px 20px;
  border: none;
  border-bottom: 1px solid #e0e0e0;

  &:focus + ${LabelStyled} {
    transform: translateY(${p => `${(p.theme.space[4] + 4) * -1}px`});
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;

// export const StyledSelect = styled.select`
//   /* position: absolute; */
//   top: 70px;
//   left: 0;
//   width: 100%;
//   height: 100px;
//   overflow-y: scroll;
// `;

export const StyledOption = styled.div`
  position: absolute;
  bottom: -70px;
  height: 100px;
  width: 280px;
  overflow: scroll;
  background-color: #ffffff;
  padding: 15px 0;
  z-index: 100;
`;

export const StyledIcon = styled.img`
  width: ${p => `${p.theme.space[4] - 2}px`};
  height: ${p => `${p.theme.space[4] - 2}px`};
  transition: ${p => p.theme.animation.cubic};
  transition-property: transform;
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => `${p.theme.space[5] + 16}px`};
  height: ${p => `${p.theme.space[5] + 16}px`};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.button.primaryBackground};
  &:hover ${StyledIcon} {
    transform: scale(1.5);
  }
`;
