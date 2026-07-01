
import PropTypes from 'prop-types'; // 1. Importamos PropTypes

export default function Card({ icono, titulo, descripcion }) {
  return (
    <div className="card">
      <div className="icono">
        {icono}
      </div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}


Card.propTypes = {
  icono: PropTypes.node.isRequired,       
  titulo: PropTypes.string.isRequired,     
  descripcion: PropTypes.string.isRequired 
};