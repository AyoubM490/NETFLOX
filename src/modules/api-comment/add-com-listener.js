import postComment from './post-comment.js';

const addCommentListener = (containerClass, updateComments, url, id, itemID, formClass, commentContainerClass) => {
  const form = document.querySelector(`.${formClass}`);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const comment = event.target[1].value;
    await postComment(url, id, itemID, name, comment);
    await updateComments(containerClass, url, id, itemID, commentContainerClass);
  });
};

export default addCommentListener;
