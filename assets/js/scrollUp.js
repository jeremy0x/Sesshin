// only show the .scroll-down when user has scrolled down some extent

let scrollUp = document.querySelector('.scroll-up');

window.addEventListener('scroll', function () {
  if (window.pageYOffset < 500) {
    scrollUp.style.display = 'none';
  } else {
    scrollUp.style.display = 'block';
  }
});
