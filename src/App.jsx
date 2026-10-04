import { Routes, Route } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Login } from './pages/Login'
import { Tienda } from './pages/Tienda'
import { Registro } from './pages/Registro'
import { NavBar } from './components/NavBar'

export function App() {
  return (
    <div>
      {/* Navegación */}
      <NavBar />

      {/* Renderizado de páginas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  )
}

export default App