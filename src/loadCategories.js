import dataCategories from './data/categories';
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