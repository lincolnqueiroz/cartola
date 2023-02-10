import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
    name:"wallet",
    initialState: sessionStorage.getItem("wallet"),
    reducers: {
        updateWallet(state, action){
            sessionStorage.setItem("wallet",action.payload)
            return action.payload
        },
        removeWallet(state, action){
            sessionStorage.removeItem("wallet")
            return null
        }
    }
})

export const { updateWallet } = walletSlice.actions;
export const { removeWallet } = walletSlice.actions;

export default walletSlice.reducer;