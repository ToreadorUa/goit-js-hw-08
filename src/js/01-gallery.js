// Add imports above this line
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('ul.gallery');


const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item" style = "list-style-type: none">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`);
galleryEl.insertAdjacentHTML("afterbegin", markup.join(""));

var lightbox = new SimpleLightbox('.gallery a', {
   captionsData: "alt",
   captionDelay: 250
});

console.dir(galleryEl);
