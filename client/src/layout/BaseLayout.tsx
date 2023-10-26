import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

type Props = {};

const BaseLayout = (props: Props) => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default BaseLayout;
