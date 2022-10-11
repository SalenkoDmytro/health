import styled from 'styled-components';
import { device } from '../../../utils/device';

export const Container = styled.div`
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 40px;
  margin: 0 auto;

  // @media(${device.mobileOnly}) {
  //   padding-right: 20px;
  //   padding-left: 20px;
  // }
  //
  // @media(${device.tablet}) {
  //   padding-right: 32px;
  //   padding-left: 32px;
  // }

  //@media (max-width: 767px) {
  //  padding: 20px 20px 16px;
  //}

  @media (${device.tabletOnly}) {
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 100px;
  }

  @media (${device.desktop}) {
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 150px;
  }
`;
