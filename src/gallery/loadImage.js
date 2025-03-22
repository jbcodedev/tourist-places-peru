import data from "../data/photos";

const gallery = document.getElementById('galeria');
const loadImage = (id, nombre, ruta, descripcion) => {
    gallery.querySelector('.galeria__imagen').src = ruta;
    gallery.querySelector('.galeria__imagen').dataset.idImagen = id;
    gallery.querySelector('.galeria__titulo').innerText = nombre;
    gallery.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoryActual = gallery.dataset.categoria;
    const photos = data.photos[categoryActual];

    let indexImageActual;
    photos.forEach((foto, index) => {
        if (foto.id === id) {
            indexImageActual = index;
        }
    });

    // Marcando la image del carousel como activa
    if (gallery.querySelectorAll('.galeria__carousel-slide').length > 0) {
        // Eliminando la clase active de cualquier slide
        gallery.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        // Agrega la clase active
        gallery.querySelectorAll('.galeria__carousel-slide')[indexImageActual].classList.add('galeria__carousel-slide--active');
    }
}
export { loadImage };