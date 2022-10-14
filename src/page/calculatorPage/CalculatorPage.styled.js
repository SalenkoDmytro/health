import styled from 'styled-components';
import { device } from 'utils/device';

export const CalculatorBox = styled.div`
  @media ${device.desktop} {
    display: flex;
  }
`;

export const Calculator = styled.div`
  @media ${device.fablet} {
    //margin-top: 80px;
  }

  @media ${device.desktop} {
    width: 60%;
    //margin-top: 100px
  }
`;
