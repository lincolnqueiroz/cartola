import { Box, Paper, Typography, Toolbar, AppBar, Grid, IconButton, Button, CssBaseline } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WalletIcon from "@mui/icons-material/Wallet";
import {useSelector} from "react-redux";

function Navbar(props){
    const username = useSelector((state)=>state.username);
    return(
        <Box sx={{ flexGrow: 1}}>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={()=>{props.openSideBar()}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PROJETINHO
                    </Typography>
                    <WalletIcon/>
                    <Typography> $100</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;
