export interface ICustomButton {}

import { Button, ButtonProps } from '@mui/material';
import Slider, { SliderProps } from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';


export const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  background: '#fff',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '6px',
  fontFamily: 'poppins',
  textTransform: 'none'
}));

