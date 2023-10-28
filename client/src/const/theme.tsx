import { createTheme, darkScrollbar } from "@mui/material";

type TTHEME = {
  isDarkMode: boolean;
};

export const THEME = (props: TTHEME) =>
  createTheme({
    palette: {
      mode: props.isDarkMode ? "dark" : "light",
      primary: {
        main: "#238636",
      },
      secondary: {
        main: "#EA9010",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (themeParam) => ({
          body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
        }),
      },
    },
  });
