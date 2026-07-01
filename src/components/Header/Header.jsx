import "../../styles/Header.css";

function Header() {
  return (
    <>
      <header>
      <nav className="navbar">
        <a href="#" className="logo">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
          </svg>
          <span className="logo-text">Clases de Música</span>
        </a>
    
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Instrumentos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>
    </header>
    </>
  );
}

export default Header;