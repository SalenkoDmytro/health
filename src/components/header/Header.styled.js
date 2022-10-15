import styled from 'styled-components';
import { device } from 'utils/device';

export const HeaderStyled = styled.header`
  display: flex;

  // &.gradient {
  //   background-image: linear-gradient(
  //     to right,
  //     transparent 63.5%,
  //     ${({ theme }) => theme.colors.primaryBackground} 63.5%,
  //     ${({ theme }) => theme.colors.primaryBackground} 100%
  //   );
  // }

  @media ${device.fabletAndMobileOnly} {
    padding: 20px 20px 16px;
  }

  @media ${device.tabletOnly} {
    padding: 20px 32px 16px;
  }

  @media ${device.noDesktop} {
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  }

  @media ${device.desktop} {
    align-items: baseline;
    padding: 16px 16px 0px;
  }
`;

export const MobMenu = styled.div`
  position: fixed;
  z-index: 1;
  padding: 60px 20px;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.burgerBackground};
  @media ${device.tablet} {
    padding: 100px 216px;
  }
`;

export const MobMenuButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
  @media ${device.tablet} {
    margin-left: 0;
  }
`;
