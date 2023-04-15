import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/conocenos'>Conocenos</Link>
                </li>
                <li>
                    <Link to='/contacto'>Contacto</Link>
                </li>
                <li>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link to='/quinta'>Random</Link>
                </li>
            </ul>
        </nav>
    )
}