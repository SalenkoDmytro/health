import styled from 'styled-components';
import { device } from 'utils/device';

export const DiaryBox = styled.div`
  @media ${device.desktop} {
    display: flex;
  }
`;

export const Diary = styled.div`
  @media ${device.fablet} {
    // padding-top: 80px;
    padding-bottom: 40px;
  }

  @media ${device.desktop} {
    width: 60%;
    // padding-top: 100px;
    padding-bottom: 40px;
  }
`;
