import { Sidebar } from "../Sidebar/Sidebar";
import { TestimoniosSwiper } from "../TestimoniosSwiper/TestimoniosSwiper";
import { dataTestimonios } from "../../Data/DataTestimonio";
import { useImageSwitch } from "./useImageSwitch ";
import "./Home.css";
import { SpaceText } from "../SpaceText/SpaceText";
/* import Swiper Services */
import { services } from "../../Data/DataServices";
import { SwiperServices } from "../SwiperServices/SwiperServices";
/* -- -- */
export const Home = () => {
  const ilustration = new Image();
  const ilustrationMobile = new Image();
  ilustration.src =
    "https://drive.google.com/uc?export=view&id=1oK9d5mrzehw8e6d4dMHUgUFKqSeAnZoo";
  ilustrationMobile.src =
    "https://drive.google.com/uc?export=view&id=1ePP3S026zjsL8I_QwkJe-r5Z5i6OuLYO";
  /*   const Ilustracion = "https://drive.google.com/uc?export=view&id=1oK9d5mrzehw8e6d4dMHUgUFKqSeAnZoo";
  const IlustracionMobile = "https://drive.google.com/uc?export=view&id=1ePP3S026zjsL8I_QwkJe-r5Z5i6OuLYO"; */
  const testimonios = dataTestimonios;
  const imageUrl = useImageSwitch(ilustration.src, ilustrationMobile.src);
  return (
    <>
      <section id="home" className="home">
        <Sidebar />
        <article
          className="container container__home-welcome"
          id="home-welcome"
        >
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
            <div className="container-slogan">
              <h3 className="slogan">
                <span className="slogan-span">Diseñamos</span>
                <span className="slogan-span">juntas</span>
                <span className="slogan-span">soluciones</span>
              </h3>
              <h3 className="slogan">
                <span className="slogan-span">que</span>
                <span className="slogan-span">harán</span>
                <span className="slogan-span">brillar</span>
                <span className="slogan-span">tu</span>
                <span className="slogan-span">emprendimiento.</span>
              </h3>
            </div>
          </div>
          <div className="homeDiv container__home-ilustration">
            <img
              src={imageUrl}
              alt="Anima Estudio Creativo - Home"
              className="ilustration__image"
            />
          </div>
        </article>
        <SpaceText/>
        <SwiperServices services={services} />
        <article
          className="container container__home-testimonios"
          id="home-testimonios"
        >
          <h2 className="home-testimonios-title">¿Qué opinan de Anima?</h2>
          <TestimoniosSwiper testimonios={testimonios} />
        </article>
      </section>
    </>
  );
};
