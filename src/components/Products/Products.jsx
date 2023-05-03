import { useState, useEffect } from 'react';
import { services } from '../../Data/Services';
import './Services.css'

export const Products = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section id='products'>
            <div className="services">
                <div className="services-container">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`service ${activeIndex === index ? 'active' : ''} service-card`}
                        onClick={() => handleClick(index)}
                    >
                        <img src={service.image} alt={service.title} className='service-image'/>
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
                </div>
                {windowWidth > 768 && (
                    <div className="services-sidebar">
                        <h3>{services[activeIndex].title}</h3>
                        <p>{services[activeIndex].description}</p>
                    </div>
                )}
            </div>
        </section>
    )
}