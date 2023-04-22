import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './NavbarTres.css'

export const NavbarTres = () => {
    const [scroll, setScroll] = useState(false);
    const [mobile, setMobile] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const handleResize = () => {
      if (window.innerWidth < 920) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  
    const handleClick = () => {
      const menu = document.querySelector(".menu");
      menu.classList.toggle("active");
    };
  
    return (
      <nav className={`${scroll ? "scroll" : ""}`}>
        <div className="logo">
          <Link to="home" smooth={true} duration={500}>
            <h3>Logo</h3>
          </Link>
        </div>
        {!mobile && (
          <ul className="menu">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        )}
        {mobile && (
          <div className="hamburger" onClick={handleClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        )}
        {mobile && (
          <ul className="menu">
            <li>
              <Link to="home" smooth={true} duration={500} onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                onClick={handleClick}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                onClick={handleClick}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    );
}