document.getElementById('hamburger').addEventListener('click', (e) => {
  // alert('Click on hamburger')
  document.querySelector('.mobile-nav').setAttribute('style', 'visibility:visible');
  e.preventDefault();
});

// click on Close hamburger
document.getElementById('mobile-drawer-close-icon').addEventListener('click', () => {
  document.querySelector('.mobile-nav').setAttribute('style', 'visibility:hidden');
});

// click on home
document.getElementById('home-link').addEventListener('click', () => {
  document.querySelector('.mobile-nav').setAttribute('style', 'visibility:hidden');
});

// click on about
document.getElementById('about-link').addEventListener('click', () => {
  document.querySelector('.mobile-nav').setAttribute('style', 'visibility:hidden');
});

const speakers = [
  {
    id: 1,
    name: 'Israel CHIZUNGU',
    function: 'Data Analyst & Software Engineer',
    description: 'Data analysts gather and scrutinise data using specialist tools to generate information that helps others make decisions. They will respond to questions about data and look for trends, patterns and anomalies within it',
    img: 'speaker_1.jpeg',
  },
  {
    id: 2,
    name: 'Gabriel ZINCH',
    function: 'Teacher and assistant',
    description: 'Develops, plans, and implements curriculum, lesson plans, and educational programs for student audiences within areas of expertise. Advises, tests, and teaches students audiences in a variety of academic subjects.',
    img: 'speaker_2.webp',
  }, {
    id: 3,
    name: 'Kandi Bryan',
    function: 'Eonomist and Development Actor',
    description: 'responsible for analyzing market trends, advising businesses and governments on economic decisions, and developing econometric models for forecasting, among other duties.',
    img: 'speaker_3.jpeg',
  }, {
    id: 4,
    name: 'Nina MAYOLA',
    function: 'Data Analyst & Software Engineer',
    description: 'Data analysts gather and scrutinise data using specialist tools to generate information that helps others make decisions. They will respond to questions about data and look for trends, patterns and anomalies within it',
    img: 'speaker_4.jpeg',
  }, {
    id: 5,
    name: 'Israel CHIZUNGU',
    function: 'Data Analyst & Software Engineer',
    description: 'Data analysts gather and scrutinise data using specialist tools to generate information that helps others make decisions. They will respond to questions about data and look for trends, patterns and anomalies within it',
    img: 'speaker_1.jpeg',
  },
  {
    id: 6,
    name: 'Gabriel ZINCH',
    function: 'Teacher and assistant',
    description: 'Develops, plans, and implements curriculum, lesson plans, and educational programs for student audiences within areas of expertise. Advises, tests, and teaches students audiences in a variety of academic subjects.',
    img: 'speaker_2.webp',
  }
];

// document.onload = ()=>{
speakers.forEach((speaker) => {
  document.getElementById('speaker-articles-container').innerHTML += `<article class="speaker-article">
    <div class="speaker-article-img-container">
        <img class="speaker-article-img" src="img/${speaker.img}" alt="speaker image" />
    </div>
    <div class="speaker-article-description-container">
        <h4 class="speaker-name">${speaker.name}</h4>
        <h4 class="speaker-position">${speaker.function}</h4>
        <p class="speaker-description">
            ${speaker.description}
        </p>
    </div>
</article>`;
});
// };