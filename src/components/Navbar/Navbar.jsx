import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoBlue from "../../assets/logo/logo-blue.png";
import logoCream from "../../assets/logo/logo-cream.png";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useNavbar } from "./useNavbar";

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
          <NavLink to="/about" className="navlink" onClick={handleNavlinkClick}>
            Conoceme
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

export { Navbar };
