const gallery = document.getElementById('galeria');
const carousel = (direction) => {
    // Objeto con opciones del observador
    const options = {
        root: document.querySelector('.galeria__carousel'),
        rootMargin: '0px',
        threshold: 0.9,
    }
    // Instancia de IntersectionObserver y callback con funcion cada que hay cambios de los elementos vigilados
    const observer = new IntersectionObserver((inputs) => {
        const slidesVisibles = inputs.filter((input) => {
            // Por cada entrada, si es visible
            if (input.isIntersecting === true) {
                return input;
            }
        });
        if (direction === 'atras') {
            // Obteniendo el primer slide visible por medio de su index
            const firstSlideVisible = slidesVisibles[0];
            const indexFirstSlideVisible = inputs.indexOf(firstSlideVisible);

            if (indexFirstSlideVisible >= 1) {
                inputs[indexFirstSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start',
                });
            }
        } else if (direction === 'adelante') {
            // Obteniendo el ultimo slide visible por medio de su index
            const lastSlideVisible = slidesVisibles[slidesVisibles.length - 1];
            const indexLastSlideVisible = inputs.indexOf(lastSlideVisible);

            if (inputs.length - 1 > indexLastSlideVisible) {
                // Para acceder al siguiente slide y realizar scroll
                inputs[indexLastSlideVisible + 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start',
                });
            };
        };

        const slides = gallery.querySelectorAll('.galeria__carousel-slide');
        // Por cada slide se ejecuta una funcion para dejar de observar
        slides.forEach((slide) => {
            observer.unobserve(slide);
        });
    }, options);
    const slides = gallery.querySelectorAll('.galeria__carousel-slide');
    // Por cada slide se ejecuta una funcion para observar
    slides.forEach((slide) => {
        observer.observe(slide);
    });
};
export default carousel;