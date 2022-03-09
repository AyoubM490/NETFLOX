import { getLikesCount } from './counters.js';
import getLikes from './getInvolvement.js';
import postLikes from './postInvolvement.js';

const buildShows = async (showsList, container) => {
  const listOfLikes = await getLikes();

  for (let i = 0; i <= showsList.length - 1; i += 1) {
    const itemContainer = document.createElement('div');
    itemContainer.id = `movie${showsList[i].id}`;

    const img = document.createElement('img');
    img.src = showsList[i].image.medium;
    img.style.width = '20rem';
    itemContainer.appendChild(img);

    const titleLike = document.createElement('div');
    titleLike.classList.add('like-wrap');
    const title = document.createElement('h3');
    const likeBtn = document.createElement('i');
    const likeDisplay = document.createElement('span');
    likeDisplay.innerHTML = '0 likes';

    likeBtn.classList.add('bx');
    likeBtn.classList.add('bx-heart');
    likeBtn.classList.add('bx-sm');
    likeBtn.style.cursor = 'pointer';

    title.textContent = `${showsList[i].name}`;

    titleLike.style.margin = '5px';
    titleLike.style.textAlign = 'center';

    titleLike.appendChild(likeBtn);
    titleLike.appendChild(likeDisplay);
    itemContainer.append(title, titleLike);

    const commentBtn = document.createElement('div');
    commentBtn.innerHTML = '<button>Comment</button>';
    itemContainer.appendChild(commentBtn);

    container.appendChild(itemContainer);

    getLikesCount(likeBtn, listOfLikes, likeDisplay);

    likeBtn.addEventListener('click', async (e) => {
      await postLikes(e.target.id);
      const getReq = await getLikes();

      getLikesCount(e.target, getReq, likeDisplay);
    });
  }
};

export default buildShows;
