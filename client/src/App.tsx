import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Button, Container, IconButton, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { THEME } from "./const/theme";
import { loginUser } from "./service/authAction";
import { createUser } from "./service/userAction";

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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Button onClick={loginUser} variant="contained">
            gRPC Login
          </Button>
          <Button onClick={createUser} color="secondary">
            gRPC CreateUser
          </Button>
          {theme.palette.mode} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
