import styled from 'styled-components';
import ButtonIcon from 'components/common/buttonIcon';
import { InputStyled } from 'components/dailyCaloriesForm/DailyCaloriesForm.styled';
import { device } from 'utils/device';

export const StyledProductForm = styled.form`
  width: 100%;
  padding-bottom: 60px;
  display: flex;
  gap: 50px;
  flex-direction: column;
  @media ${device.fablet} {
    gap: 80px;
  }

  @media ${device.tablet} {
    gap: 50px;
    flex-direction: row;
  }
  @media ${device.desktop} {
    gap: 30px;
  }
`;

export const StyledNameWrapper = styled.div`
  @media ${device.mobileOnly} {
    margin-bottom: 30px;
    width: 100%;
  }

  @media ${device.tablet} {
    /* width: 240px; */
    margin-right: 20px;
  }
  @media ${device.desktop} {
    margin-right: 48px;
  }
`;

export const InputStyledNameProduct = styled(InputStyled)`
  width: 80%;

  @media ${device.tablet} {
    width: 250px;
  }
`;

export const StyledWeightWrapper = styled.div`
  @media ${device.mobileOnly} {
    width: 100%;
    margin-bottom: 60px;
  }

  @media ${device.tablet} {
    margin-right: 86px;
  }
  @media ${device.desktop} {
    margin-right: 60px;
  }
`;

export const InputStyledWeightProduct = styled(InputStyled)`
  /* label {
    @media ${device.tablet} {
      text-align: right;
    }
  } */

  width: 80%;

  @media ${device.tablet} {
    width: 220px;
  }
`;

export const StyledOption = styled.div`
  position: absolute;
  bottom: 0px;
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
  align-items: center;
  justify-content: center;
  min-width: ${p => `${p.theme.space[5] + 16}px`};
  min-height: ${p => `${p.theme.space[5] + 16}px`};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.button.primaryBackground};
  &:hover ${StyledIcon} {
    transform: scale(1.5);
  }
  @media ${device.fabletAndMobileOnly} {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Wrapper = styled.div`
  background-color: white;
  position: absolute;
  @media ${device.mobileOnly} {
    top: 55px;
    left: 0;
  }
  @media ${device.fabletOnly} {
    top: 55px;
    left: 0;
  }
  @media ${device.tablet} {
    top: 55px;
    left: 0;
    width: 320px;
  }
`;

export const StyledSpan = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.accent};
`;
