import { BrowserRouter } from "react-router-dom";
import { WhatsApp } from "../WhatsApp/WhatssApp";
import { Footer } from "../Footer/Footer";
import { PublicRoutes } from "./PublicRoutes";
import { useNavbar, useNavbarDos } from "../../hooks/useNavbar";

export const AppRoutes = () => {
  let NavbarComponent = useNavbar()
  
  return (
    <BrowserRouter>
      {NavbarComponent}
      <PublicRoutes />
      <WhatsApp />
      <Footer />
    </BrowserRouter>
  );
};
