import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoBlue from "../../assets/logo/logo-blue.png";
import logoCream from "../../assets/logo/logo-cream.png";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useNavbar } from "./useNavbar";

const NavbarScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  /* --- open menu ---  */
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navbar-scroll" className={scroll > 0 ? "scroll" : "navbar"}>
      <div className="logo">
        <Link to="/" className="logo__container">
          <img
            src={scroll > 0 ? logoCream : logoBlue}
            alt="Logo Anima"
            className="logo__img"
          />
        </Link>
      </div>
      <div
        className="hamburger"
        id="toggler"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={scroll > 0 ? "menu" : "display-none"}>
        <ul className="menu__list">
          <li className="li">
            <Link to="/">Inicio</Link>
          </li>
          <li className="li">
            <Link to="/about">Conoceme</Link>
          </li>
          <li className="li">
            <Link to="/products">Servicios</Link>
          </li>
          <li className="li">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="li">
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const NavbarNormal = () => {
  return (
    <nav id="navbar-normal" className="scroll">
      <div className="logo">
        <Link to="/" className="logo__container">
          <img src={logoCream} alt="Logo Anima" className="logo__img" />
        </Link>
      </div>
      <ul className="menu">
        <li className="menu__li">
          <Link to="/">Inicio</Link>
        </li>
        <li className="menu__li">
          <Link to="/about">Conoceme</Link>
        </li>
        <li className="menu__li">
          <Link to="/products">Servicios</Link>
        </li>
        <li className="menu__li">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="menu__li">
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const { scroll, isOpen, closeMenu, toggleMenu, handleNavlinkClick } =
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
          className={`${scroll > 0 ? "navmenu" : "display-none"} ${
            isOpen ? "open" : ""
          }`}
        >
          <NavLink
            to="/"
            activeStyle
            className="navlink"
            onClick={handleNavlinkClick}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/products"
            activeStyle
            className="navlink"
            onClick={handleNavlinkClick}
          >
            Servicios
          </NavLink>
          <NavLink
            to="/about"
            activeStyle
            className="navlink"
            onClick={handleNavlinkClick}
          >
            Conoceme
          </NavLink>
          <NavLink
            to="/portfolio"
            activeStyle
            className="navlink"
            onClick={handleNavlinkClick}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle
            className="navlink"
            onClick={handleNavlinkClick}
          >
            Contactame
          </NavLink>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <FaBars className={scroll > 0 ? "bars" : "bars scroll"} />
        </div>
      </nav>
    </>
  );
};

export { NavbarScroll, NavbarNormal, Navbar };
