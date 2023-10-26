import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.ENVIRONMENT !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const ReduxProvider = ({ children }: { children: any }) => {
    return <Provider store={store}>{children}</Provider>;
};


export default ReduxProvider;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
