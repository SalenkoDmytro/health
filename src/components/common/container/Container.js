import styled from 'styled-components';
import { device } from '../../../utils/device';

export const Container = styled.div`
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin: 0 auto;

  @media(${device.mobileOnly}) {
    padding-right: 20px;
    padding-left: 20px;
  }

  @media(${device.tablet}) {
    padding-right: 32px;
    padding-left: 32px;
  }

`;
