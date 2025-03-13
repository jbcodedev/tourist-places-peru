import data from './photos';
const { photos } = data;

export default {
    categories: [
        { id: 'machupichu', name: 'Machu Pichu', numberPhotos: photos['machupichu'].length, coverImage: './img/machupichu.jpg' },
        { id: 'cuzco', name: 'Cuzco', numberPhotos: photos['cuzco'].length, coverImage: './img/cuzco.jpg' },
        { id: 'iquitos', name: 'Iquitos', numberPhotos: photos['iquitos'].length, coverImage: './img/iquitos.jpg' },
        { id: 'valledelcolca', name: 'Valle del Colca', numberPhotos: photos['valledelcolca'].length, coverImage: './img/valledelcolca.jpg' },
        { id: 'lagotiticaca', name: 'Machu Pichu', numberPhotos: photos['lagotiticaca'].length, coverImage: './img/lagotiticaca.jpg' },
        { id: 'paracas', name: 'Paracas', numberPhotos: photos['paracas'].length, coverImage: './img/paracas.jpg' },
    ]
}