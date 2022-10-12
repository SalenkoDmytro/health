import styled from 'styled-components';
import ButtonIcon from 'components/common/buttonIcon';
import { device } from 'utils/device';

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: inherit;

  @media (${device.mobile}) {
    border-top: 2px solid ${({ theme }) => theme.colors.border};
    padding: 20px 20px 16px;
  }

  @media (${device.tabletOnly}) {
    padding: 20px 32px 16px;
  }

  @media (${device.desktop}) {
    align-items: center;
  }
`;

export const FooterTextStyled = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: ${({ theme }) => theme.lineHeights.title};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  text-transform: ${({ theme }) => theme.textTransform.upCase};
  color: ${({ theme }) => theme.colors.text.secondaryText};
`;

export const FooterButtonStyled = styled(ButtonIcon)`
  @media (${device.mobile}) {
    display: none;
  }

  @media (${device.fablet}) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
