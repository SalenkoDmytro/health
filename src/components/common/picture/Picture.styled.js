import styled from 'styled-components';
import imageDesk from '../../../assets/images/primaryImgDesk.png';
import imageTab from '../../../assets/images/primaryImgTab.png';
import { device } from '../../../utils/device';

export const PictureStyled = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;


 @media ${device.tablet} {
   background-image: url(${imageDesk});
   background-position: top 0 right 0;
 };

//   @media ${device.tablet} {
//   background-image: url(${imageTab});
//   background-position: bottom 0 right 0;
// }
`
