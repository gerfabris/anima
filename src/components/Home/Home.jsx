import { Sidebar } from "../Sidebar/Sidebar";
import "./Home.css";
import Ilusracion from "../../assets/Home/Cami.png";
export const Home = () => {
  return (
    <>
      <section id="home">
        <Sidebar />
        <div className="container">
          <div className="imaginDiv"></div>
          <div className="homeDiv">
            <h1 className="title"> Anima </h1>
            <hr />
            <h3 className="slogan">
              Transformamos la magia de tu emprendimiento en diseño
            </h3>
          </div>
          <div className="homeDiv">
            <img src={Ilusracion} alt="anima" />
          </div>
        </div>
      </section>
    </>
  );
};
