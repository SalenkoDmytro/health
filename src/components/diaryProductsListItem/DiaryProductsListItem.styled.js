import styled from 'styled-components';
import { device } from 'utils/device';

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.l};
  color: ${p => p.theme.fontWeights.normal};
`;

export const StyledNameText = styled.p`
  width: 45%;
  padding-bottom: ${p => `${p.theme.space[4] + 4}px`};
  border-bottom: 1px solid #e0e0e0;

  @media ${device.mobile} {
    background-color: teal;
  }
  @media ${device.fablet} {
    background-color: green;
  }
  @media ${device.tablet} {
    background-color: tomato;
  }
  @media ${device.desktop} {
    background-color: yellow;
  }
`;

export const StyledNumberText = styled.p`
  width: 20%;
  /* padding-bottom: ${p => `${p.theme.space[4] + 4}px`}; */
  border-bottom: 1px solid #e0e0e0;
  text-align: right;
`;

// @media screen and(min - width: 40em){

// }
