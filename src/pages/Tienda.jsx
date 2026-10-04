import { ProductCard } from "../components/ProductCard"
import { ReviewCard } from "../components/ReviewCard";
import { PRODUCTOS_MOCK } from "../data/productos"
import { TESTIMONIOS_MOCK } from "../data/testimonios";

export function Tienda() {
  const handleAddToCart = (product) => {
    // Aquí conectarás tu estado global o context del carrito
    console.log('Añadido al carrito:', product.nombre);
  };

  return (
    <main>
      <section className="contenedor-productos">
        {PRODUCTOS_MOCK.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </section>

      <section className="seccion-testimonios no-border">
        <h2>💬 Lo que dice la gente de Mil Sabores</h2>
        <div className="contenedor-testimonios">
          {TESTIMONIOS_MOCK.map((testimonio) => (
            <ReviewCard key={testimonio.id} testimonio={testimonio} />
          ))}
        </div>
      </section>
    </main>
  )
}