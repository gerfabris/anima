import LogoFooter from "../../assets/Footer/Frame 5.png";
import LetrasFooter from "../../assets/Footer/Frame_3-removebg.png";
import { Link, NavLink } from "react-router-dom";
import { SocialMedia } from "../../Data/SocialMedia";
import { ItemSocialMedia } from "../ItemSocialMedia/ItemSocialMedia";
import { Copyright } from "../Copyright/Copyright";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-bigContainer">
        <div className="footer-container">
          <Link to={"/contact"} className="logo-div">
            <img
              className="logo__footer__spin"
              src={LogoFooter}
              alt="logo footer"
            />
            <img className="logo__footer" src={LetrasFooter} alt="trabajamos" />
          </Link>
        </div>
        <div className="footer-container">
          <div className="footer__container__div footer__container__div-imagine"></div>
          <div className="footer__container__div footer__container__div-pages ">
            <NavLink to={"/"}>
              <p className="footer__container__div__section-p"> Inicio </p>
            </NavLink>
            <NavLink to={"/about"}>
              <p className="footer__container__div__section-p"> Conoceme </p>
            </NavLink>
            <NavLink to={"/products"}>
              <p className="footer__container__div__section-p"> Servicios </p>
            </NavLink>
            <NavLink to={"/portfolio"}>
              <p className="footer__container__div__section-p"> Portfolio </p>
            </NavLink>
            <NavLink to={"/contact"}>
              <p className="footer__container__div__section-p"> Contacto </p>
            </NavLink>
          </div>
          <div className="footer__container__div footer__container__div-imagine"></div>
          <div className="socialMedia__container ">
            <div className="socialMedia__row">
              {SocialMedia &&
                SocialMedia.map(({ id, href, alt, svg }) => (
                  <ItemSocialMedia key={id} href={href} alt={alt} svg={svg} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bigContainer-copyright">
        <div className="footer__copyright">
          <hr className="footer__copyright-hr" />
          <h5 className="footer__copyright-h5">
            Anima Estudio Creativo ® <span>2023</span>
          </h5>
          <h6 className="footer__copyright-h6">
            <span className="footer__copyright-span">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM13.2 5.3C13.6 5.3 13.9 5.6 14.3 5.6C14 6 12.7 6 12.3 5.5C12.6 5.4 12.8 5.3 13.2 5.3ZM1 8C1 7.6 1 7.2 1.1 6.7C1.2 6.7 1.3 6.8 1.4 6.8C1.4 6.8 1.5 6.9 1.5 7C1.5 7.3 1.8 7.5 2 7.5C2.8 7.6 3.1 8.3 3.8 8.5C4 8.6 3.9 8.8 3.8 9C3.2 9.8 3.7 10.4 4.2 10.9C4.7 11.3 4.7 11.7 4.8 12.3C4.8 13 4.9 13.8 5.2 14.5C2.7 13.3 1 10.9 1 8ZM8 15C7.3 15 6.5 14.9 5.9 14.7C5.8 14.5 5.8 14.3 5.9 14.1C6.3 13.3 6.7 12.6 7.2 11.9C7.4 11.7 7.6 11.5 7.6 11.2C7.6 11 7.7 10.7 7.8 10.5C8.1 10 8 9.7 7.6 9.6C6.8 9.4 6.4 8.7 5.8 8.4C5.2 8.1 4.6 7.9 4.1 8.2C3.9 8.3 3.6 8.4 3.6 8.1C3.6 7.7 3.1 7.4 3.2 7C3.1 7 3 7 2.9 7.1C2.8 7.2 2.7 7.3 2.5 7.2C2.3 7 2.4 6.8 2.4 6.6C2.5 6.4 2.6 6.3 2.8 6.2C3.2 6.1 3.6 6.1 3.8 6.6C4.1 5.7 4.7 5.2 5.3 4.8C5.3 4.8 6.1 4.1 6.2 4.1C6.3 4.1 6.4 4.3 6.6 4.4C6.8 4.4 6.9 4.4 6.9 4.2C7 3.7 6.7 3.1 6.3 3C6.3 2.9 6.4 2.9 6.4 2.9C6.7 2.8 7.1 2.6 7 2.3C7 1.9 6.6 1.7 6.2 1.7C6 1.7 5.8 1.7 5.6 1.8C5.2 2 4.7 2.2 4.1 2.2C5.2 1.4 6.6 1 8 1C8.3 1 8.5 1 8.8 1C8.2 1.1 7.6 1.3 7.2 1.5C7.8 1.6 7.9 1.9 7.7 2.4C7.6 2.6 7.7 2.8 7.9 2.9C8.1 3 8.3 3 8.4 2.8C8.6 2.5 9 2.4 9.3 2.3C9.7 2.2 10 2 10.3 1.6C10.3 1.5 10.4 1.5 10.5 1.4C11.1 1.6 11.7 2 12.3 2.4C12.2 2.4 12.2 2.5 12.1 2.5C11.9 2.7 11.6 2.8 11.9 3.2C12 3.4 11.9 3.5 11.8 3.6C11.6 3.7 11.5 3.6 11.4 3.5C11.3 3.4 11.3 3.2 11 3.2C10.9 3.4 10.6 3.5 10.6 3.8C11.1 3.8 11 4.2 11.1 4.5C10.5 4.6 10.3 4.9 10.6 5.4C10.7 5.6 10.5 5.7 10.4 5.8C10 6.4 9.6 6.8 9.6 7.5C9.6 8.2 10.1 8.9 10.9 8.8C11.8 8.7 11.8 8.7 12.1 9.5C12.1 9.6 12.2 9.7 12.2 9.8C12.3 10 12.4 10.2 12.3 10.4C12 11.2 12.4 11.8 12.7 12.4C12.8 12.6 12.9 12.7 13 12.8C11.7 14.2 10 15 8 15Z"
                  fill="#1C2E45"
                  fillOpacity="0.6"
                />
              </svg>
            </span>
            Colonia, Uruguay
          </h6>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};
