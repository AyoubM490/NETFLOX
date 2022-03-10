const saveStars = (elementId, rate) => {
  const stringfiedRate = JSON.stringify(rate);
  localStorage.setItem(elementId, stringfiedRate);
};

const getStars = (ElementId) => {
  const parsedId = JSON.parse(localStorage.getItem(ElementId));
  return parsedId;
};

const starRating = (stars, post, id) => {
  stars.onclick = async (e) => {
    e.preventDefault();
    const inputSelector = document.querySelector(
      `#${e.target.getAttribute('for')}`,
    );
    inputSelector.checked = true;
    saveStars(id, e.target.getAttribute('for'));

    await setTimeout(() => {
      stars.style.display = 'none';
    }, 500);
    setTimeout(() => {
      post.style.display = 'block';
    }, 500);

    setTimeout(() => {
      stars.style.display = 'block';
      post.style.display = 'none';
    }, 2000);
  };
};

export { starRating, getStars };
