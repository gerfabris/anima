import logoBlue from "../../assets/logo/logo-blue.png";
import logoCream from "../../assets/logo/logo-cream.png";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useNavbar } from "./useNavbar";
import { SocialMedia } from "../../Data/SocialMedia";
import { ItemSocialMedia } from "../ItemSocialMedia/ItemSocialMedia";
import "./Navbar.css";

const Navbar = () => {
  const { scroll, isOpen, closeMenu, openMenu, handleNavlinkClick } =
    useNavbar();

  return (
    <>
      <nav className={scroll > 0 ? "navscroll" : "nav"}>
        <NavLink to="/" className="navlink navlink-logo">
          <img
            src={scroll > 0 ? logoCream : logoBlue}
            alt="Logo Anima - Estudio Creativo"
            className="nav__image"
            onClick={closeMenu}
          />
        </NavLink>
        <div
          className={`
            ${isOpen ? "navmenu open" : "navmenu"}
            ${scroll > 0 ? "scroll" : ""}
            `}
        >
          <div className="container-menuNavlinks">
            <NavLink to="/" className="navlink" onClick={handleNavlinkClick}>
              Inicio
            </NavLink>
            <NavLink
              to="/products"
              className="navlink"
              onClick={handleNavlinkClick}
            >
              Servicios
            </NavLink>
            <NavLink
              to="/about"
              className="navlink"
              onClick={handleNavlinkClick}
            >
              Sobre Anima
            </NavLink>
            <NavLink
              to="/portfolio"
              className="navlink"
              onClick={handleNavlinkClick}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="navlink"
              onClick={handleNavlinkClick}
            >
              Charlemos
            </NavLink>
          </div>
          <div className="navbar-container-socialMedia ">
            <div className="socialMedia-items">
              {SocialMedia &&
                SocialMedia.map(({ id, href, alt, svg }) => (
                  <ItemSocialMedia key={id} href={href} alt={alt} svg={svg} />
                ))}
            </div>
          </div>
        </div>
        <div className="nav-toggle">
          <FaBars
            className={`
                ${isOpen ? "bars-none" : "bars"}
                ${scroll > 0 ? "" : "scroll"} 
                `}
            onClick={openMenu}
          />
          <CgClose
            className={`
              ${isOpen ? "closeMenu" : "closeMenu-none"}
              ${scroll > 0 ? "" : "scroll"} 
              `}
            onClick={closeMenu}
          />
        </div>
      </nav>
    </>
  );
};

export { Navbar };
