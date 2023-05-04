import { NavLink } from "react-router-dom";
import LogoFooter from "../../assets/Footer/Frame 5.png";
import LetrasFooter from "../../assets/Footer/Frame_3-removebg.png";
import "./Footer.css";
import { SocialMedia } from "../../Data/SocialMedia";
import { ItemSocialMedia } from "../ItemSocialMedia/ItemSocialMedia";

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="logo-div">
          <img
            className="logo__footer__spin"
            src={LogoFooter}
            alt="logo footer"
          />
          <img className="logo__footer" src={LetrasFooter} alt="trabajamos" />
        </div>
      </div>
      <div className="footer-container">
        <div className="footer__container__div"></div>
        <div className="footer__container__div">
          <NavLink>
            <p> Inicio </p>
          </NavLink>
          <NavLink>
            <p> Acerca de </p>
          </NavLink>
          <NavLink>
            <p> Servicios </p>
          </NavLink>
          <NavLink>
            <p> Portfolio </p>
          </NavLink>
          <NavLink>
            <p> Contacto </p>
          </NavLink>
        </div>
        <div className="footer__container__div">
          <p> Colonia, Uruguay </p>
          <p> animadgs@gmail.com </p>
          <p> +598 98 510 246 </p>
        </div>
        <div className="socialMedia__container">
          {SocialMedia &&
            SocialMedia.map(({ id, href, alt, svg }) => (
              <ItemSocialMedia key={id} href={href} alt={alt} svg={svg} />
            ))}
        </div>
      </div>
    </footer>
  );
};
