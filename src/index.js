import './css-reset.css';
import './style.css';
import './popup-sttyling.css';
import getShows from './modules/getShows.js';
import buildShows from './modules/buildShows.js';
import { showsCount } from './modules/counters.js';
import itemListener from './modules/item-eventlistener.js';

const itemsTitle = document.querySelector('.items-title');
const items = document.querySelector('.items');
const popupContainer = document.querySelector('.popup');
const modalContainer = document.querySelector('.modal-body');
const closePopup = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');
const popupCloseIcon = document.querySelector('.close-icon');

window.onclick = (e) => {
  if (
    e.target === popupContainer
    || e.target === closePopup
    || e.target === popupCloseIcon
  ) {
    modalContent.classList.remove('popup-animation');
    modalContent.classList.add('popup-close-animation');
    setTimeout(() => {
      popupContainer.style.display = 'none';
      modalContent.classList.remove('popup-close-animation');
      modalContent.classList.add('popup-animation');
    }, 500);
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  const shows = await getShows();
  const sixShows = shows.slice(0, 6);

  itemsTitle.innerHTML = `TV SHOWS (${showsCount(sixShows)})`;
  await buildShows(sixShows, items);
  itemListener(popupContainer, modalContainer, sixShows, 'comment-btn');
});
