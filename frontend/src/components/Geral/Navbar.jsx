import { Box, Paper, Typography, Toolbar, AppBar, Grid, IconButton, Button, CssBaseline } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar(props){
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
                    <Typography>Bem vindo %NOME%</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;
