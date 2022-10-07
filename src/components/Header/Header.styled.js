import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;

  @media (max-width: 766px) {
    padding: 20px;
  }

  @media (min-width: 767px) and (max-width: 1199px) {
    padding: 32px 20px;
  }

  @media (max-width: 1199px) {
    border-bottom: 2px solid #e0e0e0;
  }
`;
