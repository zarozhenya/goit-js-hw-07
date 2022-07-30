import { galleryItems } from "./gallery-items.js";
// Change code below this line

const createItem = ({ preview, original, description }) => {
  return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`;
};

const createMarkup = (items) => {
  return items.map(createItem).join("");
};

const containerRef = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

containerRef.insertAdjacentHTML("beforeend", markup);
