
import React from 'react';
import '../../styles/Carousel.css'; // Tus estilos globales


import guitarraSlide from '../../assets/img/guitarra.jpg';
import pianoSlide from '../../assets/img/piano.jpg';
import cantoSlide from '../../assets/img/canto.jpg';
import teoriaSlide from '../../assets/img/teoria.jpg';

export default function Carousel() {
  return (
    <section id="carousel-clases">
      <div className="container-fluid p-0">

        {/* Agregamos el data-bs-ride="carousel" para que pase solo */}
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

          {/* Indicadores de abajo */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>

          {/* Diapositivas */}
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src={guitarraSlide} className="d-block w-100" alt="Guitarra" />
              <div className="carousel-caption">
                <h5>Clases de Guitarra</h5>
                <p>Empezá desde cero y aprendé tus canciones favoritas.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={pianoSlide} className="d-block w-100" alt="Piano" />
              <div className="carousel-caption">
                <h5>Clases de Piano</h5>
                <p>Desde nivel inicial e intermedio.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={cantoSlide} className="d-block w-100" alt="Canto" />
              <div className="carousel-caption">
                <h5>Clases de Canto</h5>
                <p>Desarrollá tu voz con técnica vocal.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={teoriaSlide} className="d-block w-100" alt="Teoría" />
              <div className="carousel-caption">
                <h5>Teoría musical</h5>
                <p>Aprende las herramientas que te permite entender, crear y disfrutar la música a otro nivel.</p>
              </div>
            </div>

          </div>

          {/* Flechas de navegación */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>

        </div>

      </div>
    </section>
  );
}