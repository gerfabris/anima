import { BrowserRouter } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar"
import { WhatsApp } from "../WhatsApp/WhatssApp"
import { Footer } from "../Footer/Footer"
import { PublicRoutes } from "./PublicRoutes"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <PublicRoutes/>
            <WhatsApp/>
            <Footer/>
        </BrowserRouter>
    )
}