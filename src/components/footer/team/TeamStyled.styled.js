import styled from 'styled-components';
import { device } from 'utils/device';

export const TeamList = styled.ul`
  display: flex;
  height: 400px;
  gap: 20px;

  flex-wrap: wrap;

  overflow-y: scroll;

  @media (${device.fablet}) {
    display: flex;
  }

  scrollbar-color: #6969dd #e0e0e0;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${p => p.theme.colors.primaryBackground};
    border-radius: ${p => p.theme.radii.md};
    margin-block: ${p => `${p.theme.space[2]}px`};
  }

  ::-webkit-scrollbar-thumb {
    background: ${p => p.theme.colors.burgerBackground};
    border-radius: ${p => p.theme.radii.md};
  }

  ::-webkit-scrollbar-thumb:hover {
    transform: scale(1.1);
  }
`;

export const TeamListItem = styled.li`
  @media (${device.fablet}) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media (${device.desktop}) {
    flex-basis: calc((100% - 2 * 20px) / 3);
  }
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
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
  @media (${device.mobile}) {
    font-size: ${p => p.theme.fontSizes.xs};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-family: ${p => p.theme.fonts.main};
    line-height: ${p => p.theme.lineHeights.text};
    color: ${p => p.theme.colors.white};
    overflow: auto;
  }

  @media (${device.tablet}) {
    font-size: ${p => p.theme.fontSizes.s};
    letter-spacing: ${p => p.theme.letterSpacing.m};
  }
`;

export const TeamTextStyled = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: ${p => p.theme.letterSpacing.m};
  color: ${p => p.theme.colors.text.secondaryText};
`;
