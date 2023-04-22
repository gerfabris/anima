import { BrowserRouter } from "react-router-dom";
import { WhatsApp } from "../WhatsApp/WhatssApp";
import { Footer } from "../Footer/Footer";
import { PublicRoutes } from "./PublicRoutes";
import { About } from "../About/About";
import { Sidebar } from "../Sidebar/Sidebar";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Sidebar/>
      <PublicRoutes />
      <WhatsApp />
      <About />
      <Footer />
    </BrowserRouter>
  );
};
