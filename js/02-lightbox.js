import { galleryItems } from './gallery-items.js';

// Selectăm containerul galeriei
const galleryContainer = document.querySelector('.gallery');

// Generăm marcajul pentru galerie
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `
  )
  .join('');

// Adăugăm marcajul în DOM
galleryContainer.innerHTML = galleryMarkup;

// Inițializăm SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Textul alternativ va fi afișat ca subtitlu
  captionDelay: 250,   // Subtitlul apare după 250 ms
});

