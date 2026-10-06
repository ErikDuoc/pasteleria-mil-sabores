# 🎂 Pastelería Mil Sabores

Sitio web de pastelería desarrollado como proyecto académico del curso Fullstack de Duoc UC. Combina una landing page institucional con un catálogo de productos y formularios de autenticación, construido con React + Vite.

> **Estado actual:** en desarrollo. La navegación, el home, el catálogo y los formularios de login/registro están implementados; el carrito de compras y la autenticación real están pendientes.

## 🛠️ Tecnologías

| Categoría | Tecnología |
|---|---|
| Framework | React 19 |
| Bundler / Dev server | Vite 8 |
| Routing | React Router DOM 7 |
| Estilos | CSS puro (`src/index.css`) |
| Testing | Vitest 5 + Testing Library (jsdom) |
| Linting | ESLint 10 (flat config) |

No se utilizan state managers, librerías de UI ni backend: los datos son mock data local.

## 🚀 Puesta en marcha

Requisitos: Node.js 18+ y npm.

```bash
# 1. Clonar el repositorio
git clone https://github.com/ErikDuoc/pasteleria-mil-sabores.git
cd pasteleria-mil-sabores

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Luego abre `http://localhost:5173` en el navegador.

### Scripts disponibles

| Script | Comando | Descripción |
|---|---|---|
| `npm run dev` | `vite` | Servidor de desarrollo con HMR |
| `npm run build` | `vite build` | Build de producción en `dist/` |
| `npm run preview` | `vite preview` | Previsualiza el build de producción |
| `npm run lint` | `eslint .` | Verifica el código con ESLint |
| `npm test` | `vitest run` | Ejecuta la suite de tests una vez |

## 📁 Estructura del proyecto

```
pasteleria-mil-sabores/
├── index.html                  # HTML raíz (Google Fonts, favicon, meta)
├── vite.config.js              # Config de Vite + entorno de tests (jsdom)
├── eslint.config.js            # Config de ESLint (flat config)
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx                # Punto de entrada: React root + BrowserRouter
    ├── App.jsx                 # Layout raíz: ScrollToTop + NavBar + Rutas + Footer
    ├── index.css               # Hoja de estilos global (única)
    ├── pages/
    │   ├── Inicio.jsx          # Landing: hero + 6 secciones
    │   ├── Tienda.jsx          # Catálogo de productos + testimonios
    │   ├── Login.jsx           # Formulario de inicio de sesión
    │   ├── Registro.jsx        # Formulario de registro con lógica de beneficios
    │   ├── Inicio.test.jsx     # Tests de la página de inicio
    │   └── Registro.test.jsx   # Tests del formulario de registro
    ├── components/
    │   ├── NavBar.jsx          # Header sticky + menú responsive (hamburguesa)
    │   ├── NavBar.test.jsx     # Test del menú móvil
    │   ├── Footer.jsx          # Footer con datos de contacto
    │   ├── ProductCard.jsx     # Tarjeta de producto con botón de carrito
    │   ├── ReviewCard.jsx      # Tarjeta de testimonio con estrellas
    │   ├── ScrollToTop.jsx     # Scroll a (0,0) al cambiar de ruta
    │   └── Inicio/             # Secciones del home
    │       ├── Bienvenida.jsx
    │       ├── DestacadosSeccion.jsx
    │       ├── QuienesSomosSeccion.jsx
    │       ├── ImpactoSeccion.jsx
    │       ├── TestimoniosSeccion.jsx
    │       └── ContactoSeccion.jsx
    ├── data/                   # Mock data (sin backend)
    │   ├── productos.js        # 9 productos del catálogo
    │   ├── destacados.js       # 3 productos destacados del home
    │   └── testimonios.js      # 3 testimonios de clientes
    ├── test/
    │   └── setup.js            # Setup global de Testing Library
    └── assets/images/          # Logo, hero, fotos de productos y clientes
```

