import React, { useState, useMemo } from 'react';
import { useTransition, animated } from 'react-spring';
import { services } from '../../Data/Services';
import './Serv2.css';


const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const transitions = useTransition(services[activeIndex], {
    key: services[activeIndex].id,
    from: { opacity: 0, transform: 'translate3d(0, 50%, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -50%, 0)' },
  });

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const windowWidth = useMemo(() => window.innerWidth, []);

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
            {transitions((style, item) => (
              <animated.div style={style}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </animated.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;