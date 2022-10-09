import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;

  @media (max-width: 767px) {
    padding: 20px 20px 16px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 20px 32px 16px;
  }

  @media (max-width: 1199px) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  }

  @media (min-width: 1200px) {
    align-items: baseline;
    padding: 80px 16px;
  }
`;
