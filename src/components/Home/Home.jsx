import { Sidebar } from "../Sidebar/Sidebar";
import "./Home.css";
import Ilustracion from "../../assets/Home/Cami.png";
export const Home = () => {
  return (
    <>
      <section id="home" className="home">
        <Sidebar />
        <article className="container container__home-welcome" id="home-welcome"> 
          <div className="imaginDiv"></div>
          <div className="homeDiv container__magictext">
            <h1 className="title">
              <span className="title-span">A</span>
              <span className="title-span">n</span>
              <span className="title-span">i</span>
              <span className="title-span">m</span>
              <span className="title-span">a</span>
            </h1>
            <hr className="magictext-hr" />
            <h3 className="slogan">
              <span className="slogan-span">Transformamos</span>
              <span className="slogan-span">la</span>
              <span className="slogan-span">magia</span>
              <span className="slogan-span">de</span>
              <span className="slogan-span">tu</span>
              <span className="slogan-span">emprendimiento</span>
              <span className="slogan-span">en</span>
              <span className="slogan-span">diseño</span>
            </h3>
          </div>
          <div className="homeDiv container__home-ilustration">
            <img src={Ilustracion} alt="anima" className="ilustration__image" />
          </div>
        </article>
        <article className="container container__home-instagram" id="home-instagram"> 
          <iframe className="home__instagram" src="http://instagram.com/p/MzRlODBiNWFlZA/embed" frameborder="0"></iframe>
        </article>
      </section>
    </>
  );
};
