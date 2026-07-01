
import React, { useState } from 'react';
import '../../styles/Contact.css'; // Tus estilos globales

export default function Contact() {
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    instrumento: '',
    modalidad: '',
    frecuencia: [], 
    mensaje: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value 
    });
  };

  
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const { frecuencia } = formData;

    if (checked) {
      setFormData({
        ...formData,
        frecuencia: [...frecuencia, value]
      });
    } else {
      setFormData({
        ...formData,
        frecuencia: frecuencia.filter((item) => item !== value)
      });
    }
  };

  //  Manejo del Envío del Formulario (Submit)
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue (¡Requisito del TP!)
    
    console.log('--- ¡Formulario Enviado con Éxito! ---');
    console.log(formData); // Muestra todos los datos capturados en la consola
    
    alert(`¡Gracias ${formData.nombre}! Tu solicitud para clases de ${formData.instrumento} fue recibida.`);
  };

  //  Manejo del Reseteo del Formulario (Reset)
  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      instrumento: '',
      modalidad: '',
      frecuencia: [],
      mensaje: ''
    });
    console.log('--- Formulario Reseteado ---');
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <p className="contact-subtitle">Contacto</p>
        <h2 className="contact-title">¿Listo para empezar?</h2>
        <p className="contact-description">
          La primera clase es gratuita. Escríbeme y encontraremos el horario
          perfecto para ti sea virtual o presencial.
        </p>

        {/* función handleSubmit al evento onSubmit */}
        <form className="formulario" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text" id="nombre" name="nombre" 
              value={formData.nombre} onChange={handleChange} required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" id="email" name="email" 
              value={formData.email} onChange={handleChange} required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input 
              type="tel" id="telefono" name="telefono" 
              value={formData.telefono} onChange={handleChange} required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="instrumento">Instrumento de interés</label>
            <select id="instrumento" name="instrumento" value={formData.instrumento} onChange={handleChange} required>
              <option value="" disabled>Seleccioná un instrumento</option>
              <option value="guitarra">Guitarra</option>
              <option value="piano">Piano</option>
              <option value="canto">Canto</option>
              <option value="teoria">Teoría Musical</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="form-group">
            <label>Modalidad</label>
            <div className="radio-group">
              <label>
                <input 
                  type="radio" name="modalidad" value="presencial" 
                  checked={formData.modalidad === 'presencial'} onChange={handleChange} 
                /> Presencial
              </label>
              <label>
                <input 
                  type="radio" name="modalidad" value="virtual" 
                  checked={formData.modalidad === 'virtual'} onChange={handleChange} 
                /> Virtual
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Frecuencia</label>
            <div className="checkbox-group">
              <label>
                <input 
                  type="checkbox" name="frecuencia" value="1vez" 
                  checked={formData.frecuencia.includes('1vez')} onChange={handleCheckboxChange} 
                /> 1 vez por semana
              </label>
              <label>
                <input 
                  type="checkbox" name="frecuencia" value="2veces" 
                  checked={formData.frecuencia.includes('2veces')} onChange={handleCheckboxChange} 
                /> 2 veces por semana
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea 
              id="mensaje" name="mensaje" rows="4" 
              value={formData.mensaje} onChange={handleChange} required 
            ></textarea>
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn-enviar">Enviar</button>
            {/* Agregamos el type="button" y el onClick para manejar el reset */}
            <button type="button" className="btn-reset" onClick={handleReset}>Resetear</button>
          </div>

        </form>

        <div className="contact-info mt-5">
          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <p className="contact-text">+54 1155613440</p>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <p className="contact-text">roberto.cordero.vedia@gmail.com</p>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <p className="contact-text">Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>
    </section>
  );
}