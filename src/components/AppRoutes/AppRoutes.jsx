import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { WhatsApp } from "../WhatsApp/WhatssApp";
import { Footer } from "../Footer/Footer";
import { PublicRoutes } from "./PublicRoutes";
import { About } from "../About/About";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <PublicRoutes />
      <WhatsApp />
      <About />
      <Footer />
    </BrowserRouter>
  );
};
