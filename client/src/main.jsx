import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Pages/Home.jsx'
import Chat from './Pages/Chat.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App />}>
        <Route path='/' element={<Home />}/>
        <Route path='/chat' element={<Chat />} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router}/>
  </ChakraProvider>,
)
