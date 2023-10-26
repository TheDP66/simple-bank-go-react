import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import MainAppBar from "./components/MainAppBar";

type Props = {};

const CommonLayout = (props: Props) => {
  return (
    <>
      <MainAppBar />

      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default CommonLayout;
