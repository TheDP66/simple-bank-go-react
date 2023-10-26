import { EnqueueSnackbar } from "notistack";
import { AnyAction, Dispatch } from "redux";
import { grpcService } from "../../util/grpc";

type TLogin = {
    username: string;
    password: string;
}

export const login = (data: TLogin, enqueueSnackbar: EnqueueSnackbar) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const res = await grpcService().loginUser(data);
        console.log("res", res);
    } catch (error: any) {
        enqueueSnackbar(error.message, {
            variant: "error",
            anchorOrigin: { vertical: "top", horizontal: "right" },
        });
    }
}