## 🗺️ Rutas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | `Inicio` | Landing con hero, productos destacados, quiénes somos, impacto, testimonios y contacto |
| `/tienda` | `Tienda` | Catálogo completo de productos y reseñas de clientes |
| `/login` | `Login` | Formulario de inicio de sesión |
| `/registro` | `Registro` | Formulario de registro con beneficios promocionales |

## ✅ Funcionalidades implementadas

- **Navegación SPA** con React Router 7, enlaces activos (`NavLink`) y scroll automático al top al cambiar de ruta (`ScrollToTop`).
- **Menú responsive** con botón hamburguesa para móvil, accesible con `aria-expanded`.
- **Home institucional** con 6 secciones: bienvenida, productos destacados, quiénes somos (misión y visión), impacto comunitario, testimonios y contacto.
- **Catálogo de productos** con 9 productos en tarjetas (nombre, descripción, precio e imagen) y botón "Añadir al carrito".
- **Productos destacados** en el home con precios formateados en pesos chilenos (`Intl.NumberFormat`).
- **Testimonios de clientes** con calificación en estrellas, mostrados en Home y en Tienda.
- **Formulario de registro con lógica de beneficios:**
  - Código promocional `FELICES50` → 10% de descuento de por vida.
  - Correo con dominio `@duocuc.cl` → torta gratis en el cumpleaños.
  - Ambos beneficios se acumulan y se muestran al enviar el formulario.
- **Formulario de login** con campos de correo y contraseña (validación nativa de HTML).

## 📊 Datos

No hay backend ni peticiones HTTP. Los datos viven en `src/data/` como archivos JS:

| Archivo | Export | Contenido |
|---|---|---|
| `productos.js` | `PRODUCTOS_MOCK` | 9 productos (`id`, `nombre`, `descripcion`, `precio`, `imagen`) |
| `destacados.js` | `DESTACADOS_MOCK` | 3 productos destacados para el home |
| `testimonios.js` | `TESTIMONIOS_MOCK` | 3 testimonios con cliente anidado (`nombre`, `etiqueta`, `imagen`) |

Los precios están en CLP y las imágenes se resuelven dinámicamente desde `src/assets/images/`.

## 🎨 Estilos

- **CSS puro** en un único archivo global: `src/index.css` (~550 líneas), sin preprocesadores ni librerías de UI.
- **Tipografías:** [Lato](https://fonts.google.com/specimen/Lato) como fuente base y [Pacifico](https://fonts.google.com/specimen/Pacifico) para títulos y enlaces de navegación, cargadas desde Google Fonts.
- **Paleta:** fondo crema `#FFF5E1`, texto marrón `#5D4037`, navegación dorada `#D7A86E`, botones rosa `#FFC0CB` con texto `#A1283D`.
- **Componentes reutilizables:** clase `.tarjeta-base` para tarjetas de producto y testimonios.
- **Responsivo:** un breakpoint `max-width: 600px` que colapsa la navegación en menú hamburguesa y adapta el hero.

## 🧪 Tests

Los tests usan **Vitest** con entorno `jsdom` y Testing Library, configurados en `vite.config.js` con setup en `src/test/setup.js`.

```bash
npm test
```

| Archivo | Qué cubre | Tests |
|---|---|---|
| `src/pages/Inicio.test.jsx` | Imagen hero y presencia/orden de las 6 secciones | 4 |
| `src/pages/Registro.test.jsx` | Campos obligatorios y lógica de beneficios (FELICES50, `@duocuc.cl`, acumulación) | 5 |
| `src/components/NavBar.test.jsx` | Apertura/cierre del menú móvil y estado `aria-expanded` | 1 |

## 📋 Próximos pasos (a definir)

- **Carrito de compras** con estado global (Context API) conectado al botón "Añadir al carrito" del catálogo.
- **Autenticación real** para el formulario de login y protección de rutas.
- **Detalle de producto** (`/producto/:id`).
- **Buscador, filtros y ordenamiento** en la tienda.
- **Checkout** y proceso de compra.
- **Roles de usuario** (admin / cliente) con panel de administración.
- **Persistencia de datos** (backend o `localStorage`).
