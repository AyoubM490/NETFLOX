import { starRating, getStars } from './user-star-rating.js';
import commentBuild from './api-comment/comments-build.js';
import addCommentListener from './api-comment/add-com-listener.js';
import addReservationListener from './api-reservation/add-res-listener.js';
import reservationBuild from './api-reservation/reservations-build.js';

const apiURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const sessionID = 'GPPQtj8HcYdkGNz2Bewy';

const insertPopup = async (
  popupContainer,
  modalContainer,
  dataArray,
  index,
) => {
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
                  <label for="r-5" class="fas fa-star staring-label"></label>
                  <input type="radio" name="rating" id="r-4" />
                  <label for="r-4" class="fas fa-star staring-label"></label>
                  <input type="radio" name="rating" id="r-3" />
                  <label for="r-3" class="fas fa-star staring-label"></label>
                  <input type="radio" name="rating" id="r-2" />
                  <label for="r-2" class="fas fa-star staring-label"></label>
                  <input type="radio" name="rating" id="r-1" />
                  <label for="r-1" class="fas fa-star staring-label"></label>
                </div>
              </div>
            </li>
          </ul>
      </li>
      <li class="item-summary">${dataElement.summary}</li>


      <li class="com-res-container">
      <ul class="com-res">
      <li class="com-res-header-container">
        <ul class="com-res-header">
          <li class="com-header"><i class='bx bx-tada-hover bx-xs bx-message-square-dots'></i> comments <span class="com-count"></span></li>
          <li class="res-header"><i class='bx bx-tada-hover bx-task bx-xs' ></i> reservations <span class="res-count"></span></li>
        </ul>
      </li>
      <li class="com-container">
        <ul class="com">
          <li class="com-history-container">
            <ul class="com-history">
              <li class="com-item">
                
              </li>
            </ul>
          </li>
          <li class="com-add">
            <form action="#" class="com-form">
              <input type="text" name="name" placeholder="Your name." required>
              <input type="text" name="message"  rows="2" placeholder="Leave a comment..." required>
              <button type="submit" class="com-form-btn">Comment</button>
            </form>
          </li>
        </ul>
      </li>
      <li class="res-container">
        <ul class="res">
          <li class="res-history-container">
            <ul class="res-history">
              <li class="res-item">
              </li>
            </ul>
          </li>
          <li class="res-add">
            <form action="#" class="res-form">
              <input type="text" name="name" placeholder="Your name." required>
              <label>
    Start date:
    <input type="date" name="start-date" value="2022-03-11" required>
  </label>
  <label>
  End date:
  <input type="date" name="end-date" value="2022-03-12" required>
</label>
              <button type="submit" class="res-form-btn">Reserve</button>
            </form>
          </li>
        </ul>
      </li>
    </ul>
    
      </li>

    </ul>
  </li>
  <li class="item-img">
    <img
      src="${dataElement.image.original}"
      alt="show-poster"
    />
  </li>
 `;

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

  const commentCount = document.querySelector('.com-count');
  const reservationCount = document.querySelector('.res-count');

  // insert comments
  await commentBuild('com-item', apiURL, sessionID, dataElement.name, commentCount);

  // insert reservations
  await reservationBuild('res-item', apiURL, sessionID, dataElement.name, reservationCount);

  // comment event listener
  await addCommentListener(
    'com-item',
    commentBuild,
    apiURL,
    sessionID,
    dataElement.name,
    'com-form',
    commentCount,
  );

  // reservation event listener
  await addReservationListener(
    'res-item',
    reservationBuild,
    apiURL,
    sessionID,
    dataElement.name,
    'res-form',
    reservationCount,
  );
};

export default insertPopup;
