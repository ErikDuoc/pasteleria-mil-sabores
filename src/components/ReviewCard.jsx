export function ReviewCard({ testimonio }) {
  const { calificacion, comentario, cliente } = testimonio;
  const estrellasString = "★".repeat(calificacion);

  return (
    <article className="tarjeta-testimonio tarjeta-base">
      <div className="estrellas">{estrellasString}</div>
      <p>"{comentario}"</p>
      <div className="datos-cliente">
        <img src={cliente.imagen} alt={comentario} className="foto-cliente" />
        <div>
          <h4>{cliente.nombre}</h4>
          <span>{cliente.etiqueta}</span>
        </div>
      </div>
    </article>

  )
}

