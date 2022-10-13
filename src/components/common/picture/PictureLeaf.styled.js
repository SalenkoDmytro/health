import styled from 'styled-components';
import imageDesk from '../../../assets/images/summaryImgDesk.png';
import imageTab from '../../../assets/images/summaryImgTadl.png';
import { device } from '../../../utils/device';

export const PictureLeafStyled = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;

  @media ${device.desktop} {
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background-image: url(${imageDesk});
    background-position: top 0 right 0;
    background-color: #f0f1f3;
  }

  @media ${device.tabletOnly} {
    width: 100%;
    height: 40%;
    background-image: url(${imageTab});
    background-position: bottom 0 right 0;
    background-color: #f0f1f3;
  }

  @media ${device.mobileOnly} {
    width: 100%;
    // height: 40%;
    background-position: bottom 0 right 0;
    background-color: #f0f1f3;
  }
  @media ${device.fablet} {
    width: 100%;
    height: 40%;
    background-position: bottom 0 right 0;
    background-color: #f0f1f3;
  }
`;
