import { Navigate, Route, Routes } from "react-router-dom"
import { About } from "../About/About"
import { Products } from "../Products/Products"
import { Contact } from "../Contact/Contact"
import { Portfolio } from "../Portfolio/Portfolio"
import { Home } from "../Home/Home"

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/products" element={ <Products/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/portfolio" element={ <Portfolio/> } />
            <Route path="/contact" element={ <Contact/> } />
            <Route path='*' element={ <Navigate to={"/"} /> } />
        </Routes>
    )
}