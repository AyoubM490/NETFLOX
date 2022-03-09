import './css-reset.css';
import './style.css';
import getShows from './modules/getShows.js';
import buildShows from './modules/buildShows.js';
import { showsCount } from './modules/counters.js';

const itemsTitle = document.querySelector('.items-title');
const items = document.querySelector('.items');

window.addEventListener('DOMContentLoaded', async () => {
  const shows = await getShows();
  const sixShows = shows.slice(0, 6);

  itemsTitle.innerHTML = `TV SHOWS (${showsCount(sixShows)})`;
  await buildShows(sixShows, items);
});
