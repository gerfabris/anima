import { BrowserRouter } from "react-router-dom";
import { WhatsApp } from "../WhatsApp/WhatssApp";
import { Footer } from "../Footer/Footer";
import { PublicRoutes } from "./PublicRoutes";
import { Sidebar } from "../Sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
{/*       <Sidebar />
 */}      <PublicRoutes />
      <WhatsApp />
      <Footer />
    </BrowserRouter>
  );
};
