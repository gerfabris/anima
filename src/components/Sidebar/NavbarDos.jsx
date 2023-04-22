import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './NavbarDos.css';

export const NavbarDos = () => {
    const [scroll, setScroll] = useState(0);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);
  
    const handleScroll = () => {
      setScroll(window.scrollY);
    }
  
    return (
      <nav className={scroll > 0 ? 'scroll' : ''}>
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    );
}