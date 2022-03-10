const postreservation = async (url, id, itemID, name, startDate, endDate) => {
  await fetch(`${url}${id}/reservations/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${itemID}`,
      username: `${name}`,
      date_start: `${startDate}`,
      date_end: `${endDate}`,
    }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
};

export default postreservation;
