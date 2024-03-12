import { useState } from 'react'
import AllRoutes from './Components/AllRoutes'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllRoutes/>
    </>
  )
}

export default App
