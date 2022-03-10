import postreservation from './post-reservation.js';

const addReservationListener = (containerClass, updateReservations, url, id, itemID, formClass) => {
  const form = document.querySelector(`.${formClass}`);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const startDate = event.target[1].value;
    const endDate = event.target[2].value;
    await postreservation(url, id, itemID, name, startDate, endDate);
    await updateReservations(containerClass, url, id, itemID);
  });
};

export default addReservationListener;
