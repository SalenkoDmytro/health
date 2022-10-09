import styled from 'styled-components';

export const StyledButtonIcon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};

  :hover,
  :focus {
    outline: ${p => p.theme.borders.none};
    border: ${p => p.theme.borders.none};
  }
`;
