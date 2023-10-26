import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertColor, IconButton, Slide, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

function SlideTransition(props: any) {
  return <Slide {...props} direction="down" />;
}

export const SnackbarContext = createContext({});

const SnackbarContextProvider = ({ children }: { children: any }) => {
  const [snackbarState, setSnackbarState] = useState<{
    autoHideDuration: number;
    isOpen: boolean;
    message: string;
    severity: AlertColor | undefined;
  }>({
    autoHideDuration: 10000,
    isOpen: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbarState((prevState) => {
      return {
        ...prevState,
        isOpen: false,
      };
    });
  };

  const handleOpenSnackbar = ({
    message,
    severity,
  }: {
    message: string;
    severity: AlertColor | undefined;
  }) => {
    setSnackbarState((prevState) => {
      return {
        ...prevState,
        isOpen: true,
        message: message,
        severity: severity,
      };
    });
  };

  return (
    <SnackbarContext.Provider
      value={{ handleCloseSnackbar, handleOpenSnackbar }}
    >
      {children}
      <Snackbar
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        autoHideDuration={snackbarState.autoHideDuration}
        open={snackbarState.isOpen}
        onClose={handleCloseSnackbar}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarState.severity}
          sx={{ width: "100%" }}
        >
          {snackbarState.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
