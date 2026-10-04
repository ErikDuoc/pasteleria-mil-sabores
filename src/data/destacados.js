const getImageUrl = (name) => {
   return new URL(`../assets/images/${name}`, import.meta.url).href;
}

export const DESTACADOS_MOCK = [
  {
    id: 1,
    nombre: "Torta Naranja Sin Azúcar",
    descripcion: "Torta ligera y deliciosa, endulzada naturalmente.",
    precio: 48000,
    imagen: getImageUrl("Torta_Naranja_Sin_Azucar.webp")
  },
  {
    id: 2,
    nombre: "Torta Cuadrada de Frutas",
    descripcion: "Torta fresca con frutas de temporada y crema batida.",
    precio: 42000,
    imagen: getImageUrl("Torta_Cuadrada_Frutas.webp")
  },
  {
    id: 3,
    nombre: "Tarta de Santiago",
    descripcion: "Tradicional tarta española con almendras.",
    precio: 32000,
    imagen: getImageUrl("Tarta_De_Santiago.webp")
  }
];