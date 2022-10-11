import styled from 'styled-components';

export const TeamList = styled.ul`
  display: block;
  gap: 20px;
  height: 400px;

  overflow: scroll;

  @media (min-width: 480px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const TeamListItem = styled.li`
  @media (max-width: 767px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media (min-width: 768px) {
    flex-basis: calc((100% - 2 * 20px) / 3);
  }
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: scroll;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;
  padding: 10px;

  background: ${({ theme }) => theme.colors.accentAlpha};
  transform: translateY(100%);
  transition: transform ${({ theme }) => theme.animation.cubic};
`;

export const TeamLinkStyled = styled.a`
  display: block;
  transition: box-shadow ${({ theme }) => theme.animation.cubic};

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  &:hover ${Overlay}, &:focus ${Overlay} {
    transform: translateY(0);
  }
`;

export const TeamPhotoStyled = styled.img`
  width: 100%;
`;

export const OverlayText = styled.p`
  @media (max-width: 479px) {
    font-size: ${p => p.theme.fontSizes.s};
    font-family: ${p => p.theme.fonts.main};
    line-height: ${p => p.theme.lineHeights.text};
  }
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: ${p => p.theme.letterSpacing.m};
  color: ${p => p.theme.colors.text.secondaryText};

  overflow: auto;
`;
