import { configureStore } from "@reduxjs/toolkit";

import isLoggedInReducer from "./slices/isLoggedInSlice";
import accessTokenReducer from "./slices/accessTokenSlice";
import usernameReducer from "./slices/usernameSlice";
import walletReducer from "./slices/walletSlice";
import nickReducer from "./slices/nickSlice";

const store = configureStore({
    reducer: {
        accessToken: accessTokenReducer,
        isLoggedIn: isLoggedInReducer,
        wallet: walletReducer,
        username: usernameReducer,
        nick: nickReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;