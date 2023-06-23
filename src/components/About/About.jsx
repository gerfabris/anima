import "./About.css";

export const About = () => {
  const ImagenAbout = "https://drive.google.com/uc?export=view&id=1oZqAN6lLQlGFDsmpfecuryGXOdxkqmpx";
  const  LogoAi = "https://drive.google.com/uc?export=view&id=1e7NxcXOzUNbOU-4H1eEVp09eNCit8k1Z";
  const LogoPs = "https://drive.google.com/uc?export=view&id=15c_XYkpnGryhyVQcgkT5wi8HwFohaVo3";

  return (
    <section id="about">
      <div className="container-about">
        <div className="contendedor-p">
          <h3 className="h3"> Hola! </h3>
          <h3 className="h3 h3-chero"> Soy Cami</h3>
          <div className="p">
            <p>
              Soy Diseñadora Gráfica, Industrial, Community Manager, e hice
              diversos cursos: Marketing de contenidos, Gestión del Tiempo,
              Cursos destinados a Emprendedores. Fotografia con celular y para
              redes sociales, Marketing para Instagram Siempre estoy aprendiendo
              y encontrando nuevos cursos o talleres de los cuales nutrirme. así
              como leo diario muchos libros de crecimiento personal,
              productividad, marketing, entre otros.
            </p>
          </div>
          <div className="p">
            <p>
              Siempre estoy aprendiendo y encontrando nuevos cursos o talleres
              de los cuales nutrirme. así como leo diario muchos libros de
              crecimiento personal, productividad, marketing, entre otros.
            </p>
          </div>
          <div className="p">
            <p>
              Anima es un canal de diseño gráfico y marketing que ha mutado en
              diversos rubros del diseño a lo largo de sus 11 años con el finde
              ayudar a emprendedores a llevar adelante sus emprendimientos y
              encontrarse acompañados en un camino que normalmente es muy
              solitario.
            </p>
          </div>
          <div className="p">
            <p>
              Esta ayuda parte de la idea de poder plasmar gráficamente su magia
              para que los demás lo conozcan.
            </p>
          </div>
          <div className="p">
            <p>
              Contamos con experiencia para ayudar en el camino del emprendedor,
              el cual si bien es bastante cuesta arriba, también tiene descansos
              donde se disfruta muchísimo del paisaje y de lo logrado
            </p>
          </div>
        </div>
        <div className="contenedor-imagenes">
          <div className="contenedor-logos">
            <img className="logos" src={LogoAi} alt="logo-ilustrator" />
            <img className="logos" src={LogoPs} alt="logo-photoshop" />
          </div>
          <div className="contenedor-img">
            <img className="imagen" src={ImagenAbout} alt="foto-acerca-de" />
          </div>
        </div>
      </div>
    </section>
  );
};
