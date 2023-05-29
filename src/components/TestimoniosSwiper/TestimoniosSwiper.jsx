// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './TestimoniosSwiper.css'
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const TestimoniosSwiper = ( {testimonios} ) =>{
    
    return (
            <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 15500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
            >
            {testimonios.map( ( itemtestimonio ) => 
                <SwiperSlide className='container-testimonio' key={itemtestimonio.id}>
{/*                     <img 
                        src= { itemtestimonio.image}
                        alt="" 
                        className='testimonio-image'
                    /> */}
                    <div className='testimonio-body'>
                        <h2 className='testimonio-cliente'> {itemtestimonio.cliente} </h2>
                        <p className='testimonio-mensaje'> "{itemtestimonio.mensaje}" </p>
                        <p className='testimonio-servicioRealizado'> {itemtestimonio.servicioRealizado} </p>
                    </div>
                </SwiperSlide>
            )}
            </Swiper>
    )
}