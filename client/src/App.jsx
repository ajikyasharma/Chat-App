import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { ClassNames } from '@emotion/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App' >
     <Outlet />
    </div>
  )
}

export default App