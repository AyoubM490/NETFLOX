const postComment = async (url, id, itemID, name, comment) => {
  await fetch(`${url}${id}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${itemID}`,
      username: `${name}`,
      comment: `${comment}`,
    }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
};

export default postComment;
