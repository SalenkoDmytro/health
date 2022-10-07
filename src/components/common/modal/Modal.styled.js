import styled from 'styled-components';

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

  width: 672px;
  height: 573px;

  min-width: ${p => `${p.theme.space[7] * 3}px`};
  padding: 64px 82px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
`;
