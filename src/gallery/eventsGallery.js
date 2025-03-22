import closeGallery from "./closeGallery";
import slideClick from "./slideClick";

const gallery = document.getElementById('galeria');
gallery.addEventListener('click', (e) => {
    const button = e.target.closest('button');

    // Cerrar galeria
    if (button?.dataset?.accion === 'cerrar-galeria') {
        closeGallery();
    }

    // Carousel slide click
    if (e.target.dataset.id) {
        slideClick(e);
    }
});