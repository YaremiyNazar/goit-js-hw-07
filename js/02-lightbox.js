import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector(".gallery");
const images = createImages(galleryItems);

listEl.insertAdjacentHTML("beforeend", images);

function createImages(images) {
    return images.map(({ preview, original, description }) => {
        const image = 
        `<a class = "gallery__item" href = "${(original)}">
                <img
                    class = "gallery__image"
                    src = '${(preview)}' 
                    alt ='${description}'
                /> 
            </a>`;
       return image;
}).join("")
}
const lightbox = new SimpleLightbox(".gallery a", {captionsData: "alt", captionDelay: 250 });
