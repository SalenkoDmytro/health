import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 394px;
`;

export const LoginFormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const LoginBtnWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 46px;
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
  width: 182px;
  height: 43px;
  text-align: center;
`;
