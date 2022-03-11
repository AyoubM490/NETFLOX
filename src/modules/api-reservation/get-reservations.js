const getreservations = async (url, id, itemID) => {
  const response = await fetch(`${url}${id}/reservations?item_id=${itemID}`);
  const data = await response.json();
  if (data.error) {
    return [];
  } return data;
};

export default getreservations;
