import styled from 'styled-components';
import imageDesk from '../../../assets/images/secondaryImgDesk.png'
import { device } from '../../../utils/device';

export const PictureLeafStyled = styled.div`
  height: 100%;
  width: 40%;
  position: absolute;
  top: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;

  @media ${device.tablet} {
    background-image: url(${imageDesk});
    background-position: top 0 right 0;
    background-color: #F0F1F3;
  };
`
