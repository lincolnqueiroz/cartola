import { createSlice } from "@reduxjs/toolkit";

const nickSlice = createSlice({
    name:"nick",
    initialState: sessionStorage.getItem("nick"),
    reducers: {
        updateNick(state, action){
            sessionStorage.setItem("nick",action.payload)
            return action.payload
        },
        removeNick(state, action){
            sessionStorage.removeItem("nick")
            return null
        }
    }
})

export const { updateNick } = nickSlice.actions;
export const { removeNick } = nickSlice.actions;

export default nickSlice.reducer;