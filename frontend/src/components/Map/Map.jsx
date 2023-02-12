import { useState } from 'react'
import { Box, Paper, Typography, Toolbar, AppBar, FormGroup, FormControl, TextField, Button, Grid, Divider, IconButton, Dialog } from "@mui/material";
import map from "../../assets/images/Summoners_Rift_Map.png"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayerList from '../Player/PlayerList';
import apiCalls from '../../apiCalls/apiCalls';
import {useSelector} from "react-redux";

function Map(props) {

    const [openSelectPlayer,setOpenSelectPlayer] = useState(false);

    const [list,setList] = useState([]);
    const token = useSelector((state)=>state.accessToken);

    const getPlayers = (role) => {
        apiCalls.fetchGetPlayers(token, role, setList, setOpenSelectPlayer);
    };

    return (
    <>
    <Grid container sx={{backgroundImage:`url(${map})`,
                        backgroundSize:"100%",
                        backgroundRepeat:"no-repeat",
                        height:"450px",
                        width:"660px"
    }}>
        <Grid item xs={12} sx={{justifyItems:"center", height:"25%"}}>
            <IconButton sx={{top:"60%", left:"20%"}} 
            onClick={()=>{getPlayers("top");}}>
                <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
            </IconButton>
        </Grid>

        <Grid item xs={12} sx={{justifyItems:"center", height:"25%"}}>
            <IconButton sx={{top:"40%", left:"25%"}}
            onClick={()=>{getPlayers("jg");}}>
                <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
            </IconButton>
        </Grid>

        <Grid item xs={12} sx={{justifyItems:"center", height:"25%"}}>
            <IconButton sx={{top:"0%", left:"43%"}}
            onClick={()=>{getPlayers("mid");}}>
                <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
            </IconButton>
        </Grid>

        <Grid item xs={12} sx={{justifyItems:"center", height:"25%"}}>

            <IconButton sx={{top:"20%", left:"75%"}}
            onClick={()=>{getPlayers("adc");}}>
                <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
            </IconButton>

            <IconButton sx={{top:"40%", left:"60%"}}
            onClick={()=>{getPlayers("sup");}}>
                <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
            </IconButton>

        </Grid>

    </Grid>
    <Dialog open={openSelectPlayer} onClose={()=>{setOpenSelectPlayer(false)}} fullWidth={true} maxWidth={"md"}>
        <PlayerList list={list}/>
    </Dialog>
    </>
  )
}

export default Map





