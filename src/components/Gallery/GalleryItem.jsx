
import React from 'react';
import PropTypes from 'prop-types';

export default function GalleryItem({ imagen, nombre }) {
  return (
    <div className="item">
      <img src={imagen} alt={nombre} />
      <p className="texto-img">{nombre}</p>
    </div>
  );
}

GalleryItem.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
};