import { services } from "../../Data/DataServices";
import { ItemCard } from "./ItemCard";
import "./Services.css";

export const Products = () => {
  return (
    <section className="products" id="products">
      <h1 className="container__products-logo">Servi<span>cios</span></h1>
      <div className="services">
        <div className="services-container">
          {services.map( (service , index) => 
            <ItemCard 
              key={ service.id } 
              service={ service } 
              index={ index }
            /> 
          )}
        </div>
      </div>
    </section>
  );
};
