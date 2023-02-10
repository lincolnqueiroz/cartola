import { configureStore } from "@reduxjs/toolkit";

import isLoggedInReducer from "./slices/isLoggedInSlice";
import accessTokenReducer from "./slices/accessTokenSlice";
import usernameReducer from "./slices/usernameSlice";

const store = configureStore({
    reducer: {
        accessToken: accessTokenReducer,
        isLoggedIn: isLoggedInReducer,
        username: usernameReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;