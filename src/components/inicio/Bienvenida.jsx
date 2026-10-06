export function BienvenidaSection() {
    const handleScrollToNosotros = () => {
        const seccionNosotros = document.getElementById('nosotros');
        
        if (seccionNosotros) {
        seccionNosotros.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        }
    };
    return (
        <section id="bienvenida">
            <h2>¡Bienvenido a nuestra pastelería!</h2>
            <p>Creadores de la torta más <b>grande del mundo en 1995</b>. Hoy renovamos nuestra tienda digital para llevar los clásicos sabores de siempre directo a tu hogar.</p>
            <button type="button" id="go-nosotros" onClick={handleScrollToNosotros}>
                Sobre Nosotros
            </button>
        </section>
    )
}