import styled from 'styled-components';
import { device } from 'utils/device';

export const CalculatorBox = styled.div`
  @media ${device.desktop} {
    display: flex;
  }
`;

export const Calculator = styled.div`
  background-color: white;
  padding-bottom: 20px;
  @media ${device.fablet} {
  }

  @media ${device.desktop} {
    width: 60%;
  }
`;
