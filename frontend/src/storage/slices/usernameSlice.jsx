import { createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
    name:"username",
    initialState: sessionStorage.getItem("username"),
    reducers: {
        updateUsername(state, action){
            sessionStorage.setItem("username",action.payload)
            return action.payload
        },
        removeUsername(state, action){
            sessionStorage.removeItem("username")
            return null
        }
    }
})

export const { updateUsername } = usernameSlice.actions;
export const { removeUsername } = usernameSlice.actions;

export default usernameSlice.reducer;