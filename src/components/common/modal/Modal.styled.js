import styled from 'styled-components';
import { device } from 'utils/device';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(33, 33, 33, 0.12);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (${device.mobile}) {
    min-width: 320px;
    padding: 34px 40px;
  }
  @media (${device.fablet}) {
    min-width: 450px;
  }

  @media (${device.tablet}) {
    min-width: 580px;
  }

  @media (${device.desktop}) {
    width: 672px;
    height: 573px;
    padding: 64px 82px;
  }

  min-width: ${p => `${p.theme.space[7] * 3}px`};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
`;
