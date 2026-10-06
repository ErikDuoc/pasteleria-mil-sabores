import { Link } from 'react-router-dom';
import { DESTACADOS_MOCK } from '../../data/destacados';

export function DestacadosSeccion() {
  return (
    <section id="destacados">
      <h2>Productos destacados</h2>
      <div className="contenedor-productos">
        {DESTACADOS_MOCK.map((producto) => (
          <article key={producto.id} className="tarjeta-producto tarjeta-base">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p className="precio">
              {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(producto.precio)} CLP
            </p>
          </article>
        ))}
      </div>
      <Link to="/tienda" className="button">Ver toda la tienda</Link>
    </section>
  );
}