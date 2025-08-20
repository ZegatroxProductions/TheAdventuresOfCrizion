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
    img: 'https://i.imgur.com/v8SJNky.png',
    species: 'Reptilian',
    gender: 'Male♂️',
    age: '18',
    role: 'Hero',
    bday: 'September 8th',
    bio: 'Crizion is an optimistic Reptilian who always looks on the bright side of things. 
  },
  {
    id: 'character2',
    name: 'Crazytree',
    img: 'https://i.imgur.com/p27rtqw.jpeg',
    species: 'Zuku',
    gender: 'Male♂️',
    age: '19',
    role: 'Hero',
    bday: 'October 21st',
    bio: ' Crazytree (also known by Fern) is a clueless Zuku that never knows what’s going on. Once he is fixated on something, he will stop paying attention to anything else, but he is also loyal to the very end when it comes to friendships. Crazytree was born about a year before the Dark Skies wars beginning, as he grew up, He was an insane kid that didn’t think too much about his choices, he did what he pleased. So instead of calling him by his real name Fern, everyone nicknamed him Crazytree. His father, who was the King of the Kingdom, had a pent-up rage from Crazytree’s actions as they got worse. Soon he couldn’t take it anymore, since lecturing had no effect, he struck Crazytree. After being struck, Crazytree was put in a state of mind where he did nothing, people thought he was paralyzed and mentally damaged and the King regretted his action the most. Crazytree continued to sit in this state of mind for years to come. It raised concern about the kings royalty position in a kingdom of peace. But in reality, during this dormant time, Crazytree was happy, because he was able to talk with his mother that passed during his birth. Crazytree didn’t know if it was real or not, but he made sure to enjoy every moment of it while he could. Even more time passed and eventually The Dark Skies war came, the Zukus entire kingdom was up in flames, The King quickly grabbed Crazytree from his seated spot and ran to a secret safety chamber while Arrowite fended off Shadefolk soldiers. The chamber could only hold one person, but was immune to almost anything, it was reserved for the king. But instead, The King shoved Crazytree in there along with the powerful gem from his staff, the chamber was sealed off and the king went up in flames. After a long slumber that caused him to become mute in the process, he was released by no other than Crizion himself, to which he gave his utmost loyalty to Crizion. Crazytree try’s his best to tend to peaceful tactics, but knows that violence must sometimes be an option with the great power he has. His dream is to restore peace to the world with his buddy Crizion.'
  }
  // Add more characters...
];

const modal = document.getElementById('modal');
const body = document.body;

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
    document.getElementById('m-bio').textContent = data.bio;

    modal.classList.add('open');
    body.style.overflow = 'hidden'; // disables scrolling
  });
});

document.querySelector('.modal-close').addEventListener('click', () => {
  modal.classList.remove('open');
  body.style.overflow = 'auto';
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


