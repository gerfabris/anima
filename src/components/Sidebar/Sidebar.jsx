import { useEffect, useState } from "react";
import { Links } from "../../Data/Links";
import { ItemSidebar } from "../ItemSidebar/ItemSidebar";
import "./Sidebar.css";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [animation, setAnimation] = useState(false);
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

  useEffect(() => {
    setAnimation(true);
    const timeout = setTimeout(() => {
      setAnimation(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`${open ? "sidebarOpen" : "sidebar"} ${
        scroll > 0 ? "display-none" : "appear"
      } ${animation ? "animationSidebar" : "animationSidebar-out"}`}
    >
      <svg
        className="hamburger"
        onClick={() => setOpen(!open)}
        viewBox="0 0 18 12"
      >
        <path
          d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
          fill="#8F8F8F"
        />
      </svg>
      <div className="linksContainer">
        {Links &&
          Links.map(({ to, text, svg }) => (
            <ItemSidebar key={text} to={to} text={text} svg={svg} open={open} />
          ))}
      </div>
    </div>
  );
};
