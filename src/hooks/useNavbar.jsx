import { useEffect, useState, useLayoutEffect } from "react";
import { usePathname } from "./usePathame";
import { NavbarNormal, NavbarScroll } from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

export const useNavbar = () => {
    const location = usePathname()
    const [navbarComponent, setNavbarComponent] = useState(<NavbarScroll />)
    
    useEffect(() => {
        if (location === '/') {
            setNavbarComponent(<NavbarScroll />);
        } else {
            setNavbarComponent(<NavbarNormal />);
        }
    }, [location]);

    return navbarComponent
}

export const useNavbarDos = () => {
    const location = usePathname();
    const [navbarComponent, setNavbarComponent] = useState(null);
    
    useLayoutEffect(() => {
        const setComponentBasedOnLocation = () => {
            if (location === '/') {
                setNavbarComponent(<NavbarScroll />);
            } else {
                setNavbarComponent(<NavbarNormal />);
            }
        };
        setComponentBasedOnLocation(); 
        
        const handlePathnameChange = () => {
            setComponentBasedOnLocation();
        };
        window.addEventListener('popstate', handlePathnameChange);
        return () => window.removeEventListener('popstate', handlePathnameChange);
    }, [location]);

    return navbarComponent;
};