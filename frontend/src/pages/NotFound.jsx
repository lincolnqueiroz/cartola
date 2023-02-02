import { useState } from 'react'
import { Box, Paper, Typography, Toolbar, AppBar, Grid } from "@mui/material";


function NotFound() {
  return (
    <Grid sx={{mt:12, maxWidth: 600}} alignItems={'center'} justifySelf={'center'}>
        <Paper>
            <Typography variant='h1' align='center'>Ops!</Typography>
            <Typography variant='h2'>Página não encontrada</Typography>
        </Paper>
        

    </Grid>

  )
}

export default NotFound