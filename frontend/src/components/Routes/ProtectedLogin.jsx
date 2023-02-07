import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate} from 'react-router-dom'


function ProtectLogin() {
    const isLoggedIn = useSelector((state)=>state.isLoggedIn);
    const accessToken = useSelector((state)=>state.accessToken);

    if (isLoggedIn){
    // if (false){
        return <Navigate to="/" replace/>
    }
    else{
        return <Outlet/>
    }
    
}
export default ProtectLogin
