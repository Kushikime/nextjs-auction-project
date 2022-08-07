import { createTheme } from "@mui/material";

//@ts-ignore
// import Poppins from '../public/fonts/poppins/poppins600.woff2';
// //@ts-ignore
// import PoppinsSemiBold from '/fonts/poppins/poppins.woff2';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2F2FA2'
    },
    secondary: {
      main: '#F47D0F'
    },
    success: {
      main: '#7AE58C'
    },
    text: {
      primary: '#1d1f6b',
      secondary: '#000000'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('poppins'), url('fonts/poppins/poppins.woff2') format('woff2');
        }

        @font-face {
          font-family: 'poppinsSemiBold';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('poppinsSemiBold'), url('fonts/poppins/poppins600.woff2') format('woff2');
        }

      `,
    },
  }
});

export default theme;