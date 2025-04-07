import closeGallery from "./closeGallery";
import slideClick from "./slideClick";
import { loadPreviousNext } from "./loadImage";
import carousel from "./carousel";

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

    // Siguiente imagen - Next
    if (button?.dataset?.accion === 'siguiente-imagen') {
        loadPreviousNext('siguiente');
    }
    // Anterior imagen - Previous
    if (button?.dataset?.accion === 'anterior-imagen') {
        loadPreviousNext('anterior');
    }

    // Carousel Adelante
    if (button?.dataset?.accion === 'siguiente-slide') {
        carousel('adelante')
    }
    // Carousel Atras
    if (button?.dataset?.accion === 'anterior-slide') {
        carousel('atras');
    }
});