import data from './../data/photos';
import { loadImage } from './loadImage';

const slideClick = (e) => {
    let ruta, nombre, descripcion;
    const id = parseInt(e.target.dataset.id);
    const galeria = document.getElementById('galeria');
    const categoryActive = galeria.dataset.categoria;
    // console.log('Hiciste click en un slide', id, categoryActive);

    data.photos[categoryActive].forEach((foto) => {
        if (foto.id === id) {
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });
    loadImage(id, nombre, ruta, descripcion);
};
export default slideClick;