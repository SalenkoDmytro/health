import * as React from 'react';
import styled from 'styled-components';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import { device } from 'utils/device';

const BpIcon = styled('span')(() => ({
  borderRadius: '50%',
  width: 20,
  height: 20,
  boxShadow: 'inset 0 0 0 1px #E0E0E0',
  backgroundColor: '#f5f8fa',

  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '1px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: '#E0E0E0',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#FFFFFF',

  '&:before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage: 'radial-gradient(#FC842D 35%,transparent 30%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#E0E0E0',
  },
});

// Inspired by blueprintjs
export default function BpRadio(props) {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export const RadioStyled = styled(FormControlLabel)`
  color: ${p => p.theme.colors.form.checkboxText};
  font-family: ${x => x.theme.fonts.main}!important;
  margin: 0;
`;

export const FormTitle = styled.h2`
  font-family: ${x => x.theme.fonts.main};
  font-style: normal;
  font-weight: ${x => x.theme.fontWeights.bold};
  font-size: ${x => x.theme.fontSizes.xl};
  line-height: ${x => x.theme.lineHeights.title};
  color: ${x => x.theme.colors.text.sectionTitle};
  @media ${device.mobileOnly} {
    font-size: ${x => x.theme.fontSizes.m};
  }
`;

export const MainForm = styled.form`
  max-width: 608px;

  // @media ${device.mobileOnly} {
  //   margin-top: 32px;

  // }
  // @media ${device.fablet} {
  //   margin-top: 65px;

  // }
  //  @media ${device.desktop} {
  //    margin-top: 65px;
  //    padding-bottom: 65px;
  // } ;
`;

export const InputStyled = styled(TextField)`
  position: relative;
  label {
    font-family: ${x => x.theme.fonts.main};
    font-style: normal;
    font-weight: ${x => x.theme.fontWeights.bold};
    font-size: ${x => x.theme.fontSizes.s};
    line-height: ${x => x.theme.lineHeights.text};
    letter-spacing: ${x => x.theme.letterSpacing.l};
    color: ${x => x.theme.colors.form.formText};
  }
  div {
    &::before {
      border-bottom: 1px solid ${x => x.theme.colors.form.formInputBorder};
    }

    input {
    }
  }
  p {
    font-family: ${x => x.theme.fonts.main};
    position: absolute;
    bottom: -25px;
  }
`;
export const BloodGroup = styled.div`
  margin-top: 16px;
  position: relative;
  ::before {
    position: absolute;
    content: '';
    width: 100%;
    top: 30px;
    border-bottom: 1px solid ${x => x.theme.colors.form.formInputBorder};
  }
`;

export const BloodText = styled.span`
  font-family: ${x => x.theme.fonts.main};
  font-style: normal;
  font-weight: ${x => x.theme.fontWeights.bold};
  font-size: ${x => x.theme.fontSizes.s};
  line-height: ${x => x.theme.lineHeights.text};
  letter-spacing: ${x => x.theme.letterSpacing.l};
  color: ${x => x.theme.colors.form.formText};
  pointer-events: none;
`;
export const BloodTextRed = styled.span`
  font-family: ${x => x.theme.fonts.main};
  font-style: normal;
  font-weight: ${x => x.theme.fontWeights.bold};
  font-size: ${x => x.theme.fontSizes.s};
  line-height: ${x => x.theme.lineHeights.text};
  letter-spacing: ${x => x.theme.letterSpacing.l};
  color: red;
  pointer-events: none;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  margin-top: 10px;
  width: 100%;
  gap: 25px;
  label {
    margin-right: 0;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 512px;
`;

export const CalcFormWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
  margin-bottom: 60px;
  margin-top: 60px;

  @media ${device.mobileOnly} {
    flex-direction: column;
  }
`;

export const UserMainDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  @media ${device.fablet} {
    max-width: 240px;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media ${device.mobileOnly} {
    justify-content: center;
  }
  @media ${device.fabletOnly} {
    justify-content: center;
  }
  @media ${device.tabletOnly} {
    justify-content: flex-end;
  }
`;

export const ControlLabel = styled(FormControlLabel)`
  span {
    font-family: ${x => x.theme.fonts.main};
    font-style: normal;
    font-weight: ${x => x.theme.fontWeights.normal};
    font-size: ${x => x.theme.fontSizes.s};
    line-height: ${x => x.theme.lineHeights.form};
    letter-spacing: ${x => x.theme.letterSpacing.m};
    color: ${x => x.theme.colors.form.checkboxText};
  }
`;
