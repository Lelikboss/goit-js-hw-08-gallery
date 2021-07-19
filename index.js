import galleryItems from "./app.js";

const galleryContainer = document.querySelector(".js-gallery");
const imageMarkup = createGalleryItems(galleryItems);
const lightboxEl = document.querySelector(".lightbox");
const closeBtnEl = document.querySelector('[data-action="close-lightbox"]');
const imageModalEl = document.querySelector(".lightbox__image");
galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);

galleryContainer.addEventListener("click", onGallaryContainerClick);
closeBtnEl.addEventListener("click", onCloseBtn);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a
            class="gallery__link"
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

// const arrImgAtr = [];
function onGallaryContainerClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  onClickImage(evt);
}

function onClickImage(evt) {
  const addLightboxClass = lightboxEl.classList.add("is-open");
  if (lightboxEl.classList.contains("is-open")) {
    console.log("hello");
  }
  //   const attrIMG = evt.target.dataset.source;
  //   console.log(evt.target.classList.contains("gallery__image"));
  //   imageModalEl.src = attrIMG;
  //   console.log(imageModalEl.src);
}
function onCloseBtn(e) {
  lightboxEl.classList.remove("is-open");
  if (!lightboxEl.classList.contains("is-open")) {
    console.log("good buy");
  }
}
//   href = "${original}";

//   const srcImg = evt.target.src;
//   console.log(srcImg);
//   imageModalEl.src = srcImg;
