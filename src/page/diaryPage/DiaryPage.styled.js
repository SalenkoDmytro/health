import styled from 'styled-components';
import { device } from 'utils/device';
import ButtonIcon from 'components/common/buttonIcon';

export const DiaryBox = styled.div`
  @media ${device.desktop} {
    display: flex;
  }
`;

export const Diary = styled.div`
  background-color: white;
  @media ${device.fablet} {
    padding-bottom: 40px;
  }

  @media ${device.desktop} {
    width: 60%;
    padding-bottom: 40px;
  }
`;

export const Button = styled(ButtonIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
