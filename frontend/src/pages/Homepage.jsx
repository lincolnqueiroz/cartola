import { useState } from 'react'
import { Box, Paper, Typography, Toolbar, AppBar, FormGroup, FormControl, TextField, Button } from "@mui/material";
import apiCalls from '../apiCalls/apiCalls';
import Template from '../Template';

function Homepage() {

  const [name,setName] = useState("");
  const [role,setRole] = useState("top");

  const handleSave = (event) =>{
    event.preventDefault()
    console.log("Clickou");
    apiCalls.fetchLogin("admin","admin");
  };

  return (
    <Template>
      <Typography variant='h1'>Home</Typography>
    </Template>

  )
}

export default Homepage