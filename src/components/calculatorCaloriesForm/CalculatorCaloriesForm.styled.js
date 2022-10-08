import * as React from 'react';
import styled from 'styled-components';
import Radio, { RadioProps } from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const BpIcon = styled('span')(({ theme }) => ({
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
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
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
export default function BpRadio(props: RadioProps) {
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
  font-family: ${p => p.theme.fonts.main};
  margin: 0;
`;
