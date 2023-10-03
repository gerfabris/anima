
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import style component
import './SwiperServices.css'
import { ItemCard } from "../Products/ItemCard";
// ---- component ----
export const SwiperServices = ( {services} ) =>{
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
        centeredSlides: true,
        loop: true,
        modules: [Autoplay, Pagination, Navigation],
    };
    
    // Definir tus media queries (ajusta los valores según tus necesidades)
    const mediaQuerySmall = '(max-width: 600px)';
    const mediaQueryMedium = '(min-width: 601px) and (max-width: 1200px)';
    const mediaQueryLarge = '(min-width: 1201px)';

    // Añadir las clases correspondientes según el tamaño de la pantalla
    let swiperClasses = 'mySwiper SwiperServices';

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
        <article className="article-SwiperServices">
            <Swiper
                {...swiperParams}
                className= {swiperClasses}
            >
                {
                    services.map( (service , index) => 
                        <SwiperSlide 
                            className="slide-container-services"
                        >
                            <ItemCard
                                key={ service.id } 
                                service={ service } 
                                index={ index }
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </article>
    )
}