import { NavLink } from 'react-router-dom'
import './ItemSidebar.css'

export const ItemSidebar = ({to, svg, text, open}) => {
    return(
        <NavLink to={to} className={open ? "linkOpen" : "normal"} >
            <div>
                {svg}
            </div>
            {open ? <p>{text}</p> : null}
        </NavLink>
    )
}