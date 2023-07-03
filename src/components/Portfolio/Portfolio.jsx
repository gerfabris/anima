import { dataPorfolio } from "../../Data/DataPortfolio";
import { SwiperPortfolio } from "../SwiperPortfolio/SwiperPortfolio";
import "./Portfolio.css";

export const Portfolio = () => {
  const portfolioRedes = dataPorfolio.filter(
    (item) => item.category === "redes"
  );
  const portfolioLogos = dataPorfolio.filter(
    (item) => item.category === "logos"
  );
  const portfolioOtros = dataPorfolio.filter(
    (item) => item.category === "otros"
  );
  /* ------ */
  return (
    <section id="portfolio" className="section__portfolio">
      <h2 className="portfolio__title">
        Portfo<span>lio</span>
      </h2>

      <div className="portfolio-container">
        <div className="container-content">
          <h3 className="content-title">
            Redes sociales
          </h3>
          <hr className="content-hr" />
        </div>
        <div className="container-swiper">
          <SwiperPortfolio portfolio={portfolioRedes} />
        </div>
      </div>
      <div className="portfolio-container">
        <div className="container-content">
          <h3 className="content-title">Logos </h3>
          <hr className="content-hr" />
        </div>
        <div className="container-swiper">
          <SwiperPortfolio portfolio={portfolioLogos} />
        </div>
      </div>
      <div className="portfolio-container">
        <div className="container-content">
          <h3 className="content-title"> Otros </h3>
          <hr className="content-hr" />
        </div>
        <div className="container-swiper">
          <SwiperPortfolio portfolio={portfolioOtros} />
        </div>
      </div>
    </section>
  );
};
