import { createTheme, darkScrollbar } from "@mui/material";

type ITHEME = {
  mode: "light" | "dark";
};

export const THEME = (props: ITHEME) =>
  createTheme({
    palette: {
      mode: props.mode,
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
