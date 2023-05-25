import { useState } from "react";
import './ItemCard.css'

export const ItemCard = ( {service , index , onClick } ) =>{
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
        onClick()
    };

    return(
            <article
                className={`service ${
                    activeIndex === index ? "service-card active" : ""
                } service-card`}
                onClick={ handleClick }
            >
                <div className='card__front'>
            {/*         <div className='card__image-wrapper'> 
                        <img src= {service.image} alt='' className='card__image' />
                    </div>
                    <div className='card__content'>
                        <h2 className='card__content-title' > {service.title} </h2>
                        <span className='card__content-arrow'></span>
                    </div> */}
                </div>
                <div className="card__back">
        {/*             <div className='card__content'>
                        <p className="card__content-description">{service.description}</p>
                    </div> */}
                </div>
            </article>
    )
}