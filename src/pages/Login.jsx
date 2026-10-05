import { Link } from 'react-router-dom';
import fullImg from '../assets/images/hero.png';

export function Login() {
  return (
    <>
    <img className="bienvenida-imagen" src={fullImg} alt="Torta Cuadrada de Frutas de la pastelería" />
    <main className="form-wrap">
        <div className="form-container tarjeta-base">
            <h2>Inicio de sesión</h2>
            <form id="registroForm">

                <div className="form-group">
                    <label for="correo">Correo Electrónico *</label>
                    <input type="email" id="correo" required placeholder="ejemplo@dominio.cl" />
                </div>

                <div className="form-group">
                    <label for="password">Contraseña *</label>
                    <input type="password" id="password" required placeholder="********" />
                </div>

                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
        <div>¿No tienes cuenta? <Link to="/registro" className="button small">Regístrate</Link></div>
    </main>
    </>
  );
}