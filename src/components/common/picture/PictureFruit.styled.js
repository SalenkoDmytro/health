import styled from 'styled-components';
import imageDesk from '../../../assets/images/primaryImgDesk.png';
import imageTab from '../../../assets/images/primaryImgTab.png';
import { device } from '../../../utils/device';

export const PictureFruitBox = styled.div`
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;

  @media ${device.desktop} {
    background-image: url(${imageDesk});
    background-position: top 0 right 0;
  }

  @media ${device.tabletOnly} {
    background-image: url(${imageTab});
    background-position: bottom 98px right 0;
  }

  @media ${device.fabletOnly} {
    background-image: url(${imageTab});
    background-position: bottom 98px right 0;
  }
`;
export const PictureFruitStyled = styled.div`
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;

  @media ${device.desktop} {
    background-image: url(${imageDesk});
    background-position: top 0 right 0;
  }

  @media ${device.tabletOnly} {
    background-image: url(${imageTab});
    background-position: bottom 0 right 0;
  }

  @media ${device.fabletOnly} {
    background-image: url(${imageTab});
    background-position: bottom 0 right 0;
  }
`;
