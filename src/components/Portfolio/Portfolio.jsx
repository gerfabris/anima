import ImagenAbout from "../../assets/About/foto-about.jpg";
import "./Portfolio.css";
import { useImageTrack } from "./useImageTrack";

export const Portfolio = () => {

  const { percentage } = useImageTrack();

  return (
    <section id="portfolio" className="section__portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio__container">
        <div id="image-track" 
          className="div__image-track"
          data-percentage={percentage}
        >
          <img src= {ImagenAbout} alt="" className="image" draggable="false"/>
          <img src= {ImagenAbout} alt="" className="image" draggable="false"/>
          <img src= {ImagenAbout} alt="" className="image" draggable="false"/>
          <img src= {ImagenAbout} alt="" className="image" draggable="false"/>
          <img src= {ImagenAbout} alt="" className="image" draggable="false"/>
        </div>
      </div>
    </section>
  );
};
