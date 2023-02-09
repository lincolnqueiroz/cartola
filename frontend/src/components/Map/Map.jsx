import { useState } from 'react'
import { Box, Paper, Typography, Toolbar, AppBar, FormGroup, FormControl, TextField, Button, Grid, Divider, IconButton } from "@mui/material";
import map from "../../assets/images/Summoners_Rift_Map.png"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Map() {

  const [name,setName] = useState("");

  return (

    <Grid container sx={{backgroundImage:`url(${map})`,
                        backgroundSize:"100%",
                        backgroundRepeat:"no-repeat",
                        height:"450px",
    }}>
        <Grid item xs={12} sx={{justifyItems:"center", height:"25%"}}>
            <IconButton sx={{top:"60%", left:"20%"}}>
                <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
            </IconButton>
        </Grid>

        <Grid item xs={12} sx={{justifyItems:"center", height:"25%"}}>
            <IconButton sx={{top:"40%", left:"25%"}}>
                <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
            </IconButton>
        </Grid>

        <Grid item xs={12} sx={{justifyItems:"center", height:"25%"}}>
            <IconButton sx={{top:"0%", left:"43%"}}>
                <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
            </IconButton>
        </Grid>

        <Grid item xs={12} sx={{justifyItems:"center", height:"25%"}}>

            <IconButton sx={{top:"20%", left:"75%"}}>
                <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
            </IconButton>

            <IconButton sx={{top:"40%", left:"60%"}}>
                <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
            </IconButton>

        </Grid>

    </Grid>
  )
}

export default Map





