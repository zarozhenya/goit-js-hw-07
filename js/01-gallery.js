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
  const linkRef = target.closest(".gallery__link");
  const originalImage = linkRef.href;

  instance = basicLightbox.create(
    `<img src="${originalImage}" width="1280" />`
  );
  instance.show();
  document.addEventListener("keydown", onKeyPressed);
  instance.element().addEventListener("click", () => {
    document.removeEventListener("keydown", onKeyPressed);
  });
};

containerRef.addEventListener("click", onContainerClick);
