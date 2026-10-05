import { useState } from 'react';
import { Link } from 'react-router-dom';
import fullImg from '../assets/images/hero.png';

export function Registro() {
  const [correo, setCorreo] = useState('');
  const [codigoPromocional, setCodigoPromocional] = useState('');
  const [beneficios, setBeneficios] = useState([]);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Captura de datos
    const correoTrimmed = correo.trim();
    const codigoTrimmed = codigoPromocional.trim();

    // Listado donde se acumularán las promociones obtenidas
    const listaBeneficios = [];

    // 1. Evaluación Código Promocional ("FELICES50")
    if (codigoTrimmed.toUpperCase() === 'FELICES50') {
      listaBeneficios.push('10% de descuento de por vida aplicado por código FELICES50.');
    }

    // 2. Evaluación Estudiantes @duocuc.cl
    const esCorreoDuoc = correoTrimmed.toLowerCase().endsWith('@duocuc.cl');

    if (esCorreoDuoc) {
      listaBeneficios.push('Torta gratis en tu cumpleaños por ser estudiante de Duoc UC.');
    }

    // Mensaje por defecto si no hay promociones acumuladas
    if (listaBeneficios.length === 0) {
      listaBeneficios.push('Registro exitoso sin promociones especiales aplicadas.');
    }

    setBeneficios(listaBeneficios);
    setMostrarResultado(true);
  };

  return (
    <>
      <img className="bienvenida-imagen" src={fullImg} alt="Torta Cuadrada de Frutas de la pastelería" />
      <main className="form-wrap">
        <div className="form-container tarjeta-base">
          <h2>Formulario de Registro</h2>
          <form id="registroForm" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="correo">Correo Electrónico *</label>
              <input
                type="email"
                id="correo"
                required
                placeholder="ejemplo@dominio.cl"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña *</label>
              <input
                type="password"
                id="password"
                required
                placeholder="********"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento *</label>
              <input
                type="date"
                id="fechaNacimiento"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="codigoPromocional">Código Promocional (Opcional)</label>
              <input
                type="text"
                id="codigoPromocional"
                placeholder="Ej: FELICES50"
                value={codigoPromocional}
                onChange={(e) => setCodigoPromocional(e.target.value)}
              />
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="terminos"
                required
              />
              <label htmlFor="terminos">Acepto los términos y condiciones *</label>
            </div>

            <button type="submit">Registrarse</button>
          </form>

          {mostrarResultado && (
            <div id="resultadoBeneficios" className="benefits-box">
              <h3>¡Registro exitoso! Tus beneficios activados:</h3>
              <ul id="listaBeneficios">
                {beneficios.map((beneficio, index) => (
                  <li key={index}>{beneficio}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          ¿Ya tienes cuenta? <Link to="/login" className="button small">Inicia sesión</Link>
        </div>
      </main>
    </>
  );
}