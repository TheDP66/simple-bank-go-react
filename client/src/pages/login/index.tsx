import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Button, Container, IconButton, Theme } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { loginUser } from "../../service/authAction";
import { createUser } from "../../service/userAction";

type Props = {
  theme: Theme;
  colorMode: { toggleColorMode: () => void };
};

const Login = (props: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    enqueueSnackbar("err", {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }, []);

  return (
    <Container
      maxWidth="sm"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Button
        onClick={() => loginUser({ enqueueSnackbar })}
        variant="contained"
      >
        gRPC Login
      </Button>
      <Button onClick={createUser} color="secondary">
        gRPC CreateUser
      </Button>
      {props.theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={props.colorMode.toggleColorMode}
        color="inherit"
      >
        {props.theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Container>
  );
};

export default Login;
