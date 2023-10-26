import CloseIcon from "@mui/icons-material/Close";
import { IconButton, ThemeProvider } from "@mui/material";
import { SnackbarKey, SnackbarProvider, useSnackbar } from "notistack";
import { createContext, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { THEME } from "./const/theme";
import SnackbarContextProvider from "./context/SnackbarContextProvider";
import BaseLayout from "./layout/BaseLayout";
import CleanLayout from "./layout/CleanLayout";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => THEME({ mode }), [mode]);

  const SnackbarCloseButton = ({
    snackbarKey,
  }: {
    snackbarKey: SnackbarKey;
  }) => {
    const { closeSnackbar } = useSnackbar();

    return (
      <IconButton onClick={() => closeSnackbar(snackbarKey)}>
        <CloseIcon sx={{ color: "white" }} />
      </IconButton>
    );
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SnackbarContextProvider>
          <SnackbarProvider
            preventDuplicate
            maxSnack={3}
            action={(snackbarKey: SnackbarKey) => (
              <SnackbarCloseButton snackbarKey={snackbarKey} />
            )}
          >
            <BrowserRouter>
              <Routes>
                <Route element={<CleanLayout />} path="/">
                  <Route
                    element={<Login theme={theme} colorMode={colorMode} />}
                    path="/login"
                  />
                  <Route element={<Dashboard />} path="/" />
                </Route>

                <Route element={<BaseLayout />} path="/">
                  <Route element={<Dashboard />} path="/" />
                </Route>

                <Route element={<div>404 | Not Found</div>} path="*" />
              </Routes>
            </BrowserRouter>
          </SnackbarProvider>
        </SnackbarContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
