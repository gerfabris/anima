import "./Copyright.css";
import LogoCopyright from "../../assets/Copyright/Composicion1-2.png";

export const Copyright = () => {
  return (
    <div className="copy__container">
      <div className="item__container">
        <h5> Desarrollo web por </h5>
        <a href="https://www.impulsardev.com.ar" target="blank">
          <img src={LogoCopyright} alt="Impulsar Dev Solutions" />
        </a>
      </div>
    </div>
  );
};
