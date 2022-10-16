import styled from 'styled-components';
import { device } from 'utils/device';
import Box from 'components/common/box/Box';

export const BoxStyled = styled(Box)``;

export const Wrapper = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1 1 auto;
  padding-bottom: 30px;

  @media ${device.mobileOnly} {
    margin-top: 32px;
  }
  @media ${device.fablet} {
    margin-top: 40px;
  }
  @media ${device.desktop} {
    margin-top: 100px;
  } ;
`;
