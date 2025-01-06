const page = document.querySelector('body');
const backdrop = document.querySelector(`[data-hello="backdrop"]`);
const submitBtn = document.querySelector(`#hello-submit`);
const closeBtn = document.querySelector(`[data-hello="close"]`);
const form = document.querySelector('#hello-form');
const userInput = document.querySelector('#hello-input');
const userOutput = document.querySelector('#user-name-output');

submitBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
backdrop.addEventListener('click', toggleModal);

function toggleModal(e) {
  if (e.currentTarget === backdrop && e.currentTarget !== e.target) {
    return;
  }
  page.classList.toggle('no-scroll');
  backdrop.classList.toggle('is-hidden');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  userOutput.textContent = userInput.value;
});
