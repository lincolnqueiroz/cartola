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
  return (

    <Template>
      <Grid container display={"flex"} direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={10} sx={{m:2}}>
          <Typography variant='h5'>SUA ESCALAÇÃO</Typography>
        </Grid>
        <Divider/>
        <Grid item xs={6} display={"flex"} justifyContent={"center"} alignContent={"center"} sx={{minWidth:"660px"}}>
          <Map/>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{background:"grey"}}>
            Time
          </Paper>
          <List>
            {escalacao.map((player) => {
              {player ? 
                <Box key={player.name}>
                  <ListItem>
                    <Grid container direction={"row"} display={"flex"} justifyItems="center" alignItems={"center"}>
                      <Grid item xs={3} justifyContent={"center"} sx={{
                        backgroundImage:`url(${playerPic})`, 
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"200px 150px",
                        backgroundPosition:"center", 
                        height:"150px", 
                        width:"200px"}}>
                      </Grid>
                      <Grid item xs={4} sx={{justifyContent:"center"}}>
                        <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>Grevthar</Typography>
                      </Grid>
                      <Grid item xs={3} justifyContent={"center"} sx={{
                        backgroundImage:`url(${teamLogo})`, 
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"200px 150px", 
                        backgroundPosition:"center",
                        height:"150px", 
                        width:"200px"}}>
                      </Grid>
                      <Grid item xs={2}>
                      <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>$19</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider/>
                </Box>
                :
                <Box key={player}></Box>
              }
              
            })}
              
              <ListItem>
                <Grid container direction={"row"} display={"flex"} justifyItems="center" alignItems={"center"}>
                  <Grid item xs={3} justifyContent={"center"} sx={{
                    backgroundImage:`url(${playerPic})`, 
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"200px 150px",
                    backgroundPosition:"center", 
                    height:"150px", 
                    width:"200px"}}>
                  </Grid>
                  <Grid item xs={4} sx={{justifyContent:"center"}}>
                    <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>Grevthar</Typography>
                  </Grid>
                  <Grid item xs={3} justifyContent={"center"} sx={{
                    backgroundImage:`url(${teamLogo})`, 
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"200px 150px", 
                    backgroundPosition:"center",
                    height:"150px", 
                    width:"200px"}}>
                  </Grid>
                  <Grid item xs={2}>
                  <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>$19</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider/>
              <ListItem>
                <Grid container direction={"row"} display={"flex"} justifyItems="center" alignItems={"center"}>
                  <Grid item xs={3} justifyContent={"center"} sx={{
                    backgroundImage:`url(${playerPic})`, 
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"200px 150px",
                    backgroundPosition:"center", 
                    height:"150px", 
                    width:"200px"}}>
                  </Grid>
                  <Grid item xs={4} sx={{justifyContent:"center"}}>
                    <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>Grevthar</Typography>
                  </Grid>
                  <Grid item xs={3} justifyContent={"center"} sx={{
                    backgroundImage:`url(${teamLogo})`, 
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"200px 150px", 
                    backgroundPosition:"center",
                    height:"150px", 
                    width:"200px"}}>
                  </Grid>
                  <Grid item xs={2}>
                  <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>$19</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider/>
              <ListItem>
                <Grid container direction={"row"} display={"flex"} justifyItems="center" alignItems={"center"}>
                  <Grid item xs={3} justifyContent={"center"} sx={{
                    backgroundImage:`url(${playerPic})`, 
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"200px 150px",
                    backgroundPosition:"center", 
                    height:"150px", 
                    width:"200px"}}>
                  </Grid>
                  <Grid item xs={4} sx={{justifyContent:"center"}}>
                    <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>Grevthar</Typography>
                  </Grid>
                  <Grid item xs={3} justifyContent={"center"} sx={{
                    backgroundImage:`url(${teamLogo})`, 
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"200px 150px", 
                    backgroundPosition:"center",
                    height:"150px", 
                    width:"200px"}}>
                  </Grid>
                  <Grid item xs={2}>
                  <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>$19</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider/>
              <ListItem>
                <Grid container direction={"row"} display={"flex"} justifyItems="center" alignItems={"center"}>
                  <Grid item xs={3} justifyContent={"center"} sx={{
                    backgroundImage:`url(${playerPic})`, 
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"200px 150px",
                    backgroundPosition:"center", 
                    height:"150px", 
                    width:"200px"}}>
                  </Grid>
                  <Grid item xs={4} sx={{justifyContent:"center"}}>
                    <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>Grevthar</Typography>
                  </Grid>
                  <Grid item xs={3} justifyContent={"center"} sx={{
                    backgroundImage:`url(${teamLogo})`, 
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"200px 150px", 
                    backgroundPosition:"center",
                    height:"150px", 
                    width:"200px"}}>
                  </Grid>
                  <Grid item xs={2}>
                  <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>$19</Typography>
                  </Grid>
                </Grid>
              </ListItem>
          </List>
        </Grid>
      </Grid>
      
    </Template>

  )
}

export default Escalacao