import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import MuiTheme from './styles/MuiTheme'
import store from './storage/storeConfig'

import {Provider} from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={MuiTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
      
    </Router>
    
  </React.StrictMode>,
)
