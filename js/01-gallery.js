import { galleryItems } from "./gallery-items.js";
// Change code below this line

const createItem = ({ preview, original, description }) => {
  return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      loading="lazy"
      ${"loading" in HTMLImageElement.prototype ? `src = ${preview}` : ""}
      class="gallery__image lazyload"
      data-src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
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
    Making logic
*/

let instance;
const onKeyPressed = (event) => {
  if (event.code !== "Escape") {
    return;
  }
  instance?.close();
  document.removeEventListener("keydown", onKeyPressed);
};

const onContainerClick = (event) => {
  event.preventDefault();
  const { target } = event;
  if (!target.classList.contains("gallery__image")) {
    return;
  }

  instance = basicLightbox.create(
    `<img src="${target.dataset.source}" width="1280" />`
  );
  instance.show();
  document.addEventListener("keydown", onKeyPressed);
  instance.element().addEventListener("click", () => {
    document.removeEventListener("keydown", onKeyPressed);
  });
};

containerRef.addEventListener("click", onContainerClick);
