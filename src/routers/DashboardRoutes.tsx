import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'

interface Props {

}

export const DashboardRoutes = (props: Props) => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="register" element={<Register/>}/>
                <Route path="login" element={<Login/>}/>
                <Route index element={<Home/>}/>
            </Routes>
            <Footer/>
        </>
    )
}
