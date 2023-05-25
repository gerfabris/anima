import { useState } from "react";
import "./ItemCard.css";

export const ItemCard = ({ service, index, onClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    onClick();
  };

  return (
    <article
      className={`service ${
        activeIndex === index ? "service-card active" : ""
      } service-card`}
      onClick={handleClick}
    >
      <div className="card__front">
        <h2 className="card__content-title"> {service.title} </h2>
        <div className="card__image-wrapper">
          <img src={service.image} alt="" className="card__image" />
        </div>
        <div className="card__content">
          <span className="card__content-arrow"></span>
        </div>
      </div>
      <div className="card__back">
        <div className="card__content">
          <p className="card__content-description">{service.description}</p>
          <button className="card__content-button" type="submit">
            Más info
          </button>
        </div>
      </div>
    </article>
  );
};
