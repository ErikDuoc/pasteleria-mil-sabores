const getImageUrl = (name) => {
   return new URL(`../assets/images/${name}`, import.meta.url).href;
}

export const TESTIMONIOS_MOCK = [
  {
    id: 1,
    calificacion: 5,
    comentario: "¡Las mejores tortas de Santiago! Pedí una de chocolate para un cumpleaños y fue un éxito total. Súper húmeda y el sabor increíble. 100% recomendados.",
    cliente: {
      nombre: "María González",
      etiqueta: "Cliente Frecuente",
      imagen: getImageUrl("cliente_1.webp")
    }
  },
  {
    id: 2,
    calificacion: 5,
    comentario: "Excelente servicio y calidad. Probé los postres individuales para una reunión y a todos les encantaron. La presentación es hermosa y el sabor inigualable.",
    cliente: {
      nombre: "Pedro Fernández",
      etiqueta: "Primera vez, ¡volveré!",
      imagen:  getImageUrl("cliente_2.webp")
    }
  },
  {
    id: 3,
    calificacion: 5,
    comentario: "El sabor de la tradición se nota en cada bocado. Me encanta que usen ingredientes naturales. Sus tortas de frutas son mi perdición. ¡Excelente trabajo, equipo!",
    cliente: {
      nombre: "Ana Torres",
      etiqueta: "Amante de lo dulce",
      imagen: getImageUrl("cliente_3.webp")
    }
  }
];