import styled from 'styled-components';
import { device } from 'utils/device';

export const StyledTitle = styled.h2`
  padding: ${p => `${p.theme.space[3]}px`};
  //   min-width: ${p => `${p.theme.space[9] - 2}px`};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.title};
  color: ${p => p.theme.colors.secondaryText};
  width: 280px;
  margin: 0px auto 0px;
  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.l};
    text-align: center;
    width: 510px;
  }
`;

export const StyledTitleCalories = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.title};
  color: ${p => p.theme.colors.text.caloriesText};
  margin: 20px auto 12px;
  padding-bottom: 32px;
  text-align: center;
  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  width: 280px;
  @media ${device.tablet} {
    width: 330px;
  }
`;

export const StyledCalories = styled.span`
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const StyledText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  width: 280px;
  margin: 0px auto 20px;
  @media ${device.tablet} {
    width: 330px;
  }
`;

export const StyledList = styled.ol`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  width: 280px;
  margin: 0px auto 40px;
  color: ${p => p.theme.colors.text.primaryText};
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 122px;
  overflow: hidden;
  overflow-y: auto;

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

  @media ${device.tablet} {
    width: 330px;
  }
`;
