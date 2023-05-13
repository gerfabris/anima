import { BrowserRouter } from "react-router-dom";
import { WhatsApp } from "../WhatsApp/WhatssApp";
import { Footer } from "../Footer/Footer";
import { PublicRoutes } from "./PublicRoutes";
import { useNavbar } from "../../hooks/useNavbar";

export const AppRoutes = () => {
  const NavbarComponent = useNavbar()
  console.log(NavbarComponent)
  return (
    <BrowserRouter>
      {NavbarComponent}
      <PublicRoutes />
      <WhatsApp />
      <Footer />
    </BrowserRouter>
  );
};
