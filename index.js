import galleryItems from "./app.js";

const galleryContainer = document.querySelector(".js-gallery");
const lightboxEl = document.querySelector(".lightbox");
const closeBtnEl = document.querySelector('[data-action="close-lightbox"]');
const imageModalEl = document.querySelector(".lightbox__image");
const backdropEl = document.querySelector(".lightbox__overlay");
const imageMarkup = createGalleryItems(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);
galleryContainer.addEventListener("click", onGallaryContainerClick);
closeBtnEl.addEventListener("click", onCloseBtn);
backdropEl.addEventListener("click", onBackdropClick);
function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }, index) => {
      return `
    <li class="gallery__item">
        <a
            class="gallery__link"
            href = "${original}";

        >
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            data-index="${index}"
            />
        </a>
</li>
        `;
    })
    .join("");
}
function onGallaryContainerClick(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  window.addEventListener("keydown", onEscapePress);
  onClickImage(e);
}
function onClickImage(e) {
  e.preventDefault();
  imageModalEl.dataset.index = e.target.dataset.index;
  addClassIsOpen();
  window.addEventListener("keydown", toTheSide);
  addImgAttribute(e);
}
function addImgAttribute(e) {
  const attrImg = e.target.dataset.source;
  imageModalEl.src = attrImg;
}
function addClassIsOpen() {
  lightboxEl.classList.add("is-open");
}
function onCloseBtn() {
  lightboxEl.classList.remove("is-open");
  emptyImgAtribute();
}
function emptyImgAtribute() {
  if (!lightboxEl.classList.contains("is-open")) {
    imageModalEl.setAttribute("src", "");
  }
}
function onBackdropClick(e) {
  onCloseBtn(e);
}
function onEscapePress(e) {
  if (e.code === "Escape") {
    onCloseBtn(e);
  }
}
function findNewIndex(index, i = 0) {
  imageModalEl.dataset.index = `${index + i}`;
  imageModalEl.src = galleryItems[index + i].original;
}
function toTheSide(e) {
  if (e.code === "ArrowLeft") {
    onArrowLeft();
  }
  if (e.code === "ArrowRight") {
    onArrowRight();
  }
}
function onArrowLeft() {
  let index = Number(imageModalEl.dataset.index);
  if (index === 0) {
    findNewIndex(galleryItems.length - 1);
    return;
  }
  findNewIndex(index, -1);
}
function onArrowRight() {
  let index = Number(imageModalEl.dataset.index);
  if (index === galleryItems.length - 1) {
    findNewIndex(0);
    return;
  }
  findNewIndex(index, 1);
}
