import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>¡Contactame!</h2>
        <form action="" className="form__container">
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
