import { useState } from 'react'
import { Box, Paper, Typography, Toolbar, AppBar, FormGroup, FormControl, TextField, Button, Grid, Divider, IconButton } from "@mui/material";
import apiCalls from '../apiCalls/apiCalls';
import Template from '../Template';
import map from "../assets/images/Summoners_Rift_Map.png"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Map from '../components/Map/Map';

function Escalacao() {

  const [name,setName] = useState("");

  return (

    <Template>
      <Grid container sx={{m:5}}>
        <Grid item xs={12}>
          <Typography variant='h5'>SUA ESCALAÇÃO</Typography>
        </Grid>
        <Divider/>
        <Grid item xs={6} sx={{minWidth:"600px"}}>
          <Map/>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{background:"grey"}}>
            Time
          </Paper>
        </Grid>
      </Grid>
      
    </Template>

  )
}

export default Escalacao