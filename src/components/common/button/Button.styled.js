import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${p => `${p.theme.space[3]}px`};
  min-width: ${p => `${p.theme.space[7]}px`};
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.main};
`;
