export interface ICustomButton {}

import { LoadingButton } from '@mui/lab';
import { Button, ButtonProps } from '@mui/material';
import Slider, { SliderProps } from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';


export const ActionButton = styled(LoadingButton)<ButtonProps>(({ theme }) => ({
  color: '#fff',
  background: '#2F2FA2',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '6px',
  fontFamily: 'poppins',
  textTransform: 'none',
  ':hover': {background: '#2F2FA2'}
}));

