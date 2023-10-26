import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

type Props = {};

const CleanLayout = (props: Props) => {
  return (
    <Container maxWidth="xl">
      <Outlet />
    </Container>
  );
};

export default CleanLayout;
