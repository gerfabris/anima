import "./Portfolio.css";
import { useImageTrack } from "./useImageTrack";
import Portfolio1 from "../../assets/Portfolio/1.jpg";
import Portfolio2 from "../../assets/Portfolio/2.png";
import Portfolio3 from "../../assets/Portfolio/3.jpg";
import Portfolio4 from "../../assets/Portfolio/4.jpg";
import Portfolio5 from "../../assets/Portfolio/5.jpg";
import Portfolio6 from "../../assets/Portfolio/6.jpg";

import { dataPorfolio } from "../../Data/DataPortfolio";

export const Portfolio = () => {
  const { percentage } = useImageTrack();

  return (
    <section id="portfolio" className="section__portfolio">
      <h2 className="container__title">Portfo<span>lio</span></h2>
      <div className="portfolio__container">
        <div
          id="image-track"
          className="div__image-track"
          data-percentage={percentage}
        >
          
          <img
            src={Portfolio6}
            alt="mockup"
            className="image"
            draggable="false"
          />
          <img
            src={Portfolio1}
            alt="mockup"
            className="image"
            draggable="false"
          />
          <img
            src={Portfolio3}
            alt="mockup"
            className="image"
            draggable="false"
          />
          <img
            src={Portfolio4}
            alt="mockup"
            className="image"
            draggable="false"
          />
          <img
            src={Portfolio2}
            alt="mockup"
            className="image"
            draggable="false"
          />
          <img
            src={Portfolio5}
            alt="mockup"
            className="image"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};
