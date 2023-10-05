import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
/* css */
import "./SwiperPortfolio.css";
// import required modules
import { EffectCoverflow, Pagination , Autoplay , Navigation } from "swiper";

export const SwiperPortfolio = ({ portfolio }) => {
 /* -- preload images */
  useEffect(() => {
    const imagesToPreload = portfolio.map((itemportfolio) => itemportfolio.image);

    const preloadImages = () => {
      imagesToPreload.forEach((imageUrl) => {
        const image = new Image();
        image.src = imageUrl;
      });
    };

    preloadImages();

  }, [portfolio]);
  /* --- */
      //Swiper Params
      const swiperParams = {
        autoplay: {
            delay: 10000,
            disableOnInteraction: true,
        },
        pagination: {
            clickable: true,
        },
        navigation: true,
        grabCursor: true,
        centeredSlides: false,
        loop: true,
        modules: [Autoplay, Pagination, Navigation],
    };
    
    // Definir tus media queries (ajusta los valores según tus necesidades)
    const mediaQuerySmall = '(max-width: 900px)';
    const mediaQueryMedium = '(min-width: 901px) and (max-width: 1200px)';
    const mediaQueryLarge = '(min-width: 1201px)';

    // Añadir las clases correspondientes según el tamaño de la pantalla
    let swiperClasses = 'mySwiper swiper-portfolio';

    if (window.matchMedia(mediaQuerySmall).matches) {
        swiperClasses += ' swiper-small';
        swiperParams.slidesPerView = 1;
    } else if (window.matchMedia(mediaQueryMedium).matches) {
        swiperClasses += ' swiper-medium';
        swiperParams.slidesPerView = 2;
    } else if (window.matchMedia(mediaQueryLarge).matches) {
        swiperClasses += ' swiper-large';
        swiperParams.slidesPerView = 3;
    }
    
    // ---
  return (
    <Swiper
      {...swiperParams}
      className= {swiperClasses}
    >
      {portfolio.map((itemportfolio) => (
        <SwiperSlide className="cardportfolio" key={itemportfolio.id}>
          <div className="cardporfolio-container-image">
            <img
              src={itemportfolio.image}
              alt={itemportfolio.title}
              className="cardportfolio-image"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
