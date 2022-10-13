import styled from 'styled-components';
import { device } from 'utils/device';

export const DiaryBox = styled.div`
  @media ${device.desktop} {
    display: flex;
  }
`;

export const Diary = styled.div`
  @media ${device.tablet} {
    padding-left: 90px;
  }

  @media ${device.desktop} {
    width: 60%;
    padding-left: 115px;
  }
`;
