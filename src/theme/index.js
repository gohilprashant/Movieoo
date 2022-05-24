import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'Roboto', 'Arial', 'sans-serif'].join(','),
    subtitle3: {
      fontSize: 12,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FA0303',
    },
    background: {
      default: '#17161B',
      paper: '#17161B',
    },
  },
});
