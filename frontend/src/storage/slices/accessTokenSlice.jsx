import { createSlice } from "@reduxjs/toolkit";

const accessTokenSlice = createSlice({
    name:"accessToken",
    initialState: sessionStorage.getItem("accessToken"),
    reducers: {
        updateAccessToken(state, action){
            sessionStorage.setItem("accessToken",action.payload)
            return action.payload
        },
        removeAccessToken(state, action){
            sessionStorage.removeItem("accessToken")
            return null
        }
    }
})

export const { updateAccessToken } = accessTokenSlice.actions;
export const { removeAccessToken } = accessTokenSlice.actions;

export default accessTokenSlice.reducer;