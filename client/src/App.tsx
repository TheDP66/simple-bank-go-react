import CloseIcon from "@mui/icons-material/Close";
import { IconButton, ThemeProvider } from "@mui/material";
import { SnackbarKey, SnackbarProvider, useSnackbar } from "notistack";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { THEME } from "./const/theme";
import { useAppSelector } from "./hooks/useAppSelector";
import BaseLayout from "./layout/BaseLayout";
import CleanLayout from "./layout/CleanLayout";
import CommonLayout from "./layout/CommonLayout";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  const { app } = useAppSelector((state) => state);

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
    <ThemeProvider theme={THEME({ isDarkMode: app.darkMode })}>
      <SnackbarProvider
        preventDuplicate
        maxSnack={3}
        action={(snackbarKey: SnackbarKey) => (
          <SnackbarCloseButton snackbarKey={snackbarKey} />
        )}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<BaseLayout />}>
              <Route element={<CleanLayout />}>
                <Route element={<Login />} path="/login" />
                <Route element={<Signup />} path="/signup" />
              </Route>

              <Route element={<CommonLayout />}>
                <Route element={<Dashboard />} path="/" />
              </Route>

              <Route element={<div>404 | Not Found</div>} path="*" />
            </Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
