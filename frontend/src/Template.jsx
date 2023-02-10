import {useRef, useState} from 'react';
import Navbar from './components/Geral/Navbar';
import Sidebar from './components/Geral/Sidebar';
import BugTilt from "./components/Geral/BugTilt";


import { Box, Button, Drawer, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

function Template(props){
    const ref = useRef();
    const openSideBar = () => {
        ref.current.openSideBar();
    }
    return (            
            <Grid container>
                <Grid item xs={12}>
                    <Navbar openSideBar={openSideBar}/>
                    <Sidebar ref={ref}/>
                    {/* <BugTilt/> */}
                </Grid>
                <Grid item xs={12}>
                    {props.children}
                </Grid>   
            </Grid>
    )
}

export default Template;