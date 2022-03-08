const buildShows = (showsList, container) => {
  for (let i = 0; i <= showsList.length - 1; i += 1) {
    const itemContainer = document.createElement('div');
    itemContainer.id = `movie${showsList[i].id}`;

    const img = document.createElement('img');
    img.src = showsList[i].image.medium;
    img.style.width = '20rem';
    itemContainer.appendChild(img);

    const titleLike = document.createElement('div');
    const title = document.createElement('h3');
    const likeBtn = document.createElement('i');
    likeBtn.classList.add('bx');
    likeBtn.classList.add('bx-heart');
    likeBtn.classList.add('bx-sm');

    title.textContent = `${showsList[i].name}`;

    titleLike.style.margin = '5px';
    titleLike.style.textAlign = 'center';

    titleLike.appendChild(title);
    titleLike.appendChild(likeBtn);
    itemContainer.appendChild(titleLike);

    const commentBtn = document.createElement('div');
    commentBtn.innerHTML = '<button>Comment</button>';
    itemContainer.appendChild(commentBtn);

    container.appendChild(itemContainer);
  }
};

export default buildShows;
