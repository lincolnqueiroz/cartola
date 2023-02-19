import { useEffect, useState } from 'react'
import { Box, Paper, Typography, Toolbar, AppBar, FormGroup, FormControl, TextField, Button, Grid, Divider, IconButton, Dialog, Avatar } from "@mui/material";
import map from "../../assets/images/Summoners_Rift_Map.png"
import playerPic from "../../assets/images/player_sample.webp";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayerList from '../Player/PlayerList';
import apiCalls from '../../apiCalls/apiCalls';
import {useSelector} from "react-redux";

function Map(props) {

    const [openSelectPlayer,setOpenSelectPlayer] = useState(false);
    const [top,setTop] = useState(null);
    const [jg,setJg] = useState(null);
    const [mid,setMid] = useState(null);
    const [adc,setAdc] = useState(null);
    const [sup,setSup] = useState(null);
    const [player,setPlayer] = useState(null);
    const [list,setList] = useState([]);
    const token = useSelector((state)=>state.accessToken);

    const getPlayers = (role) => {
        apiCalls.fetchGetPlayers(token, role, setList, setOpenSelectPlayer);
    };

    const setPlayerRole = (playerInfo) => {
        switch (playerInfo["role"]){
            case "Top":
                setTop(playerInfo);
                break;
            case "Jungle":
                setJg(playerInfo);
                break;
            case "Mid":
                setMid(playerInfo);
                break;
            case "Bot":
                setAdc(playerInfo);
                break;
            case "Support":
                setSup(playerInfo);
                break;
        }
    };

    useEffect(()=>{props.setEscalacao([top,jg,mid,adc,sup]); console.log([top,jg,mid,adc,sup])},[top,jg,mid,adc,sup]);

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
                {top ? 
                    <Avatar src={playerPic} sx={{position:"absolute", height:"80px",width:"80px"}}></Avatar>
                :
                    <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>   
                }
            </IconButton>
        </Grid>

        <Grid item xs={12} sx={{justifyItems:"center", height:"25%"}}>
            <IconButton sx={{top:"40%", left:"25%"}}
            onClick={()=>{getPlayers("jg");}}>
                {jg ? 
                    <Avatar src={playerPic} sx={{position:"absolute", height:"80px",width:"80px"}}></Avatar>
                :
                    <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
                }
            </IconButton>
        </Grid>

        <Grid item xs={12} sx={{justifyItems:"center", height:"25%"}}>
            <IconButton sx={{top:"0%", left:"43%"}}
            onClick={()=>{getPlayers("mid");}}>
                {mid ? 
                    <Avatar src={playerPic} sx={{position:"absolute", height:"80px",width:"80px"}}></Avatar>
                :
                    <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
                }
            </IconButton>
        </Grid>

        <Grid item xs={12} sx={{justifyItems:"center", height:"25%"}}>

            <IconButton sx={{top:"20%", left:"75%"}}
            onClick={()=>{getPlayers("adc");}}>
                {adc ? 
                    <Avatar src={playerPic} sx={{position:"absolute", height:"80px",width:"80px"}}></Avatar>
                :
                    <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
                }
            </IconButton>

            <IconButton sx={{top:"40%", left:"60%"}}
            onClick={()=>{getPlayers("sup");}}>
                {sup ? 
                    <Avatar src={playerPic} sx={{position:"absolute", height:"80px",width:"80px"}}></Avatar>
                :
                    <AddCircleOutlineIcon sx={{fontSize:40, color:"primary"}}/>
                }
            </IconButton>

        </Grid>

    </Grid>
    <Dialog open={openSelectPlayer} onClose={()=>{setOpenSelectPlayer(false)}} fullWidth={true} maxWidth={"md"}>
        <PlayerList list={list} setPlayer={setPlayerRole} setClose={setOpenSelectPlayer}/>
    </Dialog>
    </>
  )
}

export default Map





