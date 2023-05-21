import { useState, useEffect } from "react";
import { services } from "../../Data/DataServices";
import "./Services.css";
import { Modal } from "../Modal/Modal";

export const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  /* -- Modal -- */
/*   const [selectedServiceId, setSelectedServiceId] = useState(null)
  const handleServiceClick = (serviceId) => {
    setSelectedServiceId(serviceId)
  }
  const handleCloseServiceClick = (serviceId) => {
    setSelectedServiceId(null)
  } */
  return (
    <section className="products" id="products">
      <h1 className="container__products-logo">Servi<span>cios</span></h1>
      <div className="services">
        <div className="services-container">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service ${
                activeIndex === index ? "active" : ""
              } service-card`}
              onClick={() => handleClick(index)}
              /* style={ {background: `url("${service.image}")` } } */
            >
{/*               <img
                src={service.image}
                alt={service.title}
                className="service-image"
              /> */}
              <div className="service-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
              </div>

{/*               <button 
                onClick={() => handleServiceClick(service.id)}
              >
                Ver más
              </button> */}
{/*               {selectedServiceId === service.id && <Modal 
                closeModal={handleCloseServiceClick}
                key={service.id}
                service={service}
              />
              } */}
            </div>
          ))}
        </div>
{/*         {windowWidth > 768 && (
          <div className="services-sidebar">
            <h3>{services[activeIndex].title}</h3>
            <p>{services[activeIndex].description}</p>
          </div>
        )} */}
      </div>
    </section>
  );
};
