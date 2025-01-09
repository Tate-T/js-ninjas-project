const games = [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
  },
  {
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
  },
];
let copiedGames = [...games];

const list = document.querySelector('#header-list');
const button = document.querySelector('#header-select');
const main = document.querySelector('.main');
const defaltBtn = document.querySelector('#defalt');
const numericalBtn = document.querySelector('#numerical');
const gameBtn = document.querySelector('#game');
const acquaintanceBtn = document.querySelector('#acquaintance');

const sections = document.querySelectorAll('section');

button.addEventListener('click', () => {
  list.classList.toggle('is-hidden');
  button.classList.toggle('checked');
});

defaltBtn.addEventListener('click', () => {
  list.classList.toggle('is-hidden');
  button.classList.toggle('checked');
  sections.forEach(section => {
    section.classList.remove('is-hidden');
  });
  copiedGames = [...games];
});

numericalBtn.addEventListener('click', () => {
  list.classList.toggle('is-hidden');
  button.classList.toggle('checked');
  for (let i = 0; i < copiedGames.length; i += 1) {
    if (copiedGames[i].category !== numericalBtn.id) {
      copiedGames.splice(i, 1);
      i -= 1;
    }
  }
  const gameIds = copiedGames.map(game => game.id);
  for (let i = 0; i < sections.length; i += 1) {
    if (sections[i].classList.contains('hero')) {
      continue;
    }
    if (!gameIds.includes(Number.parseInt(sections[i].id))) {
      sections[i].classList.add('is-hidden');
    } else {
      sections[i].classList.remove('is-hidden');
    }
  }
  copiedGames = [...games];
});

gameBtn.addEventListener('click', () => {
  list.classList.toggle('is-hidden');
  button.classList.toggle('checked');
  for (let i = 0; i < copiedGames.length; i += 1) {
    if (copiedGames[i].category !== gameBtn.id) {
      copiedGames.splice(i, 1);
      i -= 1;
    }
  }
  const gameIds = copiedGames.map(game => game.id);
  for (let i = 0; i < sections.length; i += 1) {
    if (sections[i].classList.contains('hero')) {
      continue;
    }
    if (!gameIds.includes(Number.parseInt(sections[i].id))) {
      sections[i].classList.add('is-hidden');
    } else {
      sections[i].classList.remove('is-hidden');
    }
  }
  copiedGames = [...games];
});

acquaintanceBtn.addEventListener('click', () => {
  list.classList.toggle('is-hidden');
  button.classList.toggle('checked');
  for (let i = 0; i < copiedGames.length; i += 1) {
    if (copiedGames[i].category !== acquaintanceBtn.id) {
      copiedGames.splice(i, 1);
      i -= 1;
    }
  }
  const gameIds = copiedGames.map(game => game.id);
  for (let i = 0; i < sections.length; i += 1) {
    if (sections[i].classList.contains('hero')) {
      continue;
    }
    if (!gameIds.includes(Number.parseInt(sections[i].id))) {
      sections[i].classList.add('is-hidden');
    } else {
      sections[i].classList.remove('is-hidden');
    }
  }
  copiedGames = [...games];
});
