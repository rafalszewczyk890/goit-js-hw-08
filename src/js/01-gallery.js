// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  gallery.insertAdjacentHTML(
    'afterbegin',
    `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt="${item.description}"/>
</a>`
  );
});

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
