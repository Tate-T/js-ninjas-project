const page = document.querySelector('body');
const subscribeBackdrop = document.querySelector(`[data-subscribe="backdrop"]`);
const subscribeCloseBtn = document.querySelector(`[data-subscribe="close"]`);
const errorBackdrop = document.querySelector(`[data-error="backdrop"]`);
const errorCloseBtn = document.querySelector(`[data-error="close"]`);
const form = document.querySelector('#subscribe-form');
const emails = [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const isIncludingEmail = addEmail(
    e.currentTarget.querySelector('input').value
  );
  if (isIncludingEmail) {
    e.currentTarget.querySelector('input').value = '';
    page.classList.toggle('no-scroll');
    errorBackdrop.classList.toggle('is-hidden');
  } else {
    e.currentTarget.querySelector('input').value = '';
    page.classList.toggle('no-scroll');
    subscribeBackdrop.classList.toggle('is-hidden');
  }
});

errorCloseBtn.addEventListener('click', errorToggleModal);
errorBackdrop.addEventListener('click', errorToggleModal);
subscribeCloseBtn.addEventListener('click', subscribeToggleModal);
subscribeBackdrop.addEventListener('click', subscribeToggleModal);

function subscribeToggleModal(e) {
  e.preventDefault();
  if (e.currentTarget === subscribeBackdrop && e.currentTarget !== e.target) {
    return;
  }
  page.classList.toggle('no-scroll');
  subscribeBackdrop.classList.toggle('is-hidden');
}

function errorToggleModal(e) {
  e.preventDefault();
  if (e.currentTarget === errorBackdrop && e.currentTarget !== e.target) {
    return;
  }
  page.classList.toggle('no-scroll');
  errorBackdrop.classList.toggle('is-hidden');
}

function addEmail(email) {
  if (emails.includes(email)) {
    return true;
  } else {
    emails.push(email);
    return false;
  }
}
