import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoBlue from "../../assets/logo/logo2 animanuevo@4x-8-blue-.png";
import logoCream from "../../assets/logo/logo3 animanuevo@4x-8.png";
import "./Navbar.css";

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

  return (
    <nav id="navbar-scroll" className={scroll > 0 ? "scroll" : ""}>
      <div className="logo">
        <Link to="/" className="logo__container">
          <img
            src={scroll > 0 ? logoCream : logoBlue}
            alt="Logo Anima"
            className="logo__img"
          />
        </Link>
      </div>
      <ul className={scroll > 0 ? "menu" : "display-none"}>
        <li className="menu__li">
          <Link to="/">Inicio</Link>
        </li>
        <li className="menu__li">
          <Link to="/about">Acerca de</Link>
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
          <Link to="/about">Acerca de</Link>
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

export { NavbarScroll, NavbarNormal };
