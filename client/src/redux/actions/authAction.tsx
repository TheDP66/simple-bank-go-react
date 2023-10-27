import { EnqueueSnackbar } from "notistack";
import { AnyAction, Dispatch } from "redux";
import { grpcService } from "../../util/grpc";

type TLogin = {
  username: string;
  password: string;
};

export const loginUser =
  (data: TLogin, enqueueSnackbar: EnqueueSnackbar) =>
  async (dispatch: Dispatch<AnyAction>) => {
    try {
      const res = await grpcService().loginUser(data);
      console.log("res", res);

      return res.response;
    } catch (error: any) {
      enqueueSnackbar(error.message, {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    }
  };

type TSignup = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

export const createUser =
  (data: TSignup, enqueueSnackbar: EnqueueSnackbar) =>
  async (dispatch: Dispatch<AnyAction>) => {
    try {
      const res = await grpcService().createUser(data);
      console.log("res", res);

      return res.response;
    } catch (error: any) {
      enqueueSnackbar(error.message, {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    }
  };
