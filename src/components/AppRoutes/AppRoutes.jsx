import { BrowserRouter } from "react-router-dom";
import { WhatsApp } from "../WhatsApp/WhatssApp";
import { Footer } from "../Footer/Footer";
import { PublicRoutes } from "./PublicRoutes";
import { NavbarNormal, NavbarScroll } from "../Navbar/Navbar";
import { usePathname } from "../../hooks/usePathame";

export const AppRoutes = () => {
  const pathname = usePathname()
  return (
    <BrowserRouter>
      {pathname === '/' ? <NavbarScroll /> : <NavbarNormal /> }
      <PublicRoutes />
      <WhatsApp />
      <Footer />
    </BrowserRouter>
  );
};
