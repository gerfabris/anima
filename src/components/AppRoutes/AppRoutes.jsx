import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { Navbar } from "components/Navbar/Navbar";
import { WhatsApp } from "components/WhatsApp/Whatsapp";
import { Footer } from "components/Footer/Footer";

export const AppRoutes = () => {
    <BrowserRouter>
        <Navbar/>
        <PublicRoutes/>
        <WhatsApp/>
        <Footer/>
    </BrowserRouter>
}