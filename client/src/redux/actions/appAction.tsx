import { AnyAction, Dispatch } from "redux";

export const APP_TYPES = {
    LOADING_APP: "LOADING_APP",
    GENERATE_PAGES: "GENERATE_PAGES",
    TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
};

export const toggleDarkMode = (mode: boolean) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch({
        type: APP_TYPES.TOGGLE_DARK_MODE,
        payload: mode, // true | false
    });
};
