const page = document.querySelector('body');
const backdrop = document.querySelector(`[data-subscribe="backdrop"]`);
const closeBtn = document.querySelector(`[data-subscribe="close"]`);
const form = document.querySelector('#subscribe-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.querySelector('input').value = '';
  page.classList.toggle('no-scroll');
  backdrop.classList.toggle('is-hidden');
});
closeBtn.addEventListener('click', toggleModal);
backdrop.addEventListener('click', toggleModal);

function toggleModal(e) {
  e.preventDefault();
  if (e.currentTarget === backdrop && e.currentTarget !== e.target) {
    return;
  }
  page.classList.toggle('no-scroll');
  backdrop.classList.toggle('is-hidden');
}
