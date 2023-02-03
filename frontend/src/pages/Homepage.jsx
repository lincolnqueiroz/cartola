import { useState } from 'react'
import { Box, Paper, Typography, Toolbar, AppBar, FormGroup, FormControl, TextField, Button } from "@mui/material";
import apiCalls from '../apiCalls/apiCalls';

function Homepage() {

  const [name,setName] = useState("");
  const [role,setRole] = useState("top");

  const handleSave = (event) =>{
    event.preventDefault()
    let jogadorJSON = {
      "name": name,
      "role": role
    };
    apiCalls.fetchCreateJogador(jogadorJSON);
  };

  return (
    <Box component={"form"} onSubmit={handleSave}>
      <FormGroup>
        <FormControl>
          <TextField
            value={name}
            onChange={(event) => {setName(event.target.value)}}
          />
          <TextField
            value={role}
            onChange={(event) => {setRole(event.target.value)}}
          />
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </FormControl>
      </FormGroup>
    
    </Box>

  )
}

export default Homepage