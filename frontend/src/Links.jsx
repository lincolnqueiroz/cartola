import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/Loginpage'
import NotFound from './pages/NotFound'

function Links() {

  return (
    <Routes>
        <Route path='*' element={<NotFound/>} />
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/login' element={<LoginPage/>} />
    </Routes>
  )
}

export default Links
