import dataPhotos from './data/photos';
const containerCategories = document.getElementById('categorias');
const gallery = document.getElementById('galeria');

containerCategories.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.closest('a')) {
        gallery.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        const categoryActive = e.target.dataset.categoria;

        const photosActive = dataPhotos.photos[categoryActive];

        photosActive.forEach((foto) => {
            const slide = `
            <a href="#" class="galeria__carousel-slide">
				<img class="galeria__carousel-image" src="${foto.ruta}" alt="" />
			</a>
            `;
            gallery.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
        gallery.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }
});