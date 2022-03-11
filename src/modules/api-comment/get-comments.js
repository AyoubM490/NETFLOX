const getcomments = async (url, id, itemID) => {
  const response = await fetch(`${url}${id}/comments?item_id=${itemID}`);

  const data = await response.json();
  if (data.error) {
    return [];
  } return data;
};

export default getcomments;
