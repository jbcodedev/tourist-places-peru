'use strict';

var data = {
    photos: {
        machupichu: [
            {
                id: 1,
                nombre: 'Machu Pichu 1',
                descripcion:
                    'Machu Pichu 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/machupichu/1.jpg',
            },
            {
                id: 2,
                nombre: 'Machu Pichu 2',
                descripcion:
                    'Machu Pichu 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/machupichu/2.jpg',
            },
            {
                id: 3,
                nombre: 'Machu Pichu 3',
                descripcion:
                    'Machu Pichu 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/machupichu/3.jpg',
            },
            {
                id: 4,
                nombre: 'Machu Pichu 4',
                descripcion:
                    'Machu Pichu 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/machupichu/4.jpg',
            },
            {
                id: 5,
                nombre: 'Machu Pichu 5',
                descripcion:
                    'Machu Pichu 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/machupichu/5.jpg',
            },
        ],
        cuzco: [
            {
                id: 6,
                nombre: 'Cuzco 1',
                descripcion:
                    'Cuzco 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/cuzco/1.jpg',
            },
            {
                id: 7,
                nombre: 'Cuzco 2',
                descripcion:
                    'Cuzco 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/cuzco/2.jpg',
            },
            {
                id: 8,
                nombre: 'Cuzco 3',
                descripcion:
                    'Cuzco 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/cuzco/3.jpg',
            },
            {
                id: 9,
                nombre: 'Cuzco 4',
                descripcion:
                    'Cuzco 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/cuzco/4.jpg',
            },
            {
                id: 10,
                nombre: 'Cuzco 5',
                descripcion:
                    'Cuzco 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/cuzco/5.jpg',
            },
        ],
        iquitos: [
            {
                id: 11,
                nombre: 'Iquitos 1',
                descripcion:
                    'Iquitos 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/iquitos/1.jpg',
            },
            {
                id: 12,
                nombre: 'Iquitos 2',
                descripcion:
                    'Iquitos 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/iquitos/2.jpg',
            },
            {
                id: 13,
                nombre: 'Iquitos 3',
                descripcion:
                    'Iquitos 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/iquitos/3.jpg',
            },
            {
                id: 14,
                nombre: 'Iquitos 4',
                descripcion:
                    'Iquitos 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/iquitos/4.jpg',
            },
            {
                id: 15,
                nombre: 'Iquitos 5',
                descripcion:
                    'Iquitos 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/iquitos/5.jpg',
            },
        ],
        valledelcolca: [
            {
                id: 16,
                nombre: 'Valle del Colca 1',
                descripcion:
                    'Valle del Colca 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/valledelcolca/1.jpg',
            },
            {
                id: 17,
                nombre: 'Valle del Colca 2',
                descripcion:
                    'Valle del Colca 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/valledelcolca/2.jpg',
            },
            {
                id: 18,
                nombre: 'Valle del Colca 3',
                descripcion:
                    'Valle del Colca 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/valledelcolca/3.jpg',
            },
            {
                id: 19,
                nombre: 'Valle del Colca 4',
                descripcion:
                    'Valle del Colca 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/valledelcolca/4.jpg',
            },
            {
                id: 20,
                nombre: 'Valle del Colca 5',
                descripcion:
                    'Valle del Colca 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/valledelcolca/5.jpg',
            },
        ],
        lagotiticaca: [
            {
                id: 21,
                nombre: 'Lago Titicaca 1',
                descripcion:
                    'Lago Titicaca 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/lagotiticaca/1.jpg',
            },
            {
                id: 22,
                nombre: 'Lago Titicaca 2',
                descripcion:
                    'Lago Titicaca 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/lagotiticaca/2.jpg',
            },
            {
                id: 23,
                nombre: 'Lago Titicaca 3',
                descripcion:
                    'Lago Titicaca 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/lagotiticaca/3.jpg',
            },
            {
                id: 24,
                nombre: 'Lago Titicaca 4',
                descripcion:
                    'Lago Titicaca 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/lagotiticaca/4.jpg',
            },
            {
                id: 25,
                nombre: 'Lago Titicaca 5',
                descripcion:
                    'Lago Titicaca 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/lagotiticaca/5.jpg',
            },
        ],
        paracas: [
            {
                id: 26,
                nombre: 'Paracas 1',
                descripcion:
                    'Paracas 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/paracas/1.jpg',
            },
            {
                id: 27,
                nombre: 'Paracas 2',
                descripcion:
                    'Paracas 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/paracas/2.jpg',
            },
            {
                id: 28,
                nombre: 'Paracas 3',
                descripcion:
                    'Paracas 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/paracas/3.jpg',
            },
            {
                id: 29,
                nombre: 'Paracas 4',
                descripcion:
                    'Paracas 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/paracas/4.jpg',
            },
            {
                id: 30,
                nombre: 'Paracas 5',
                descripcion:
                    'Paracas 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                ruta: './img/paracas/5.jpg',
            },
        ],
    },
};

const { photos } = data;

var dataCategories = {
    categories: [
        { id: 'machupichu', name: 'Machu Pichu', numberPhotos: photos['machupichu'].length, coverImage: './img/machupichu.jpg' },
        { id: 'cuzco', name: 'Cuzco', numberPhotos: photos['cuzco'].length, coverImage: './img/cuzco.jpg' },
        { id: 'iquitos', name: 'Iquitos', numberPhotos: photos['iquitos'].length, coverImage: './img/iquitos.jpg' },
        { id: 'valledelcolca', name: 'Valle del Colca', numberPhotos: photos['valledelcolca'].length, coverImage: './img/valledelcolca.jpg' },
        { id: 'lagotiticaca', name: 'Machu Pichu', numberPhotos: photos['lagotiticaca'].length, coverImage: './img/lagotiticaca.jpg' },
        { id: 'paracas', name: 'Paracas', numberPhotos: photos['paracas'].length, coverImage: './img/paracas.jpg' },
    ]
};

const { categories } = dataCategories;
const containerCategories = document.getElementById('categorias');

categories.forEach((category) => {
    const newCategory = document.createElement('a');
    const template = `
        <img class="categoria__img" src="${category.coverImage}" alt="" />
		<div class="categoria__datos">
		<p class="categoria__nombre">${category.name}</p>
		<p class="categoria__numero-fotos">${category.numberPhotos} fotos</p>
		</div>
    `;
    newCategory.innerHTML = template;
    newCategory.classList.add('categoria');
    newCategory.href = '#';
    newCategory.dataset.category = category.id;

    containerCategories.append(newCategory);
});
