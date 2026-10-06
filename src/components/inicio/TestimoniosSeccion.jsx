import { TESTIMONIOS_MOCK } from '../../data/testimonios';

export function TestimoniosSeccion() {
  return (
    <section className="seccion-testimonios">
      <h2>💬 Lo que dice la gente de Mil Sabores</h2>
      <div className="contenedor-testimonios">
        {TESTIMONIOS_MOCK.map((item) => (
          <article key={item.id} className="tarjeta-testimonio tarjeta-base">
            <div className="estrellas">
              {"★".repeat(item.calificacion)}
            </div>
            <p>"{item.comentario}"</p>
            <div className="datos-cliente">
              <img
                src={item.cliente.imagen}
                alt={`Foto de ${item.cliente.nombre}`}
                className="foto-cliente"
              />
              <div>
                <h4>{item.cliente.nombre}</h4>
                <span>{item.cliente.etiqueta}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}