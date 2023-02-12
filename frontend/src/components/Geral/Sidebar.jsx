import { Box, Paper, Typography, Toolbar, AppBar, Grid, IconButton, Button, CssBaseline, Drawer, List, ListItem, ListItemText, ListItemButton, Divider, Avatar } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { forwardRef, useImperativeHandle, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { removeAccessToken } from "../../storage/slices/accessTokenSlice";
import { removeUsername } from "../../storage/slices/usernameSlice";

import { removeIsLoggedIn, updateIsLoggedIn } from "../../storage/slices/isLoggedInSlice";
import {useDispatch} from "react-redux";
import iconSample from "../../assets/images/icon_sample.webp";
import {useSelector} from "react-redux";

const Sidebar = forwardRef((props, ref) => {

    const [sideBar, setSideBar] = useState(false);

    const drawerWidth = 240;
    const dispatch = useDispatch();
    const username = useSelector((state)=>state.username)
    const theme = useTheme();

    useImperativeHandle(ref, () => ({
        openSideBar(){
            setSideBar(true);
        }
    }));

    const openSideBar = (sideBar) => {
        setSideBar(!sideBar);
    };

    const closeSideBar = (sideBar) => {
        setSideBar(!sideBar);
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(removeAccessToken());
        dispatch(updateIsLoggedIn(false));
        dispatch(removeUsername());
        dispatch(removeIsLoggedIn());
        navigate('/login');
    }

    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        }),
        overflowX: "hidden"
      });
      
      
      const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
      }));     


    return(


        <Drawer
            anchor={"left"}
            open={sideBar}
            onClose={() => {closeSideBar(sideBar)}}
        >
            {sideBar ? 
            <>
            <DrawerHeader>
        
                <Grid container spacing={3} direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{minHeight:"250px"}}>
                    <Grid item>
                        <Avatar alt="icon" src={iconSample} sx={{width:100, height:100}}/>
                    </Grid>
                    <Grid item>
                        <Typography>{username}</Typography>
                    </Grid>
                </Grid>
                
                
            </DrawerHeader>
            <Divider/>
            <Grid sx={{width: 250, height:"100%"}} container flex={"1 1 100%"} direction={"column"}>
                <Grid item xs={8}>
                    <List>
                        <ListItem>
                            <ListItemButton onClick={()=>{navigate("/profile")}}>
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
                    </List>
                </Grid>
                <Grid item xs={4}>
                    <List>
                        <ListItem>
                            <ListItemButton onClick={handleLogout}>
                                <ListItemText primary={"Logout"}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
                
            </Grid>
            </>
            : 
            <DrawerHeader>
                <IconButton onClick={() => {closeSideBar(sideBar)}}>   
                    <MenuIcon />
                </IconButton>
                
                
                
            </DrawerHeader>
            }
        </Drawer>
    )
})

export default Sidebar;
