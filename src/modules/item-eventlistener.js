import insertPopup from './popup-build.js';

const itemListener = (popupContainer, modalContainer, dataArray, btnClass) => {
  const btns = document.querySelectorAll(`.${btnClass}`);
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const itemAttr = e.target.getAttribute('item');
      insertPopup(
        popupContainer,
        modalContainer,
        dataArray,
        (btnClass = itemAttr),
      );
    });
  });
};

export default itemListener;
