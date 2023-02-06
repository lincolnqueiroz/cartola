import { useState } from 'react'
import { Box, Paper, Typography, Toolbar, AppBar, FormGroup, FormControl, TextField, Button } from "@mui/material";
import apiCalls from '../apiCalls/apiCalls';

function Homepage() {

  const [name,setName] = useState("");
  const [role,setRole] = useState("top");

  const handleSave = (event) =>{
    event.preventDefault()
    console.log("Clickou");
    apiCalls.fetchLogin("admin","admin");
  };

  return (
    <Button onClick={handleSave}>
      Login
    </Button>

  )
}

export default Homepage