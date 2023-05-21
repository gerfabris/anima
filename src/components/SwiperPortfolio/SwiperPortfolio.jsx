import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef, useState } from 'react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
/* css */
import './SwiperPortfolio.css'
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export const SwiperPortfolio = () =>{
    return(
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
            <SwiperSlide className='cardportfolio'>
                <img 
                    src="/src/assets/Portfolio/1.jpg" 
                    alt="" 
                    className='cardportfolio-image'
                />
                <figcaption className='cardportfolio-body'>
                    <h2 className='cardportfolio-title'>Aca titulo</h2>
                    <p className='cardportfolio-description'>aca parrafo</p>
                </figcaption>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/src/assets/Portfolio/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/src/assets/Portfolio/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/src/assets/Portfolio/1.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}