import "./Footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="section-container">
          <h4> SECCIONES </h4>
          <NavLink>
            <p> Inicio </p>
          </NavLink>
          <NavLink>
            <p> Acerca de </p>
          </NavLink>
          <NavLink>
            <p> Servicios </p>
          </NavLink>
          <NavLink>
            <p> Portfolio </p>
          </NavLink>
          <NavLink>
            <p> Contacto </p>
          </NavLink>
        </div>
        <div className="data-container">
          <h4> CONTACTO </h4>
          <p> Direccion </p>
          <p> Mail </p>
          <p> Telefono</p>
        </div>
        <div className="socialmedia-container">
          <h4> REDES </h4>
          <NavLink>
            <p> Instagram </p>
          </NavLink>
          <NavLink>
            <p> Facebook </p>
          </NavLink>
          <NavLink>
            <p> Whatsapp </p>
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
