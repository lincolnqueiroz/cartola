import { useState } from 'react'
import { Paper, Typography, Toolbar, AppBar, FormGroup, FormControl, TextField, Button, Avatar, Grid } from "@mui/material";
import apiCalls from '../apiCalls/apiCalls';
import Template from '../Template';
import avatarSample from "../assets/images/icon_sample.webp";

function Conta() {

  return (
    <Template>
        <Grid spacing={10} container display={"flex"} alignItems={"center"} justifyContent={"space-arround"} mt={2} direction={"column"}>
            <Grid item>
                <Avatar src={avatarSample} sx={{width:200, height:200}}/>
            </Grid>
            <Grid item>
                <Grid container spacing={2} component={"form"} direction={'column'} justifyContent={"center"} alignItems={"center"}>
                        <Grid item>
                            <FormControl>
                                <TextField label={"Apelido"}/>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <TextField label={"Nome do Time"}/>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Button>Salvar</Button>
                        </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography>Histórico</Typography>
            </Grid>
            <Grid item>
                
            </Grid>
        </Grid>
        

    </Template>

  )
}

export default Conta