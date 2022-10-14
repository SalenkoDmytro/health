import styled from 'styled-components';
import { device } from 'utils/device';

export const DiaryBox = styled.div`
  @media ${device.desktop} {
    display: flex;
  }
`;

export const Diary = styled.div`
  @media ${device.fablet} {
    margin-top: 80px;
    margin-bottom:40px;
  }

  @media ${device.desktop} {
    width: 60%;
    margin-top: 100px;
    margin-bottom:40px;
  }
`;
