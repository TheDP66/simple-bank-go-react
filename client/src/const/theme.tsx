import { createTheme, darkScrollbar } from "@mui/material";

type TTHEME = {
  isDarkMode: boolean;
};

export const THEME = (props: TTHEME) =>
  createTheme({
    palette: {
      mode: props.isDarkMode ? "dark" : "light",
      primary: {
        main: "#B2A4FF",
      },
      secondary: {
        main: "#FFB4B4",
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
