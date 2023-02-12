import { useState } from 'react'
import { List, ListItem, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Divider, Button, Box } from "@mui/material";
import map from "../../assets/images/Summoners_Rift_Map.png"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import playerPic from "../../assets/images/player_sample.webp";
import teamLogo from "../../assets/images/team_sample.webp";

function PlayerList(props) {

  const [list,setList] = useState(props.list);

  return (
    <Grid container display={"flex"} direction={"column"} sx={{background:"grey"}} justifyContent={"center"} alignItems={"center"}>
        <Grid item>
            <Typography variant='h6'>Escale um jogador</Typography>
        </Grid>
        <List>
            {list.map((player, index) => (
            <Box key={player.name}>
            <ListItem >
                
                    
                    <Accordion sx={{width:750}}>
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
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
                                <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>{player.name}</Typography>
                            </Grid>
                            <Grid item xs={3} justifyContent={"center"} sx={{
                            backgroundImage:`url(${teamLogo})`, 
                            backgroundRepeat:"no-repeat",
                            backgroundSize:"150px 150px", 
                            backgroundPosition:"center",
                            height:"200px", 
                            width:"200px"}}>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography display={"flex"} sx={{background:"grey",justifyContent:"center"}} variant='h6'>${player.valor}</Typography>
                            </Grid>
                            
                                
                            
                        </Grid>

                    </AccordionSummary>
                    <AccordionDetails>
                        
                    </AccordionDetails>
                </Accordion>

                <Button variant='contained'>Escalar</Button>
     

            </ListItem>
            <Divider/>
            </Box>
            ))}
            
        </List>

    </Grid>
    
  )
}

export default PlayerList





