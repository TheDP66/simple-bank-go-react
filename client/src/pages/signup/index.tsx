import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Container, IconButton, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { toggleDarkMode } from "../../redux/actions/appAction";
import SignUpForm from "./components/SignupForm";

type Props = {};

const Signup = (props: Props) => {
  const { app } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <div style={{ marginTop: "32px" }}>LOGO</div>
      <Typography
        variant="h6"
        component="h6"
        marginTop="21px"
        fontWeight="normal"
      >
        Sign up to APP_NAME
      </Typography>
      <SignUpForm />
      <Paper
        sx={{
          padding: "16px",
          maxWidth: "309px",
          marginTop: "18px",
          border: `1px solid ${
            app.darkMode ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .2)"
          }`,
          fontSize: "13px",
          bgcolor: "transparent",
          textAlign: "center",
          width: "100%",
        }}
        elevation={0}
      >
        Already have an account?{" "}
        <Link
          style={{
            color: "rgb(47, 129, 247)",
            cursor: "pointer",
            textDecoration: "none",
          }}
          to={"/login"}
        >
          Sign in
        </Link>
      </Paper>

      <IconButton
        sx={{ my: 9, opacity: 0.6 }}
        onClick={() => dispatch(toggleDarkMode(!app.darkMode))}
        color="inherit"
        size="small"
      >
        {app.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Container>
  );
};

export default Signup;
