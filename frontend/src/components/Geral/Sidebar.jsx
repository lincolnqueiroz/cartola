import { Box, Paper, Typography, Toolbar, AppBar, Grid, IconButton, Button, CssBaseline, Drawer, List, ListItem, ListItemText, ListItemButton, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { forwardRef, useImperativeHandle, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { removeAccessToken } from "../../storage/slices/accessTokenSlice";
import { removeIsLoggedIn, updateIsLoggedIn } from "../../storage/slices/isLoggedInSlice";
import {useDispatch} from "react-redux";

const Sidebar = forwardRef((props, ref) => {

    const [sideBar, setSideBar] = useState(false);

    const dispatch = useDispatch();

    useImperativeHandle(ref, () => ({
        openSideBar(){
            setSideBar(true);
        }
    }));

    const openSideBar = () => {
        setSideBar(true);
    };

    const closeSideBar = () => {
        setSideBar(false);
    };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'center',
    }));

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(removeAccessToken());
        dispatch(updateIsLoggedIn(false));
        dispatch(removeIsLoggedIn());
        navigate('/login');
    }

    return(
        <Drawer
            anchor={"left"}
            open={sideBar}
            onClose={closeSideBar}
        >
            <DrawerHeader>
                Foto
            </DrawerHeader>
            <Divider/>
            <Box sx={{width: 250}}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary={"Conta"}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={()=>{navigate("/escalacao")}}>
                            <ListItemText primary={"Escalação"}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary={"Ligas"}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={handleLogout}>
                            <ListItemText primary={"Logout"}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
})

export default Sidebar;
