import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate} from 'react-router-dom'


function ProtectRoutes() {
    const isLoggedIn = useSelector((state)=>state.isLoggedIn);
    const accessToken = useSelector((state)=>state.accessToken);

    if (!isLoggedIn){
    // if (true){
        return <Navigate to="/login" replace/>
    }
    else{
        return <Outlet/>
    }
    
}
export default ProtectRoutes
