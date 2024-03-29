import ImgAbout1 from "../../assets/img/About/1.png";
import ImgAbout2 from "../../assets/img/About/2.png";
import ImgAbout3 from "../../assets/img/About/3.png";
import ImgAbout4 from "../../assets/img/About/4.png";
import ImgAbout5 from "../../assets/img/About/5.png";
import ImgAbout6 from "../../assets/img/About/6.png";
import ImgAbout7 from "../../assets/img/About/7.png";
import ImgAboutIzquierda from "../../assets/img/About/izquierda.webp";
import ImgAboutArribaDerecha from "../../assets/img/About/arribaderecha.webp";
import ImgAboutAbajoDerecha from "../../assets/img/About/abajoderecha.webp";
import ImgAboutConjunto from "../../assets/img/About/conjunto.webp";


import "./About.css";

export const About = () => {
  const ImageAbout1 = ImgAboutIzquierda/* "https://drive.google.com/uc?export=view&id=1dPPfGUaYwqwVncSfiE5LIvBl3Te0qVim"; */
  const ImageAbout2 = ImgAboutArribaDerecha/* "https://drive.google.com/uc?export=view&id=1HWSKJOzBK73uJlXJEXAeRpJnh8UvdG6N"; */
  const ImageAbout3 = ImgAboutAbajoDerecha/* "https://drive.google.com/uc?export=view&id=1E4BtFkMXC1uCEVf9DWNO4mCe-LVGqfDQ"; */
  const ImageAbout4 = ImgAboutConjunto/* "https://drive.google.com/uc?export=view&id=16lAqzCwT6WuMp6dGXw7x00GZRBypdinR"; */
  const number1 = ImgAbout1/* "https://drive.google.com/uc?export=view&id=1PPpAKYLLnC2JImLSdZQ-goCGn8ceTf-I" */
  const number2 = ImgAbout2/* "https://drive.google.com/uc?export=view&id=1OjW-D1W3RJO6K-e9yEcjoyvg-Qwpizsk" */
  const number3 = ImgAbout3/* "https://drive.google.com/uc?export=view&id=1zyESCm2YGKHhwVzhzn9WJxrHZvRBNysT" */
  const number4 = ImgAbout4/* "https://drive.google.com/uc?export=view&id=1Jg_IcHIdZh2qEYxOvt0SwfeXjh4p4VD7" */
  const number5 = ImgAbout5/* "https://drive.google.com/uc?export=view&id=1qgbcI6iADbeaiIJX3BIb8ifjb_Z6apzi" */
  const number6 = ImgAbout6/* "https://drive.google.com/uc?export=view&id=1eY4IPQYqXcoakez4urlmgcUFIliJYmID" */
  const number7 = ImgAbout7/* "https://drive.google.com/uc?export=view&id=1vU3eWNHCjHzG13KQSP2QLRvyXvS_ksHE" */
  return (
    <section id="about">
      <div className="container-about">
        <div className="container-about-sections">
          {/* Section Welcome */}
          <div className="container-welcome-about">
            <h3 className="h3 title-welcome-about">Bienvenida a Anima,</h3>
            <p className="paragraph-welcome-about">
              donde la creatividad y el diseño se unen para impulsar tu
              emprendimiento y el de muchas emprendedoras.
            </p>
            <p className="paragraph-welcome-about">
              Aquí las ideas toman forma y la estética se convierte en
              estrategia. El diseño es la clave para diferenciarse y comunicar
              con impacto en mercados saturados.
            </p>
            <p className="paragraph-welcome-about">
              En cada proyecto, fusionamos la creatividad con la funcionalidad,
              transformamos conceptos en soluciones visuales que cuentan
              historias y generan conexiones auténticas con tus clientes.
            </p>
          </div>
          {/* Section Hello */}
          <div className="container-hello-about">
            <h3 className="h3">Hola!</h3>
            <h3 className="h3 h3-cherolina">Soy Cami</h3>
            <p className="paragraph-hello">
              Estoy inmersa en el mundo del diseño y el marketing hace ya más de
              10 años y mi percepción dice que será por un largo tiempo más
              porque me gusta mucho lo que hago.
            </p>
            <p className="paragraph-hello">
              He estudiado bastante de este rubro, y me capacito constantemente.
              No sería yo, si no estuviera metida en algún curso o taller, o
              vieras en mi casa algún libro arriba de la mesa.
            </p>
            <p className="paragraph-hello">
              Te cuento 7 cosas sobre mí, para que me conozcas no solo por lo
              que hago, sino también por lo que soy, y eso es algo que lo
              reflejo mucho en mi emprendimiento:
            </p>
          </div>
        </div>
        {/* Section images */}
        <div className="container-images-about">
          <div className="container-image-about">
            <img className="image-about" src={ImageAbout1} alt="foto-acerca-de" />
          </div>
          <div className="container-image-about">
            <img className="image-about" src={ImageAbout2} alt="foto-acerca-de" />
          </div>
          <div className="container-image-about">
            <img className="image-about" src={ImageAbout3} alt="foto-acerca-de" />
          </div>
          <div className="container-image-about">
            <img className="image-about" src={ImageAbout4} alt="foto-acerca-de" />
          </div>
        </div>
      </div>
      {/* section points */}
      <div className="container-about-points">
        <div className="container-points">
          <div className="points-container-number">
            <img className="image-number" src={number1} alt="poinst number" />
          </div>
          <p className="points-paragraph">
            Estudié Diseño Industrial y Diseño Gráfico, y de esto último dí
            clases. También soy Community Manager entre otras cosas más que me
            nutren en el mundo del diseño y el marketing.
          </p>
        </div>
        <div className="container-points">
          <div className="points-container-number">
            <img className="image-number" src={number2} alt="poinst number" />
          </div>
          <p className="points-paragraph">
            Hoy en día, emprendo de forma independiente haciendo lo que me
            gusta. Ha sido un camino de grandes aprendizajes que no descarto
            ninguna de sus etapas que me han llevado a donde estoy (ni la de
            trabajar 16 horas al día en tres trabajos a la vez. Acá es donde más
            aprendemos lo que no queremos repetir y cómo mejorar esos procesos).
          </p>
        </div>
        <div className="container-points">
          <div className="points-container-number">
            <img className="image-number" src={number3} alt="poinst number" />
          </div>
          <p className="points-paragraph">
            Tengo emprendimientos de: productos y servicios además de Anima. Sé
            estar en ambos lados de la vereda.
          </p>
        </div>
        <div className="container-points">
          <div className="points-container-number">
            <img className="image-number" src={number4} alt="poinst number" />
          </div>
          <p className="points-paragraph">
            Me apasiona conocer más sobre optimizar procesos y recursos para
            emprender mejor que como lo hice cuando empezaba, y que eso pueda
            ayudar a quienes estén transitando este camino. Me encanta organizar
            todo y soy fan de las listas.
          </p>
        </div>
        <div className="container-points">
          <div className="points-container-number">
            <img className="image-number" src={number5} alt="poinst number" />
          </div>
          <p className="points-paragraph">
            Vivo en un balneario de Colonia rodeado de bosque, y con plena
            conexión de la naturaleza. Vivir acá me ha enseñado a bajar los
            ritmos, respetar mis tiempos y mejorar mi calidad de vida con una
            rutina slow. También me ha ayudado a preguntarme más veces qué es lo
            que realmente quiero.
          </p>
        </div>
        <div className="container-points">
          <div className="points-container-number">
            <img className="image-number" src={number6} alt="poinst number" />
          </div>
          <p className="points-paragraph">
            Practico yoga hace un par de años, y amo hacer ejercicio físico: mi
            top 1 es natación. Acá he encontrado mejores ideas para mis negocios
            que estar horas sentada frente a la compu esperando que caigan. El
            movimiento genera movimiento.
          </p>
        </div>
        <div className="container-points">
          <div className="points-container-number">
            <img className="image-number" src={number7} alt="poinst number" />
          </div>
          <p className="points-paragraph">
            Si me preguntás cómo me veo en un futuro, te diría que más
            espontánea, sacando un pasaje con el primer destino que aparezca, o
            enganchando la casilla a la camioneta a meter kilómetros con mi
            novio y mis perras, a conocer más rinconcitos del mundo de los que
            he tenido la suerte de poner los pies ❤️
          </p>
        </div>
      </div>
      {/* section thanks */}
      <div className="container-thanks">
        <p className="thanks-paragraph">Gracias por llegar hasta acá :)</p>
      </div>
    </section>
  );
};
