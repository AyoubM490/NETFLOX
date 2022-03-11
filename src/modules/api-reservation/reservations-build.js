import getreservations from './get-reservations.js';
import reservationCount from "./reservation-count.js"

const reservationBuild = async (containerClass, url, id, itemID, reservationContainer) => {
  const container = document.querySelector(`.${containerClass}`);

  const data = await getreservations(url, id, itemID);

  if (data.length === 0) {
    container.innerHTML = '<span class="res-item-default">no reservations history!</span>';
    reservationCount(reservationContainer, [])
  } else {
    reservationCount(reservationContainer, data)
    container.innerHTML = '';
    data.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('res-item-group');
      div.innerHTML += `<span class="res-item-name">${item.username} reserved this item</span>
            <span class="res-item-startdate">from: ${item.date_start}</span>
            <span class="res-item-enddate">to: ${item.date_end}</span>`;
      container.appendChild(div);
    });
  }
};

export default reservationBuild;
