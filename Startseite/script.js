const header = document.getElementById('site-header');
const menuButton = document.querySelector('.header__menu-button');
const overlayMenu = document.getElementById('mobile-menu');
const closeButton = document.querySelector('.overlay-menu__close');
const body = document.body;

let lastScrollY = window.scrollY;

function toggleMenu(forceOpen) {
  const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !body.classList.contains('menu-open');
  body.classList.toggle('menu-open', shouldOpen);
  overlayMenu.classList.toggle('is-open', shouldOpen);
  menuButton.classList.toggle('is-open', shouldOpen);
  menuButton.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
  overlayMenu.setAttribute('aria-hidden', shouldOpen ? 'false' : 'true');
}

menuButton.addEventListener('click', () => toggleMenu());
closeButton.addEventListener('click', () => toggleMenu(false));
overlayMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => toggleMenu(false));
});

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    header.classList.add('is-hidden');
  } else {
    header.classList.remove('is-hidden');
  }

  lastScrollY = currentScrollY;
});
