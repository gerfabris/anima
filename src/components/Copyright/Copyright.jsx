import "./Copyright.css";
import LogoCopyright from "../../assets/Copyright/Composicion1-2.png";

export const Copyright = () => {
  return (
    <div className="container">
      <div className="item__container">
        <h5> Desarrollo web por </h5>
        <img src={LogoCopyright} alt="Impulsar Dev Solutions" />
      </div>
    </div>
  );
};
