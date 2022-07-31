import { galleryItems } from './gallery-items.js';
// Change code below this line
let instance;
console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function createGalleryMarkup(items) { 
    return items
        .map(
            (item) => `<div class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                        class="gallery__image"
                        src="${item.preview}"
                        data-source="${item.original}"
                        alt="${item.description}"
                    />
                </a>
            </div>`
        )
        .join("");    
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

divRef.innerHTML = '';    // cleaning
divRef.innerHTML = addGalleryMarkup;

divRef.addEventListener('click', onImageClick);

function onImageClick(evt) { 
    blockStandartAction(evt);
    if (evt.target.nodeName !== "IMG") { 
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" ></img>`
    );
    instance.show();

    divRef.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
            instance.close();
         }
    });
}

function blockStandartAction(evt) { 
    evt.preventDefault();
}