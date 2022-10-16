import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';
import { device } from 'utils/device';

export const StyledNameText = styled.p`
  width: 46%;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: ${p => `${p.theme.space[3]}px`};

  @media ${device.tablet} {
    width: 39%;
    padding-bottom: ${p => `${p.theme.space[4] + 4}px`};
  }
`;

export const StyledNumberText = styled.p`
  width: 18%;
  padding-bottom: ${p => `${p.theme.space[3]}px`};
  border-bottom: 1px solid #e0e0e0;
  text-align: right;

  @media ${device.tablet} {
    padding-bottom: ${p => `${p.theme.space[4] + 4}px`};
    width: 17%;
  }
`;

export const StyledIconClose = styled(IoIosClose)`
  width: ${p => `${p.theme.space[4] + 9}px`};
  height: ${p => `${p.theme.space[4] + 9}px`};
  color: ${p => p.theme.colors.button.icon};

  :hover,
  focus {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.1);
    transition: all 250 ms cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: color, transform;
  }

  // @media ${device.fablet} {
  //   width: ${p => `${p.theme.space[5] + 4}px`};
  //   height: ${p => `${p.theme.space[5] + 4}px`};
  // }
`;
