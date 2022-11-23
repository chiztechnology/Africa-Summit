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
