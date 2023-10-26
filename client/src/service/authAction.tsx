import { EnqueueSnackbar } from "notistack";
import { grpcService } from "../util/grpc";

export const loginUser = async ({
  enqueueSnackbar,
}: {
  enqueueSnackbar: EnqueueSnackbar;
}) => {
  try {
    const res = await grpcService().loginUser({
      username: "user99",
      password: "secret",
    });

    console.log("res", res);
  } catch (error: any) {
    enqueueSnackbar(error.message, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }
};
