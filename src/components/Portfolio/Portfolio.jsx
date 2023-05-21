import { SwiperPortfolio } from "../SwiperPortfolio/SwiperPortfolio";
import "./Portfolio.css";

export const Portfolio = () => {

  return (
    <section id="portfolio" className="section__portfolio">
      <h2 className="portfolio__title">Portfo<span>lio</span></h2>
      
      <div className="portfolio-container">
        <div className="container-content">
          <h3 className="content-title">Redes sociales</h3>
          <hr className="content-hr"/>
          <p className="content-p"> Texto de redes sociales</p>
        </div>
        <div className="container-swiper">
          <SwiperPortfolio/>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="container-content">
          <h3 className="content-title">Logos </h3>
          <hr className="content-hr"/>
          <p className="content-p"> Texto de logos</p>
        </div>
        <div className="container-swiper">
          <SwiperPortfolio/>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="container-content">
          <h3 className="content-title"> Facturitas </h3>
          <hr className="content-hr"/>
          <p className="content-p"> Texto de facturitas </p>
        </div>
        <div className="container-swiper">
          <SwiperPortfolio/>
        </div>
      </div>
      
    </section>
  );
};
