import galleryItems from "./app.js";

const galleryContainer = document.querySelector(".js-gallery");
const imageMarkup = createGalleryItems(galleryItems);
const lightboxEl = document.querySelector(".lightbox");
const closeBtnEl = document.querySelector('[data-action="close-lightbox"]');
const imageModalEl = document.querySelector(".lightbox__image");
const imgItemEl = document.querySelector(".gallery__item");
const backdropEl = document.querySelector(".lightbox__overlay");
const galleryImgEl = document.querySelector(".gallery__image");
galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);
galleryContainer.addEventListener("click", onGallaryContainerClick);
closeBtnEl.addEventListener("click", onCloseBtn);
backdropEl.addEventListener("click", onBackdropClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
            />
        </a>
</li>
        `;
    })
    .join("");
}
console.log(imageModalEl.dataset.index);
function onGallaryContainerClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  window.addEventListener("keydown", onEscapePress);
  onClickImage(evt);
}

function onClickImage(evt) {
  evt.preventDefault();
  addClassIsOpen();
  addImgAttribute(evt);
}
function addImgAttribute(evt) {
  const attrImg = evt.target.dataset.source;
  console.log(evt.target.classList.contains("gallery__image"));
  imageModalEl.src = attrImg;
  console.log(imageModalEl.src);
}
function addClassIsOpen() {
  lightboxEl.classList.add("is-open");
}
function onCloseBtn(e) {
  lightboxEl.classList.remove("is-open");
  window.removeEventListener("keydown", onEscapePress);
  emptyImgAtribute();
}
function emptyImgAtribute() {
  if (!lightboxEl.classList.contains("is-open")) {
    imageModalEl.setAttribute("src", "");
    console.log(imageModalEl);
  }
}
function onBackdropClick(e) {
  console.log("ok");
  onCloseBtn(e);
}

function onEscapePress(e) {
  console.log(e);
  if (e.code === "Escape") {
    onCloseBtn(e);
  }
}
// function rightTurn() {
//   if (activImg.length < galleryItems.length) {
//     console.log(activImg.length);
//   }
// }
imageModalEl.setAttribute("src", "");
console.log(imageModalEl);
// window.addEventListener("keydown", onRightArrowPress);
// function onRightArrowPress(e) {
//   if (e.code === "ArrowRight") {
//     for (let i = 0; i < galleryItems.length; i += 1) {
//       imageModalEl.setAttribute("src", "");
//       console.log(imageModalEl);
//     }
//     console.log(e);
//     console.log(imageModalEl.src);
//   }
//   // for (let i = 0; i < galleryItems.length; i += 1) {
//   // }
// }
