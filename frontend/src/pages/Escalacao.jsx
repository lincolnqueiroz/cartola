import { useState } from 'react'
import { Box, Paper, Typography, Toolbar, AppBar, FormGroup, FormControl, TextField, Button, Grid } from "@mui/material";
import apiCalls from '../apiCalls/apiCalls';
import Template from '../Template';

function Escalacao() {

  const [name,setName] = useState("");

  return (

    <Template>
        <Grid container>
            <Grid item>
                <Typography>SUA ESCALAÇÃO</Typography>
            </Grid>
        </Grid> 
    </Template>

  )
}

export default Escalacao