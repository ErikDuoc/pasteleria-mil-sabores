const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

export const PRODUCTOS_MOCK = [
  {
    id: 1,
    nombre: "Torta Cuadrada de Chocolate",
    descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas.",
    precio: 45000,
    imagen: getImageUrl("Torta_Cuadrada_Chocolate.webp")
  },
  {
    id: 2,
    nombre: "Torta Cuadrada de Frutas",
    descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla.",
    precio: 50000,
    imagen: getImageUrl("Torta_Cuadrada_Frutas.webp")
  },
  {
    id: 3,
    nombre: "Torta Circular de Vainilla",
    descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y glaseado dulce.",
    precio: 40000,
    imagen: getImageUrl("Torta_Circular_Vainilla.webp")
  },
  {
    id: 4,
    nombre: "Torta Circular de Manjar",
    descripcion: "Torta tradicional chilena con manjar y nueces, un deleite dulce y clásico.",
    precio: 42000,
    imagen: getImageUrl("Torta_Circular_Manjar.webp")
  },
  {
    id: 5,
    nombre: "Mousse de Chocolate",
    descripcion: "Postre individual cremoso y suave, hecho con chocolate de alta calidad.",
    precio: 5000,
    imagen: getImageUrl("Mousse_Chocolate.webp")
  },
  {
    id: 6,
    nombre: "Tiramisú Clásico",
    descripcion: "Postre italiano individual con capas de café, mascarpone y cacao.",
    precio: 5500,
    imagen: getImageUrl("Tiramisu_Clasico.webp")
  },
  {
    id: 7,
    nombre: "Torta Sin Azúcar de Naranja",
    descripcion: "Torta ligera y deliciosa, endulzada naturally, ideal para cuidarse.",
    precio: 48000,
    imagen: getImageUrl("Torta_Naranja_Sin_Azucar.webp")
  },
  {
    id: 8,
    nombre: "Tarta de Santiago",
    descripcion: "Tradicional tarta española hecha con almendras, azúcar y huevos.",
    precio: 32000,
    imagen: getImageUrl("Tarta_De_Santiago.webp")
  },
  {
    id: 9,
    nombre: "Torta Vegana de Chocolate",
    descripcion: "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal.",
    precio: 50000,
    imagen: getImageUrl("Torta_Vegana_Chocolate.webp")
  }
];