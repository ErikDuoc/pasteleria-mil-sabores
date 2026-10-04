import { Routes, Route, Link } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Registro } from './pages/Registro'

export function App() {
  return (
    <div>
      {/* Menú o barra de navegación */}
      <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#f0f0f0' }}>
        <Link to="/">Inicio</Link>
        <Link to="/Registro">Registro</Link>
      </nav>

      {/* Área dinámica donde se renderizan las páginas */}
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </main>
    </div>
  )
}

export default App