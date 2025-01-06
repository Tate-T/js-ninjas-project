const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];
let copiedScientists = [...scientists];
const scientists19CentBtn = document.querySelector('#scientists-19-cent');
const alphabetSortBtn = document.querySelector('#alphabet-sort');
const yearSortBtn = document.querySelector('#year-sort');
const theYoungestScientistBtn = document.querySelector(
  '#the-youngest-scientist'
);
const albertBornBtn = document.querySelector('#albert-born');
const surnameScientistsBtn = document.querySelector('#surname-scientists');
const nameScientistsBtn = document.querySelector('#name-scientists');
const theEldestAndYoungestScientistsBtn = document.querySelector(
  '#elder-and-young-scientists'
);
const firstLetterNameSurnameBtn = document.querySelector(
  '#first-letter-name-surname'
);
const scientistsList = document.querySelector('#scientist-list');
const cleanBtn = document.querySelector('#clean-btn');

const createScientistsList = () => {
  scientistsList.innerHTML = '';
  copiedScientists.forEach(scientist => {
    scientistsList.insertAdjacentHTML(
      'beforeend',
      `<li id="${scientist.id}" class="scientist__item">
      <h3 class="scientist__subtitle">${scientist.name} ${scientist.surname}</h3>
      <p class="scientist__info">${scientist.born}-${scientist.dead}</p>
    </li>`
    );
  });
};
createScientistsList();

scientists19CentBtn.addEventListener('click', () => {
  for (let i = 0; i < copiedScientists.length; i += 1) {
    if (!(copiedScientists[i].born > 1801 && copiedScientists[i].born < 1900)) {
      copiedScientists.splice(i, 1);
      i -= 1;
    }
  }
  createScientistsList();
});

alphabetSortBtn.addEventListener('click', () => {
  copiedScientists.sort((a, b) => {
    if (a.surname === b.surname) {
      return a.name.localeCompare(b.name);
    } else {
      return a.surname.localeCompare(b.surname);
    }
  });
  createScientistsList();
});

yearSortBtn.addEventListener('click', () => {
  copiedScientists.sort((a, b) => a.dead - a.born - (b.dead - b.born));
  createScientistsList();
});

theYoungestScientistBtn.addEventListener('click', () => {
  const theYoungestScientist = copiedScientists.reduce(
    (theYoungestScientistLife, scientist, index) => {
      if (index === 0) {
        theYoungestScientistLife = scientist.born;
      }
      if (theYoungestScientistLife < scientist.born) {
        theYoungestScientistLife = scientist.born;
      }
      return theYoungestScientistLife;
    },
    0
  );
  for (let i = 0; i < copiedScientists.length; i += 1) {
    if (theYoungestScientist !== copiedScientists[i].born) {
      copiedScientists.splice(i, 1);
      i -= 1;
    }
  }
  createScientistsList();
});

albertBornBtn.addEventListener('click', () => {
  scientistsList.innerHTML = '';
  for (let i = 0; i < copiedScientists.length; i += 1) {
    if (
      scientists[i].name === 'Albert' ||
      scientists[i].surname === 'Einstein'
    ) {
      scientistsList.insertAdjacentHTML(
        'beforeend',
        `<li id="${scientists[i].id}" class="scientist__item">
      <h3 class="scientist__subtitle">${scientists[i].name} ${scientists[i].surname}</h3>
      <p class="scientist__info">${scientists[i].born}-${scientists[i].dead}</p>
    </li>`
      );
      copiedScientists = [scientists[i]];
      break;
    }
  }
});

surnameScientistsBtn.addEventListener('click', () => {
  for (let i = 0; i < copiedScientists.length; i += 1) {
    if (copiedScientists[i].surname[0] !== 'C') {
      copiedScientists.splice(i, 1);
      i -= 1;
    }
  }
  createScientistsList();
});

nameScientistsBtn.addEventListener('click', () => {
  for (let i = 0; i < copiedScientists.length; i += 1) {
    if (copiedScientists[i].name[0] === 'A') {
      copiedScientists.splice(i, 1);
      i -= 1;
    }
  }
  createScientistsList();
});

theEldestAndYoungestScientistsBtn.addEventListener('click', () => {
  const theEldestScientist = copiedScientists.reduce(
    (theEldestScientistLife, scientist, index) => {
      if (index === 0) {
        theEldestScientistLife = scientist.dead - scientist.born;
      }
      if (theEldestScientistLife < scientist.dead - scientist.born) {
        theEldestScientistLife = scientist.dead - scientist.born;
      }
      return theEldestScientistLife;
    },
    0
  );
  let theEldestScientistObject;
  let theYoungestScientistObject;
  for (let i = 0; i < copiedScientists.length; i += 1) {
    if (
      theEldestScientist ===
      copiedScientists[i].dead - copiedScientists[i].born
    ) {
      theEldestScientistObject = copiedScientists[i];
      break;
    }
  }
  const theYoungestScientist = copiedScientists.reduce(
    (theYoungestScientistLife, scientist, index) => {
      if (index === 0) {
        theYoungestScientistLife = scientist.dead - scientist.born;
      }
      if (theYoungestScientistLife > scientist.dead - scientist.born) {
        theYoungestScientistLife = scientist.dead - scientist.born;
      }
      return theYoungestScientistLife;
    },
    0
  );
  for (let i = 0; i < copiedScientists.length; i += 1) {
    if (
      theYoungestScientist ===
      copiedScientists[i].dead - copiedScientists[i].born
    ) {
      theYoungestScientistObject = copiedScientists[i];
      break;
    }
  }
  copiedScientists = [theEldestScientistObject, theYoungestScientistObject];
  createScientistsList();
});

firstLetterNameSurnameBtn.addEventListener("click", () => {
    for (let i = 0; i < copiedScientists.length; i += 1) {
      if (copiedScientists[i].name[0] !== copiedScientists[i].surname[0]) {
        copiedScientists.splice(i, 1);
        i -= 1;
      }
    }
    createScientistsList();
})

cleanBtn.addEventListener('click', () => {
  copiedScientists = [...scientists];
  createScientistsList();
});
