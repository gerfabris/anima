import { useEffect, useState } from "react";
import { usePathname } from "./usePathame";
import { NavbarNormal, NavbarScroll } from "../components/Navbar/Navbar";

export const useNavbar = () => {
    const location = usePathname()
    const [navbarComponent, setNavbarComponent] = useState(null)
    console.log(location);
    useEffect(() => {
        if (location === '/') {
            setNavbarComponent(<NavbarScroll />);
        } else {
            setNavbarComponent(<NavbarNormal />);
        }
    }, [location]);

    return navbarComponent
}