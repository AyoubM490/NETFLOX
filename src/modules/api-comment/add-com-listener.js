import postComment from './post-comment.js';

const addCommentListener = (containerClass, updateComments, url, id, itemID, formClass) => {
  const form = document.querySelector(`.${formClass}`);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const comment = event.target[1].value;
    await postComment(url, id, itemID, name, comment);
    await updateComments(containerClass, url, id, itemID);
  });
};

export default addCommentListener;
