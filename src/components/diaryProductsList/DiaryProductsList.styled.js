import styled from 'styled-components';
import { device } from 'utils/device';

export const StyledWrap = styled.div`
  width: 100%;
  margin-bottom: ${p => `${p.theme.space[4] - 4}px`};
  @media ${device.tablet} {
    margin-bottom: ${p => `${p.theme.space[0]}px`};
  }
`;

export const StyledList = styled.ul`
  max-height: ${p => `${p.theme.space[7] + 10}px`};
  padding-right: ${p => `${p.theme.space[2] + 10}px`};
  overflow: hidden;
  overflow-y: auto;
  font-size: ${p => p.theme.fontWeights.normal};

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
    /* background-color: orange; */
    transform: scale(1.1);
    /* width: 8px; */
  }

  @media ${device.tablet} {
    max-height: ${p => `${p.theme.space[8] + 40}px`};
  }
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: ce;
  margin-bottom: ${p => `${p.theme.space[4] + 4}px`};
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.l};
  color: ${p => p.theme.fontWeights.normal};
  @media ${device.mobile} {
    margin-bottom: ${p => `${p.theme.space[4]}px`};
  }
`;
