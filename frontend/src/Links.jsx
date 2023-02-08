import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import ProtectLogin from './components/Routes/ProtectedLogin'
import ProtectRoutes from './components/Routes/ProtectRoutes'
import Escalacao from './pages/Escalacao'
import Homepage from './pages/Homepage'
import LoginPage from './pages/Loginpage'
import NotFound from './pages/NotFound'
function Links() {

  return (
    <Routes>
        <Route element={<ProtectLogin/>}>
          <Route exact path='/login' element={<LoginPage/>} />
        </Route>
        <Route element={<ProtectRoutes/>}>
          <Route path='*' element={<NotFound/>} />
          <Route exact path='/escalacao' element={<Escalacao/>} />
          <Route exact path='/' element={<Homepage/>} />
        </Route>
        
    </Routes>
  )
}

export default Links
