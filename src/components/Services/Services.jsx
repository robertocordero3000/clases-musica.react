
import React from 'react';
import Card from './Card'; // 
import '../../styles/Services.css'; //  estilos globales

export default function Services() {
  // Array de objetos con la info de tus clases
  const listaServicios = [
    {
      id: 1,
      titulo: 'Piano',
      descripcion: 'Desde clásico hasta contemporáneo. Aprende técnica, lectura de partituras y repertorio contemporáneo.',
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-piano">
          <path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"/><path d="M2 14h20"/><path d="M6 14v4"/><path d="M10 14v4"/><path d="M14 14v4"/><path d="M18 14v4"/>
        </svg>
      )
    },
    {
      id: 2,
      titulo: 'Guitarra',
      descripcion: 'Acústica, eléctrica y clásica. Rock, pop, Jazz, fingerpicking y más estilos.',
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-guitar">
          <path d="m11.9 12.1 4.514-4.514"/><path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"/><path d="m6 16 2 2"/><path d="M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"/>
        </svg>
      )
    },
    {
      id: 3,
      titulo: 'Canto',
      descripcion: 'Técnica vocal, respiración, afinación.',
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic">
          <path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/>
        </svg>
      )
    },
    {
      id: 4,
      titulo: 'Teoría Musical',
      descripcion: 'Armonía, solfeo, composición e ingresos a conservatorios.',
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music-4"><path d="M9 18V5l12-2v13"/><path d="m9 9 12-2"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
      )
    }
  ];

  return (
    <section id="servicios" className="servicios">
      <p className="subtitulo">LO QUE OFREZCO</p>
      <h2 className="titulo">Clases & Servicios</h2>

      <div className="cards">
        {listaServicios.map((servicio) => (
          <Card 
            key={servicio.id} 
            icono={servicio.icono}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
          />
        ))}
      </div>
    </section>
  );
}