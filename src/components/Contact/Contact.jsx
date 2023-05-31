import { FaMapMarker, FaPhone, FaEnvelopeOpen } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>¡Contactame!</h2>
        <form
          action="https://formspree.io/f/mwkjjggb"
          method="POST"
          className="form__container"
        >
          <div className="form__div">
            <div className="input__container">
              <label htmlFor="">Nombre</label>
              <input
                type="name"
                name="name"
                placeholder="Ejemplo: animadgs@gmail.com"
              />
            </div>
            <div className="input__container">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Ejemplo: animadgs@gmail.com"
              />
            </div>
            <div className="input__container">
              <label htmlFor="">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                placeholder="Ejemplo: +598 98 510 246"
              />
            </div>
          </div>
          <div className="form__div">
            <h3> Enviame tu mensaje </h3>
            <div className="input__container">
              <textarea
                class="form-control"
                placeholder="En breve te respondo 😉"
                name="message"
                rows="3"
                required=""
              ></textarea>
            </div>
            <div className="container__button">
              <button type="submit" className="button">
                Enviar Mensaje
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export const ContactGrid = () => {
  return (
    <section id="contact" className="section__contact">
      <div className="container__form">
        <h1 className="container__form-logo">
          Crecé, <span>Animate</span>
        </h1>
        <div className="contact-wrapper animated bounceInUp">
          <div className="contact-form">
            <h3>Contactate</h3>
            <form
              action="https://formspree.io/f/mwkjjggb"
              method="POST"
              className="form-content"
            >
              <p>
                <label>Nombre y Apellido</label>
                <input type="text" name="fullname" />
              </p>
              <p>
                <label>Email</label>
                <input type="email" name="email" />
              </p>
              <p>
                <label>Teléfono</label>
                <input type="tel" name="phone" />
              </p>
              <p>
                <label>Asunto</label>
                <input type="text" name="affair" />
              </p>
              <p className="block">
                <label>Dime tu mensaje</label>
                <textarea name="message" rows="3"></textarea>
              </p>
              <p className="block">
                <button>Enviar</button>
              </p>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-info-container">
              <h4 className="contact-info-title">Más Información</h4>
              <hr className="contact-info-hr" />
              <ul className="contact-info-ul">
                <li>
                  <i className="fas fa-map-marker-alt"></i> <FaMapMarker />{" "}
                  Colonia, Uruguay
                </li>
                <li>
                  <i className="fas fa-phone"></i> <FaPhone /> +598 98 510 246
                </li>
                <li>
                  <i className="fas fa-envelope-open-text"></i>{" "}
                  <FaEnvelopeOpen /> animadgs@gmail.com
                </li>
              </ul>
            </div>
            <div className="contact-info-container">
              <p className="contact-info-p">
                ¿Llevamos juntos tu emprendimiento un escalón más arriba?
              </p>
              <p>
                Anima.<span>uy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
