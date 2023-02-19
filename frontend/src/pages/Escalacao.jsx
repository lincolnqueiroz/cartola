import { useState } from 'react'
import { Box, Paper, Typography, List, Grid, Divider, IconButton, ListItem } from "@mui/material";
import apiCalls from '../apiCalls/apiCalls';
import Template from '../Template';
import Map from '../components/Map/Map';
import playerPic from "../assets/images/player_sample.webp";
import teamLogo from "../assets/images/team_sample.webp";
import { width } from '@mui/system';

function Escalacao() {

  const [name,setName] = useState("");
  const [escalacao,setEscalacao] = useState([null,null,null,null,null]);
  const role = {0:"Top",1:"Jungle",2:"Mid",3:"AD Carry",4:"Support"};
  return (

    <Template>
      <Grid container display={"flex"} direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={10} sx={{m:2}}>
          <Typography variant='h5'>SUA ESCALAÇÃO</Typography>
        </Grid>
        <Divider/>
        <Grid item xs={6} display={"flex"} justifyContent={"center"} alignContent={"center"} sx={{minWidth:"660px"}}>
          <Map setEscalacao={setEscalacao}/>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{background:"grey"}}>
            Time
          </Paper>
          <List>
            {escalacao.map((player,index) => {
              if (!player){
                return(
                  <>
                  <ListItem key={index}>
                  <Grid container direction={"row"} display={"flex"} justifyItems="center" alignItems={"center"}>
                    <Grid item>
                      <Typography>{role[index]}</Typography>
                    </Grid>
                    <Grid item xs={3} justifyContent={"center"} sx={{
                      // backgroundImage:`url(${playerPic})`, 
                      backgroundRepeat:"no-repeat",
                      backgroundSize:"200px 150px",
                      backgroundPosition:"center", 
                      height:"150px", 
                      width:"200px"}}>
                    </Grid>
                    <Grid item xs={4} sx={{justifyContent:"center"}}>
                      {/* <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>{player.name}</Typography> */}
                    </Grid>
                    <Grid item xs={3} justifyContent={"center"} sx={{
                      // backgroundImage:`url(${teamLogo})`, 
                      backgroundRepeat:"no-repeat",
                      backgroundSize:"200px 150px", 
                      backgroundPosition:"center",
                      height:"150px", 
                      width:"200px"}}>
                    </Grid>
                    <Grid item xs={2}>
                    {/* <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>${player.valor}</Typography> */}
                    </Grid>
                  </Grid>
                  

                </ListItem>
                <Divider/>
                </>
                  ); 
              }
              else
              return (
                <>
                <ListItem key={player.name}>
                  <Grid container direction={"row"} display={"flex"} justifyItems="center" alignItems={"center"}>
                  <Grid item xs={1}>
                      <Typography>{role[index]}</Typography>
                    </Grid>
                    <Grid item xs={3} justifyContent={"center"} sx={{
                      backgroundImage:`url(${playerPic})`, 
                      backgroundRepeat:"no-repeat",
                      backgroundSize:"200px 150px",
                      backgroundPosition:"center", 
                      height:"150px", 
                      width:"200px"}}>
                    </Grid>
                    <Grid item xs={4} sx={{justifyContent:"center"}}>
                      <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>{player.name}</Typography>
                    </Grid>
                    <Grid item xs={3} justifyContent={"center"} sx={{
                      backgroundImage:`url(${teamLogo})`, 
                      backgroundRepeat:"no-repeat",
                      backgroundSize:"200px 150px", 
                      backgroundPosition:"center",
                      height:"150px", 
                      width:"200px"}}>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>${player.valor}</Typography>
                    </Grid>
                  </Grid>
                 

                </ListItem>
                <Divider/>
                </>
            )})}
              
          </List>
        </Grid>
      </Grid>
      
    </Template>

  )
}

export default Escalacao