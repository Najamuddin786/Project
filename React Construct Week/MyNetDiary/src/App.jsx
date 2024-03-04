import { useState } from 'react'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

import { Button, Center } from "@chakra-ui/react";
import Home from './Pages/Home';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
   <>
    <Navbar/>
    <Home/>
    <Footer/>
   </>
  )
}

export default App
