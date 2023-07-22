import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

function createMarkup() { 
    let markup = "";
    for (let i = 0; i < galleryItems.length; i++) { 
        markup += `<li class = "gallery__item">
        <a class="gallery__link" href="${galleryItems[i].original}">
        <img
        class="gallery__image "
        src="${galleryItems[i].preview}" 
        alt="${galleryItems[i].description}"
        target="_parent">
        </a>
        </li>`;
    }
    gallery.innerHTML = markup;
}
createMarkup();

const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        close: true,
        closeText: '×',
        nav: true,
        navText: ['←', '→'],
        overlay: true,
        overlayOpacity: 0.5,
        showCounter: false,
        animationSlide: true,
        widthRatio: 0.8,
        heightRatio: 0.8,
    });
