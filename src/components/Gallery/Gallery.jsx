
import React from 'react';
import GalleryItem from './GalleryItem'; 
import '../../styles/Gallery.css'; // estilos globales


import bateriaImg from '../../assets/img/bateria.jpg';
import ukeleleImg from '../../assets/img/ukelele.jpg';
import bajoImg from '../../assets/img/bajo.jpg';
import flautaTraversaImg from '../../assets/img/flauta traversa.jpg';
import flautaDulceImg from '../../assets/img/flauta dulce.jpg';
import armonicaImg from '../../assets/img/armonica.jpg';
import produccionImg from '../../assets/img/produccion musical.jpg';
import metalofonImg from '../../assets/img/metalofon.jpg';

export default function Gallery() {
  // array de objetos con la información de cada instrumento
  const listaInstrumentos = [
    { id: 1, nombre: 'Batería', imagen: bateriaImg },
    { id: 2, nombre: 'Ukelele', imagen: ukeleleImg },
    { id: 3, nombre: 'Bajo eléctrico', imagen: bajoImg },
    { id: 4, nombre: 'Flauta traversa', imagen: flautaTraversaImg },
    { id: 5, nombre: 'Flauta dulce', imagen: flautaDulceImg },
    { id: 6, nombre: 'Armónica', imagen: armonicaImg },
    { id: 7, nombre: 'Producción musical', imagen: produccionImg },
    { id: 8, nombre: 'Metalófono/Xilofón', imagen: metalofonImg },
  ];

  return (
    <section id="galeria" className="galeria">
      <h2 className="titulo">Otros instrumentos para aprender</h2>

      <div className="contenedor-galeria">
        {/* array con .map() para renderizar cada GalleryItem */}
        {listaInstrumentos.map((instrumento) => (
          <GalleryItem 
            key={instrumento.id}
            imagen={instrumento.imagen}
            nombre={instrumento.nombre}
          />
        ))}
      </div>
    </section>
  );
}