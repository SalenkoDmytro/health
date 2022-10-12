import styled from 'styled-components';
import { device } from 'utils/device';
import Box from 'components/common/box/Box';

export const BoxStyled = styled(Box)`
  padding-bottom: 30px;

  @media ${device.mobileOnly} {
    margin-top: 32px;
  }
  @media ${device.fablet} {
    margin-top: 100px;
  }
  @media ${device.desktop} {
    margin-top: 150px;
  } ;
`;
