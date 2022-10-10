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

export const MobMenu = styled.div`
  position: fixed;
  z-index: 1;
  padding: 60px 20px;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.burgerBackground};
  @media (min-width: 768px) {
    padding: 100px 216px;
  }
`;

export const MobMenuButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;
