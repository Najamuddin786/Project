import Navbar from "./Navbar"
import { Route,Routes } from "react-router-dom"
import Home from "../Pages/Home"
import PageNot from "../Pages/PageNot"
import SingUp from "../Pages/SingUp"
import Product from "../Pages/Product"
import Detail from "../Pages/Detail"

export default function AllRoutes(){
    return (<>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/singup' element={<SingUp/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/detail/:userId' element={<Detail/>}/>
                <Route path="*" element={<PageNot/>}/>
            </Routes>
    </>)
}