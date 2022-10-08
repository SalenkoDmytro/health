import styled from 'styled-components';

export const StyledTitle = styled.h2`
  padding: ${p => `${p.theme.space[3]}px`};
  min-width: ${p => `${p.theme.space[9] - 2}px`};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.title};
  color: ${p => p.theme.colors.secondaryText};
  text-align: center;
  width: 510px;
`;

export const StyledTitleCalories = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.title};
  color: ${p => p.theme.colors.text.caloriesText};
  text-align: center;
  margin: 20px auto 12px;
  padding-bottom: 32px;
  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  width: 330px;
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
  width: 330px;
  margin: 0px auto 20px;
`;

export const StyledList = styled.ol`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  width: 296px;
  margin: 0px auto 40px;
  color: ${p => p.theme.colors.text.primaryText};
  list-style: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
