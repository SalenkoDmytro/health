import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'utils/device';

export const FormTitle = styled.h2`
  font-family: ${x => x.theme.fonts.heading};
  font-style: normal;
  font-weight: ${x => x.theme.fontWeights.bold};
  font-size: ${x => x.theme.fontSizes.s};
  line-height: ${x => x.theme.lineHeights.form};
  letter-spacing: ${x => x.theme.letterSpacing.l};
  text-transform: ${x => x.theme.textTransform.upCase};
  color: ${x => x.theme.colors.text.accent};
  margin-bottom: 60px;
  @media ${device.mobileOnly} {
    text-align: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media ${device.mobileOnly} {
    margin-top: 40px;
  }
  @media ${device.fablet} {
    margin-top: 100px;
    max-width: 394px;
  }
  @media ${device.desktop} {
    margin-top: 100px;
  margin-bottom: 80px;
  }
`;

export const ErrorText = styled.span`
  font-family: ${x => x.theme.fonts.main};
  position: absolute;
  top: 40px;
  color: #d32f2f;
  font-weight: 600;
`;

export const LoginFormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* overflow: hidden; */

  @media ${device.fablet} {
    max-width: 240px;
  }
`;

export const LoginBtnWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 46px;
  @media ${device.mobileOnly} {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const RegisterBtn = styled(Link)`
  padding: ${p => `${p.theme.space[3]}px`};
  min-width: ${p => `${p.theme.space[7]}px`};
  background: ${p => p.theme.colors.button.secondaryBackground};
  border: 2px solid ${p => p.theme.colors.button.border};
  border-radius: ${p => p.theme.radii.xl};
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.main};
  color: ${p => p.theme.colors.button.primaryText};
  line-height: ${x => x.theme.lineHeights.body};
  font-weight: ${x => x.theme.fontWeights.bold};
  width: 182px;
  height: 43px;
  text-align: center;
`;
