import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Mueve el scroll al inicio (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Evita renderizar en la interfaz
}