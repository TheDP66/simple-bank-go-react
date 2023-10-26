import { EnqueueSnackbar } from "notistack";
import { serverService } from "../util/server";

export const loginUser = async ({
  enqueueSnackbar,
}: {
  enqueueSnackbar: EnqueueSnackbar;
}) => {
  try {
    const res = await serverService().loginUser({
      username: "user99",
      password: "secret",
    });

    console.log("res", res);
  } catch (err: any) {
    enqueueSnackbar(err.message, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }
};
