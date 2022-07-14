let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.lateral-menu');
let isOpen = false;

menuIcon.addEventListener('click', () => {
  if (!isOpen) {
    menuIcon.classList.add('open')
    menu.classList.add('open-menu')
    isOpen = !isOpen;
  } else {
    menuIcon.classList.remove('open')
    menu.classList.remove('open-menu')
    isOpen = !isOpen;
  }
});