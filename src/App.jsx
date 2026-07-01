import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Carousel from "./components/Carousel/Carousel";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero  
        eyebrow="Clases particulares"
        titulo={<>La <em>música</em> que imaginás, podés tocarla</>}
        subtitulo="Aprende a tocar tu instrumento favorito con clases personalizadas para todos los niveles y edades."
      />
      <Services />
      <Carousel />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;