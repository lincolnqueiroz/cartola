import { useState } from 'react'
import apiCalls from './apiCalls/apiCalls'
import Template from './Template'
import Homepage from './pages/Homepage'
import Links from './Links'

function App() {
  const [message, setMessage] = useState('')
  //apiCalls.fetchHelloWorld(setMessage);
  return (
    <Links />
  )
}

export default App
