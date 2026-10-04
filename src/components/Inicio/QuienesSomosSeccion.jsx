import groupImage from '../../assets/images/Quienes_somos.webp'

export function QuienesSomosSeccion() {
  return (
    <section className="seccion-quienes-somos" id="nosotros">
      <div className="tarjeta-sobre-nosotros tarjeta-base">
        <div className="texto-nosotros">
          <h2>🎂 Sobre Nosotros</h2>
          <p>
            En Pastelería Mil Sabores llevamos 50 años trabajando para llevar la felicidad a través de nuestros pasteles a tu hogar. Queremos ver a nuestros clientes felices y ser parte de esos momentos únicos en su vida.
          </p>
          <p>
            Nuestro equipo de pasteleros comparte nuestra visión al momento de elaborar nuestros productos, y estamos orgullosos de su trabajo. De la mano de ellos, queremos seguir siendo parte de la vida de nuestros clientes.
          </p>
        </div>
        <div className="imagen-nosotros">
          <img src={groupImage} alt="Equipo de pasteleros en Mil Sabores" />
        </div>
      </div>

      <div className="contenedor-mision-vision">
        <div className="caja-mision tarjeta-base">
          <h2>🍩 Misión</h2>
          <p>
            Creamos experiencias dulces e inolvidables con repostería de alta calidad, honrando nuestra tradición e historia en cada celebración.
          </p>
        </div>
        <div className="caja-vision tarjeta-base">
          <h2>🕯️ Visión</h2>
          <p>
            Ser la pastelería online líder de Chile, reconocida por la calidad de nuestros productos, la innovación digital y el impulso a nuevos talentos gastronómicos de la comunidad.
          </p>
        </div>
      </div>
    </section>
  );
}