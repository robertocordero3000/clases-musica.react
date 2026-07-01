import PropTypes from 'prop-types'; //  Importa PropTypes obligatoriamente
import portada from "../../assets/img/portada.jpg";
import "../../styles/Hero.css";

//  props desestructuradas
function Hero({ eyebrow, titulo, subtitulo }) {
  return (
    <section 
    className="hero"
  style={{ backgroundImage: `url(${portada})` }}
>
      <div className="overlay"></div>

      <div className="hero-content">
        {/* variables dinámicas en lugar del texto fijo */}
        <p className="eyebrow">{eyebrow}</p>

        <h1>{titulo}</h1>

        <p className="subtitle">{subtitulo}</p>

        <div className="buttons">
          <a href="#contacto" className="btn-primary">
            Reserva tu clase
          </a>

          <a href="#servicios" className="btn-secondary">
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}


Hero.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  titulo: PropTypes.node.isRequired, // Usamos 'node' porque tu título incluye una etiqueta <em>
  subtitulo: PropTypes.string.isRequired
};

export default Hero;