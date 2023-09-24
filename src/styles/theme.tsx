import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#07004D", // Set your primary color
    },
    secondary: {
      main: "#EB8A90", // Set your secondary color
    },
    background: {
      default: "#F3DFBF", // Set your background color
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
});

export default theme;
