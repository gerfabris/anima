import { useEffect, useState } from "react";
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

export { scroll }