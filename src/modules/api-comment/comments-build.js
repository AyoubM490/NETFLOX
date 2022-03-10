import getcomments from './get-comments.js';

const commentBuild = async (containerClass, url, id, itemID) => {
  const container = document.querySelector(`.${containerClass}`);

  const data = await getcomments(url, id, itemID);
  if (data.length === 0 || data.length === undefined) {
    container.innerHTML = '<span class="com-item-default">no comment history!</span>';
  } else {
    container.innerHTML = '';
    data.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('com-item-group');
      div.innerHTML += `<span class="com-item-name">${item.username}:</span>
            <span class="com-item-message"> ${item.comment}</span>
            <span class="com-item-history">${item.creation_date}</span>`;
      container.appendChild(div);
    });
  }
};

export default commentBuild;