import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import MuiTheme from './styles/MuiTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={MuiTheme}>
        <App />
      </ThemeProvider>
      
    </Router>
    
  </React.StrictMode>,
)
