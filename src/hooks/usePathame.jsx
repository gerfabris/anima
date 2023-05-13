import { useState , useEffect } from "react";

export const usePathname = () => {
    const [pathname, setPathname] = useState(window.location.pathname);
    console.log(pathname);
    useEffect(() => {
        const handlePathnameChange = () => {
            setPathname(window.location.pathname);
        };
        window.addEventListener('popstate', handlePathnameChange);
            return () => window.removeEventListener('popstate', handlePathnameChange);
    }, []);

    return pathname;
}