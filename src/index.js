import './css-reset.css';
import './style.css';
import getShows from './modules/getShows.js';
import buildShows from './modules/buildShows.js';

const items = document.querySelector('.items');

window.addEventListener('DOMContentLoaded', async () => {
  const shows = await getShows();
  const sixShows = shows.slice(0, 6);

  buildShows(sixShows, items);
});
