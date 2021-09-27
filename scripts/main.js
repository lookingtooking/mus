document.addEventListener('DOMContentLoaded', () => {
  var body = document.body;
  var modal = document.querySelector('.modal');
  var modalOverlay = modal.querySelector('.modal__overlay');
  var modalContent = modal.querySelector('.modal__content');

  var welcomeButton = document.querySelector('.welcome-button');

  function openIframeModal(e) {
    e.preventDefault();
    body.classList.add('overflowHidden');
    modalContent.innerHTML = `
        <iframe src="${e.target.href}"></iframe>
      `;
    modal.classList.add('modal_opened');
  }

  function closeIframeModal() {
    body.classList.remove('overflowHidden');
    modal.classList.remove('modal_opened');
  }

  var cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    card.addEventListener('click', openIframeModal);
  });

  modalOverlay.addEventListener('click', closeIframeModal);

  welcomeButton.addEventListener('click', openIframeModal);
});