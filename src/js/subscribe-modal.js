const page = document.querySelector('body');
const backdrop = document.querySelector(`[data-subscribe="backdrop"]`);
const closeBtn = document.querySelector(`[data-subscribe="close"]`);
const form = document.querySelector('#subscribe-form');
const emails = [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const isIncludingEmail = addEmail(
    e.currentTarget.querySelector('input').value
  );
  if (isIncludingEmail) {
    alert("На данну пошту вже оформленна підписка. Будь ласка, введіть іншу.");
  } else {
    e.currentTarget.querySelector('input').value = '';
    page.classList.toggle('no-scroll');
    backdrop.classList.toggle('is-hidden');
  }
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

function addEmail(email) {
  if (emails.includes(email)) {
    return true;
  } else {
    emails.push(email);
    return false;
  }
}
