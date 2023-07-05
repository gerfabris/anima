import { useState, useEffect } from "react";

export const useNavbar = () => {
    const [scroll, setScroll] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    // Función para abrir el menú al tocar el toggle
    const openMenu = () => {
        setIsOpen(true);
    };
    // Función para cerrar el menú
    const closeMenu = () => {
        setIsOpen(false);
    };
    // Función para cerrar el menú al tocar los navlink
    const handleNavlinkClick = () => {
        closeMenu();
    };

    useEffect(() => {
        // Manejar el cambio de navbar con scroll
        const handleScroll = () => {
        setScroll(window.scrollY);
        };
        
        // Manejar el clic fuera del toggle
        const handleClickOutside = (event) => {
        if (event.target.closest(".nav-toggle") === null) {
            closeMenu();
        }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return { scroll, isOpen, closeMenu, openMenu, handleNavlinkClick };
};