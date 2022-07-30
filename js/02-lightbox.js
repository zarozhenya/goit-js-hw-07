import { galleryItems } from "./gallery-items.js";
// Change code below this line

const createItem = ({ preview, original, description }) => {
  return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
};

const createMarkup = (items) => {
  return items.map(createItem).join("");
};

/*
    Creating markup
*/

const containerRef = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

containerRef.insertAdjacentHTML("beforeend", markup);

/*
    Adding logic
*/

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionSelector: (el) => el.querySelector(".gallery__image"),
  captionDelay: 250,
});
