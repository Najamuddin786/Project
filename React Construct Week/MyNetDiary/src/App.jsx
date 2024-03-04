import { useState } from 'react'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login';
import {Routes,Route} from 'react-router-dom'

import { Button, Center } from "@chakra-ui/react";
import Home from './Pages/Home';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
   </Routes>
    
   
    <Footer/>
   </>
  )
}

export default App
