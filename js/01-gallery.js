import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.addEventListener("click", handleClick);

function createMarkup() { 
    let markup = "";
    for (let i = 0; i < galleryItems.length; i++) { 
        markup += `<li class = "gallery__item">
        <a class="gallery__link" href="${galleryItems[i].original}">
        <img
        class="gallery__image "
        src="${galleryItems[i].preview}" 
        data-source="${galleryItems[i].original}" 
        alt="${galleryItems[i].description}"
        target="_parent">
        </a>
        </li>`;
    }
    gallery.innerHTML = markup;
}
createMarkup();

function handleClick(event) {   
    event.preventDefault();
    for (let i = 0; i < galleryItems.length; i++) { 
            if (event.target.getAttribute("src") === galleryItems[i].preview) {
        const instance = basicLightbox.create(`<img src="${galleryItems[i].original}" width="800" height="600">`);
                instance.show()
                document.body.addEventListener("keydown", (e) => {
                    if (e.code === "Escape") {
                        instance.close();
                    }
                });
            }
    }   
}

