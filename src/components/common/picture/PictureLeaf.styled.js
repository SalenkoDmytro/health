import styled from 'styled-components';
import imageDesk from '../../../assets/images/summaryImgDesk.png';
import imageTab from '../../../assets/images/summaryImgTadl.png';
import { device } from '../../../utils/device';

export const PictureLeafBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 70%;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f0f1f3;
  z-index: -1;

  @media ${device.desktop} {
    width: 40%;
    height: 100%;
    background-position: bottom 100px right 0;
    background-image: url(${imageDesk});
  }

  // @media ${device.tabletOnly} {
  //   background-image: url(${imageTab});
  // }

  // // @media ${device.mobileOnly} {

  // // }
  // @media ${device.fabletOnly} {
  //   background-image: url(${imageTab});
  // }
`;
export const PictureLeafStyled = styled.div`
  position: absolute;
  bottom: 98px;
  right: 0;
  width: 100%;
  height: 60%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom 0 right 0;
  // background-color: #f0f1f3;
  z-index: -1;

  @media ${device.desktop} {
    width: 40%;
    height: 100%;
    // background-image: url(${imageDesk});
  }

  @media ${device.tabletOnly} {
    background-image: url(${imageTab});
  }

  // @media ${device.mobileOnly} {

  // }
  @media ${device.fabletOnly} {
    height: 35%;
    background-image: url(${imageTab});
  }
`;
