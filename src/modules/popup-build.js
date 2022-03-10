import { starRating, getStars } from './user-star-rating.js';

const insertPopup = (popupContainer, modalContainer, dataArray, index) => {
  modalContainer.innerHTML = '';
  const dataElement = dataArray[index - 1];
  const modal = document.createElement('ul');
  modal.classList.add('item-container');
  modal.setAttribute('item', `${index}`);
  modal.innerHTML = `<li class="item-description-container">
    <ul class="item-description">
      <li class="company-likes-container">
        <ul class="company-likes">
            <li class="likes">
                <i class="bx bx-heart bx-xs bx-burst-hover"></i>
              </li>
            <li class="company">${dataElement.network.name}</li>

        </ul>
      </li>
      <li class="item-title"><a href="${dataElement.url}">${
  dataElement.name
}</a> </li>
      <li class="item-genres-container">
        <ul class="item-genres">
        </ul>
      </li>
      <li class="item-details-container">
        <ul class="item-details">
          <li class="started">Premiered: ${dataElement.premiered}</li>
          <li class="status">${dataElement.status} ${
  dataElement.status === 'Ended' ? `: ${dataElement.ended}` : ''
}</li>
        </ul>
        <ul class="rating-container">
            <li class="item-rating"><span class="imdb">IMDB: </span><span>(${
  dataElement.rating.average / 2
}<i class="fas fa-star"></i>)</span></li>
            <li class="user-rating">
              <div class="star-rating">
                <div class="post">
                  <div class="rating-feedback-text">
                    Thanks for your rating!
                  </div>
                </div>
                <div class="stars-container" item="${index}">
                    <p class="user-review">Your review:</p>
                  <input type="radio" name="rating" id="r-5" />
                  <label for="r-5" class="fas fa-star"></label>
                  <input type="radio" name="rating" id="r-4" />
                  <label for="r-4" class="fas fa-star"></label>
                  <input type="radio" name="rating" id="r-3" />
                  <label for="r-3" class="fas fa-star"></label>
                  <input type="radio" name="rating" id="r-2" />
                  <label for="r-2" class="fas fa-star"></label>
                  <input type="radio" name="rating" id="r-1" />
                  <label for="r-1" class="fas fa-star"></label>
                </div>
              </div>
            </li>
          </ul>
      </li>
      <li class="item-summary">${dataElement.summary}</li>
    </ul>
  </li>
  <li class="item-img">
    <img
      src="${dataElement.image.original}"
      alt="show-poster"
    />
  </li>`;

  modalContainer.appendChild(modal);
  popupContainer.style.display = 'block';

  const stars = document.querySelector('.stars-container');
  const post = document.querySelector('.post');
  if (localStorage.getItem(index)) {
    const selectedStar = document.querySelector(`#${getStars(index)}`);
    selectedStar.checked = true;
  }

  const genresContainner = document.querySelector('.item-genres');
  dataElement.genres.forEach((element) => {
    genresContainner.innerHTML += `<li class="genre">${element}</li>`;
  });
  starRating(stars, post, index);
};

export default insertPopup;
