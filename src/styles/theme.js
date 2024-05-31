import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins'; // Import Poppins font from Fontsource

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          
          backgroundColor: '#faf3e1',
          fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
        },
      },
    },
  },
});

export default theme;
