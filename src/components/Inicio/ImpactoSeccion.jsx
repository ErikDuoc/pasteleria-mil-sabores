import impacto from '../../assets/images/Impacto.webp'

export function ImpactoSeccion() {
  return (
    <section className="seccion-impacto">
      <div className="tarjeta-impacto tarjeta-base">
        <h2>🤝 Impacto Comunitario y Apoyo Local</h2>
        <img src={impacto} alt="Estudiantes de pastelería" className="imagen-impacto" />
        <p>
          En Pastelería Mil Sabores creemos que cada dulce momento debe trascender. Por eso, parte de nuestras iniciativas y ventas están destinadas a colaborar activamente con la comunidad local y <b>apoyar de forma directa la formación de los nuevos talentos de la gastronomía nacional</b>, creando un espacio de aprendizaje e innovación para los futuros profesionales.
        </p>
      </div>
    </section>
  );
}