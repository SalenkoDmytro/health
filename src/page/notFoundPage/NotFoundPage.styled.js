import styled from 'styled-components';
import Box from 'components/common/box/Box';
import { device } from 'utils/device';
import healthy from 'assets/images/notFound/flat-lay-404.jpeg';

export const Image = styled.div`
  margin-bottom: -30px;
  background-image: url(${healthy});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BoxStyled = styled(Box)`
  @media (${device.mobile}) {
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-left: auto;
    margin-top: -30px;
    padding-bottom: -30px;
    font-size: ${p => p.theme.fontSizes.xl};
  }
  @media (${device.fablet}) {
    margin-top: -100px;
    font-size: ${p => p.theme.fontSizes.xl};
  }
  @media (${device.tablet}) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }
  @media (${device.desktop}) {
    color: #010101;
    padding-bottom: -30px;
  }
`;
