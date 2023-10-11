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
/* hooks */
import { useCachedImage, useImagePreloading } from "../../hooks/useCachedImage";

/* component */
export const SwiperPortfolio = ({ portfolio }) => {
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
/*         effect: "coverflow",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }, */
      modules: [Autoplay, Pagination, Navigation, EffectCoverflow],
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
        swiperParams.slidesPerView = 1;
    } else if (window.matchMedia(mediaQueryLarge).matches) {
        swiperClasses += ' swiper-large';
        swiperParams.slidesPerView = 1;
    }
    /* -- preload images */
    const imageToPreload = portfolio.map( (itemportfolio) => itemportfolio.image);
    useImagePreloading(imageToPreload)
    // ---
  return (
    <Swiper
      {...swiperParams}
      className= {swiperClasses}
    >
      {portfolio.map((itemportfolio) => {
          const { isInCache, imageSrc } = useCachedImage(itemportfolio.image);

          return (
            <SwiperSlide className="cardportfolio" key={itemportfolio.id}>
              <div className="cardporfolio-container-image">
                {
                  isInCache 
                  ?
                  <img
                    src={imageSrc}
                    alt={itemportfolio.title}
                    className="cardportfolio-image"
                  />
                  :
                  <p>Cargando...</p>
                }
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )    
};
