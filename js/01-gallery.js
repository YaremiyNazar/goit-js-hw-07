import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector(".gallery");
const images = createImages(galleryItems);

listEl.insertAdjacentHTML("beforeend", images);

function createImages(images) {
    return images.map(({ preview, original, description }) => {
        const image = 
        `<div class = "gallery__item"> 
            <a class = "gallery__link" href = "${(original)}">
                <img
                    class = "gallery__image"
                    src = '${(preview)}' 
                    data-source='${(original)}' 
                    alt ='${description}'
                /> 
            </a>
        </div>`;
       return image;
}).join("")
}

function eventClick(event) {
    event.preventDefault()

    if (!event.target.classList.contains("gallery__image")) {
        return
    }
    const originalEl = event.target.dataset.source
    const instance = basicLightbox.create(
       `<img  src="${originalEl}" width=100% height=100% />`)
    instance.show()

}
   listEl.addEventListener("click", eventClick)

