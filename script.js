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
    bio: ' Crizion is an optimistic Reptilian who always looks on the bright side of things. He will never hesitate to help out friends or family in need. Crizion was born a few days after The Dark Skies War was declared. When his village was under siege, his father, who was an excellent warrior, goes to defend his hometown, after defending it greatly for some time, he eventually met his end as an arrow was struck through his head. As the warriors of the Shadefolk kingdom pushed closer, their home was burnt to the ground with Crizion and his mother in it, while his mother died under the collapse, Crizion lived, who was then quickly saved by an Anonymous Reptilian Warrior and brought to shelter until the war passed. From there, his grandma Pho took Crizion under her wing. Eventually, Crizion had to get a job as a blacksmith to support his grandma who was unable to work after finally retiring from her job. Crizion actually learned to like this job, there was something about sharpening weapons that he couldn’t shake. Crizion makes sure to work hard to make currency by day, and train to be a great warrior at night. He spends every night since his 13th birthday, when he was gifted with a spear, to train with it in every way possible so he can be prepared for anything, he REALLY loved to sharpen it. At age 16, Crizion was heading to work when all of a sudden he wasn’t looking and walked right in front of a royal carriage, causing Crizion to fall to the ground. The prince of the Reptilian Kingdom exited the carriage and started to cuss Crizion out. But Crizion didn’t know what to do, he didn’t know what to say, he’s never stood up to anyone like this before. The prince was fed up with his actions that Crizion didn’t mean to commit and grabbed a whip out of the carriage. Crizions eyes widened as he started to back up on all fours. The prince utter to himself before readying the whip: “This is what happens to Reptilians who don’t fall in line.” And right after, he launched the whip. In that moment, something snapped in Crizion, he gained lightning-fast instinct out of pure rage from that one sentence. He immediately uses this instinct to catch the whip around his hand and throw the royal to the ground. The royal ended up crying and said a mumble of words along the lines of revenge and left. In current day after the events, nothing was done about it and Crizion continued to work at the blacksmiths happily while spending time with his grandma. Crizions dream is to explore the world and make new friends, and to find that spark to make the world a better place!'
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
    bio: ' Crazytree (also known by Fern) is a clueless Zuku that never knows what’s going on.'
  },
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





