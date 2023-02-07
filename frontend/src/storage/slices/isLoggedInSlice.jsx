import { createSlice } from "@reduxjs/toolkit";

const isLoggedInSlice = createSlice({
    name:"isLoggedIn",
    initialState: sessionStorage.getItem("isLoggedIn"),
    reducers: {
        updateIsLoggedIn(state, action){
            sessionStorage.setItem("isLoggedIn",action.payload)
            return action.payload
        },
        removeIsLoggedIn(state, action){
            sessionStorage.removeItem("isLoggedIn")
            return null
        }
    }
})

export const { updateIsLoggedIn } = isLoggedInSlice.actions;
export const { removeIsLoggedIn } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;