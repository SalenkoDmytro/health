import styled from 'styled-components';
import { device } from 'utils/device';
import {
  StyledButtonIcon,
  StyledIcon,
} from 'components/diaryAddProductForm/DiaryAddProductForm.styled';

export const StyledWrap = styled.div`
  width: 100%;
  padding-bottom: ${p => `${p.theme.space[4] + 4}px`};
  @media ${device.tablet} {
    padding-bottom: ${p => `${p.theme.space[0]}px`};
  }
`;

export const StyledList = styled.ul`
  max-height: ${p => `${p.theme.space[7] + 10}px`};
  padding-right: ${p => `${p.theme.space[2] + 10}px`};
  overflow: hidden;
  overflow-y: auto;
  font-size: ${p => p.theme.fontWeights.normal};

  scrollbar-color: #6969dd #e0e0e0;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${p => p.theme.colors.primaryBackground};
    border-radius: ${p => p.theme.radii.md};
    margin-block: ${p => `${p.theme.space[2]}px`};
  }

  ::-webkit-scrollbar-thumb {
    background: ${p => p.theme.colors.burgerBackground};
    border-radius: ${p => p.theme.radii.md};
  }

  ::-webkit-scrollbar-thumb:hover {
    transform: scale(1.1);
  }

  @media ${device.fabletAndMobileOnly} {
    margin-bottom: ${p => `${p.theme.space[4] + 4}px`};
  }

  @media ${device.tablet} {
    max-height: ${p => `${p.theme.space[8] + 40}px`};
  }
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${p => `${p.theme.space[4] + 4}px`};
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.l};
  color: ${p => p.theme.fontWeights.normal};
  @media ${device.mobile} {
    margin-bottom: ${p => `${p.theme.space[4]}px`};
  }
`;

export const StyledModalIcon = styled(StyledIcon)`
  /* width: ${p => `${p.theme.space[4] - 2}px`};
  height: ${p => `${p.theme.space[4] - 2}px`}; */
  transition: ${p => p.theme.animation.cubic};
  transition-property: transform;
`;

export const StyledModalOpenIcon = styled(StyledButtonIcon)`
  /* min-width: ${p => `${p.theme.space[5] + 16}px`};
  min-height: ${p => `${p.theme.space[5] + 16}px`};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.button.primaryBackground}; */
  &:hover ${StyledModalIcon} {
    transform: scale(1.5);
  }
`;
