import dataPhotos from './data/photos';
import { loadImage } from './gallery/loadImage';
const containerCategories = document.getElementById('categorias');
const gallery = document.getElementById('galeria');

containerCategories.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.closest('a')) {
        gallery.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        const categoryActive = e.target.closest('a').dataset.categoria;
        gallery.dataset.categoria = categoryActive;

        const photosActive = dataPhotos.photos[categoryActive];

        // funcionalidad para eliminar fotos anteriores
        const carousel = gallery.querySelector('.galeria__carousel-slides');
        carousel.innerHTML = '';

        // Destructurando para extraer la informacion de la foto seleccionada
        // console.log(photosActive[0]);
        const { id, nombre, ruta, descripcion } = photosActive[0];
        // Llamando a la funcion para cargar la imagen
        loadImage(id, nombre, ruta, descripcion);

        photosActive.forEach((foto) => {
            const slide = `
            <a href="#" class="galeria__carousel-slide">
				<img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt="" />
			</a>
            `;
            gallery.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
        gallery.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }
});