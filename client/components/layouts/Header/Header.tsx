import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { PrimaryButton } from '../../PrimaryButton/PrimaryButton';
import styles from './Header.module.css';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <AppBar position="static">
      <Box px={'100px'} bgcolor='#fff'>
        <Toolbar disableGutters sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Box>
            <Image src='/images/logo.png' width={200} height={50} />
          </Box>

          <PrimaryButton size='small'>Sign In</PrimaryButton>


          {/* AUTHORIZED ? true : false */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </Box> */}
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
