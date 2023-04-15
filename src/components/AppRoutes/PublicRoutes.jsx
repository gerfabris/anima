import { Routes, Route, Navigate } from 'react-router-dom'

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='*' element={ <Navigate to={"/"} /> } />
        </Routes>
    )
}