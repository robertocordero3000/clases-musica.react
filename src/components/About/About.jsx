
import React from 'react';
import '../../styles/About.css'; // Tus estilos globales


import carnetImg from '../../assets/img/carnet.jpg';

export default function About() {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Texto de presentación */}
          <div className="about-text">
            <p className="section-label">Sobre mí</p>
            <h2>Roberto Cordero</h2>
            <p className="description">
              Soy profesor de música con formación en guitarra, piano y canto. Me dedico a enseñar de manera clara, práctica y adaptada a cada alumno, sin importar la edad o el nivel.
            </p>
            <p className="description">
              Ya sea que quieras tocar tu canción favorita, prepararte para un
              conservatorio o simplemente disfrutar de la música como hobby,
              estoy aquí para acompañarte.
            </p>

            {/* Estadísticas / Stats */}
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alarm-clock">
                    <circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/>
                  </svg>
                </span>
                <p className="stat-value">10+</p>
                <p className="stat-label">Años de experiencia</p>
              </div>

              <div className="stat-item">
                <span className="stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>
                  </svg>
                </span>
                <p className="stat-value">30+</p>
                <p className="stat-label">Alumnos formados</p>
              </div>

              <div className="stat-item">
                <span className="stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>
                  </svg>
                </span>
                <p className="stat-value">100%</p>
                <p className="stat-label">Pasión por enseñar</p>
              </div>
            </div>
          </div>

          {/* Tarjeta decorativa con foto y frase */}
          <div className="quote-box">
            <img src={carnetImg} alt="Foto carnet" className="quote-img" />
            <div className="quote-overlay"></div>
            <div className="quote-content">
              <p className="quote-text">
                "La guitarra no es solo un instrumento,<br /> es una pequeña orquesta para expresarse"
              </p>
              <p className="quote-author">— Roberto</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}