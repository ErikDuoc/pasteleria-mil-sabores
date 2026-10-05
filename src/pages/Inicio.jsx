import { BienvenidaSection } from '../components/Inicio/Bienvenida';
import { DestacadosSeccion } from '../components/inicio/DestacadosSeccion';
import { QuienesSomosSeccion } from '../components/inicio/QuienesSomosSeccion';
import { ImpactoSeccion } from '../components/inicio/ImpactoSeccion';
import { TestimoniosSeccion } from '../components/inicio/TestimoniosSeccion';
import { ContactoSeccion } from '../components/inicio/ContactoSeccion';
import fullImg from '../assets/images/hero.png';

export function Inicio() {
  return (
    <>
      <img className="bienvenida-imagen" src={fullImg} alt="Torta Cuadrada de Frutas de la pastelería"></img>
      <main>
        <BienvenidaSection />
        <DestacadosSeccion />
        <QuienesSomosSeccion />
        <ImpactoSeccion />
        <TestimoniosSeccion />
        <ContactoSeccion />
      </main>
    </>
  );
}