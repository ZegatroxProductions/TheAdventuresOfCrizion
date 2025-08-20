// ==== NAVIGATION TABS ====
document.querySelectorAll('.nav-links button').forEach(btn => {
  btn.addEventListener('click', () => {
    // Tab UI
    document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Section Display
    document.querySelectorAll('main > section').forEach(section => section.classList.remove('active'));
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

// ==== CHARACTER MODAL ====
const characters = [
  {
    id: 'character1',
    name: 'Crizion',
    img: 'https://i.imgur.com/Crizion.png',
    species: 'Code-Bound Human',
    gender: 'Non-binary',
    age: '24',
    role: 'Rogue Technomancer',
    bday: 'March 8'
  },
  {
    id: 'character2',
    name: 'Crazytree',
    img: 'https://i.imgur.com/Crazytree.png',
    species: 'Sky Pirate',
    gender: 'Female',
    age: '29',
    role: 'Captain of the Horizon Wraith',
    bday: 'July 19'
  }
  // Add more characters...
];

const modal = document.getElementById('modal');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const data = characters.find(c => c.id === card.dataset.id);
    if (!data) return;

    document.getElementById('m-name').textContent = data.name;
    document.getElementById('m-img').src = data.img;
    document.getElementById('m-species').textContent = data.species;
    document.getElementById('m-gender').textContent = data.gender;
    document.getElementById('m-age').textContent = data.age;
    document.getElementById('m-role').textContent = data.role;
    document.getElementById('m-bday').textContent = data.bday;

    modal.classList.add('open');
  });
});

document.querySelector('.modal-close').addEventListener('click', () => {
  modal.classList.remove('open');
});

// ==== STORY PAGINATION ====
let currentPage = 1;
const pages = document.querySelectorAll('#story .page');

document.querySelectorAll('#story .pager button').forEach(btn => {
  btn.addEventListener('click', () => {
    const isNext = btn.hasAttribute('data-next');
    const isPrev = btn.hasAttribute('data-prev');

    if ((isNext && currentPage >= pages.length) || (isPrev && currentPage <= 1)) return;

    pages[currentPage - 1].style.display = 'none';
    currentPage = isNext ? currentPage + 1 : currentPage - 1;
    pages[currentPage - 1].style.display = 'block';
  });
});

// ==== EBOOK VIEWER: OPEN NEW TAB ====
document.querySelectorAll('.read-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const bookId = btn.dataset.book;
    window.open(`ebook-${bookId}.html`, '_blank');
  });
});
const body = document.body;
document.querySelector('.modal-close').addEventListener('click', () => {
  modal.classList.remove('open');
  body.style.overflow = 'auto';
});
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const data = characters.find(c => c.id === card.dataset.id);
    if (!data) return;
    document.getElementById('m-name').textContent = data.name;
    document.getElementById('m-img').src = data.img;
    document.getElementById('m-species').textContent = data.species;
    document.getElementById('m-gender').textContent = data.gender;
    document.getElementById('m-age').textContent = data.age;
    document.getElementById('m-role').textContent = data.role;
    document.getElementById('m-bday').textContent = data.bday;
    modal.classList.add('open');
    body.style.overflow = 'hidden'; // disables scrolling
  });
});

