import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Button, Container, IconButton } from "@mui/material";
import { useSnackbar } from "notistack";
import { THEME } from "../../const/theme";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { toggleDarkMode } from "../../redux/actions/appAction";
import { loginUser } from "../../service/authAction";
import { createUser } from "../../service/userAction";
import LoginForm from "./components/LoginForm";

type Props = {
};

const Login = (props: Props) => {
  const { app } = useAppSelector(state => state);
  const dispatch = useAppDispatch()
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Container
      maxWidth="xs"
      sx={{
      }}
    >
      <div>LOGO</div>

      <div>Sign in to APP_NAME</div>

      <LoginForm />

      <Button
        onClick={() => loginUser({ enqueueSnackbar })}
        variant="contained"
      >
        gRPC Login
      </Button>
      <Button onClick={createUser} color="secondary">
        gRPC CreateUser
      </Button>
      {THEME({ isDarkMode: app.darkMode }).palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => dispatch(toggleDarkMode(!app.darkMode))}
        color="inherit"
      >
        {app.darkMode ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Container>
  );
};

export default Login;
