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
    margin-top:20px ;
    bottom: 0;
    right: 0;
    top: unset;
    width: 100%;
    height: 25%;
    background-image: url(${imageTab});
    background-position: bottom 0 right 0;
    background-color: #f0f1f3;
  }

  @media ${device.mobileOnly} {
    margin-top:20px ;
    bottom: 0;
    right: 0;
    top: unset;
    width: 100%;
     height: 45vh;
    background-position: bottom 0 right 0;
    background-color: #f0f1f3;
  }
  @media ${device.fabletOnly} {
    margin-top:20px ;
    bottom: 0%;
    right: 0;
    top: unset;
    width: 100%;
    height: 45vh;
    background-position: bottom 0 right 0;
    background-image: url(${imageTab});
    background-color: #f0f1f3;
  }
`;
