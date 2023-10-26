import { APP_TYPES } from "../actions/appAction";

const initialState = {
    loading: false,
    theme: "light",
    darkMode: false,
    page: {
        list: [],
        detail: [],
    },
};

const appReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case APP_TYPES.TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: action.payload,
            };
        default:
            return state;
    }
};

export default appReducer;
