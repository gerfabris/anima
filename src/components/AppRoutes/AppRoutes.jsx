import { BrowserRouter } from "react-router-dom";
import { WhatsApp } from "../WhatsApp/WhatssApp";
import { Footer } from "../Footer/Footer";
import { PublicRoutes } from "./PublicRoutes";
import { Navbar } from "../Navbar/Navbar";

export const AppRoutes = () => {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <PublicRoutes />
      <WhatsApp />
      <Footer />
    </BrowserRouter>
  );
};