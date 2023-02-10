import * as React from "react";
import { styled } from "@mui/material/styles";
//import Drawer from "@mui/material/Drawer";
import MuiDrawer from "@mui/material/Drawer";
import { Grid, Avatar, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import iconSample from "../../assets/images/icon_sample.webp";

import { removeAccessToken } from "../../storage/slices/accessTokenSlice";
import { updateIsLoggedIn } from "../../storage/slices/isLoggedInSlice";
import { removeIsLoggedIn } from "../../storage/slices/isLoggedInSlice";
import { removeUsername } from "../../storage/slices/usernameSlice";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

const handleLogout = (dispatch, navigate) => {
    dispatch(removeAccessToken());
    dispatch(updateIsLoggedIn(false));
    dispatch(removeUsername());
    dispatch(removeIsLoggedIn());
    navigate('/login');
}

export default function MiniDrawer() {
  const [openSide, setOpenSide] = React.useState(false);
  const username = useSelector((state)=>state.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDrawerOpen = (open) => {
    setOpenSide(!openSide);
  };

  return (
        <Drawer
            variant="permanent"
            // anchor={"left"}
            open={openSide}
            // onClose={() => {closeSideBar(sideBar)}}
        >
            {openSide ? 
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

                <IconButton onClick={() => {handleDrawerOpen(openSide)}} xs={{alignItems:"start"}}>
                    <MenuIcon />
                </IconButton>
                
                
            </DrawerHeader>
            <Divider/>
            <Grid sx={{width: 250, height:"100%"}} container flex={"1 1 100%"} direction={"column"}>
                <Grid item xs={8}>
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
                    </List>
                </Grid>
                <Grid item xs={4}>
                    <List>
                        <ListItem>
                            <ListItemButton onClick={() => {handleLogout(dispatch, navigate)}}>
                                <ListItemText primary={"Logout"}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
                
            </Grid>
            </>
            : 
            <DrawerHeader>
                <IconButton onClick={() => {handleDrawerOpen(openSide)}}>   
                    <MenuIcon />
                </IconButton>
                
                
                
            </DrawerHeader>
            }
        </Drawer>
  );
}