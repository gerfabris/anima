import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
/* css */
import "./SwiperPortfolio.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

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
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {portfolio.map((itemportfolio) => (
        <SwiperSlide className="cardportfolio" key={itemportfolio.id}>
          <img
            src={itemportfolio.image}
            alt={itemportfolio.title}
            className="cardportfolio-image"
          />
          <figcaption className="cardportfolio-body">
            <h2 className="cardportfolio-title"> {itemportfolio.title} </h2>
            <p className="cardportfolio-description">
              {" "}
              {itemportfolio.description}{" "}
            </p>
          </figcaption>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
