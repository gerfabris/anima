import { Contact } from 'components/Contact/Contact'
import { Home } from 'components/Home/Home'
import { Products } from 'components/Products/Products'
import { Routes, Route, Navigate } from 'react-router-dom'

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/products" element={Products} />
            <Route path="/about" element={ <About/> } />
            <Route path="/portfolio" element={ <Portfolio/> } />
            <Route path="/contact" element={ <Contact/> } />
            <Route path='*' element={ <Navigate to={"/"} /> } />
        </Routes>
    )
}