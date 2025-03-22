const gallery = document.getElementById('galeria');
const closeGallery = () => {
    gallery.classList.remove('galeria--active');
    // Regresando el scroll en el sitio
    document.body.style.overflow = '';
};

export default closeGallery;