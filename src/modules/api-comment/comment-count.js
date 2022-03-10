const commentCount = (commentContainerClass, arr) => {
  const commentContainer = document.querySelector(`.${commentContainerClass}`);
  const count = arr.length;
  commentContainer.innerHTML = count;
};

export default commentCount;
