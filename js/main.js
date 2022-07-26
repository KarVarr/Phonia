const burgerMenuBtn = document.querySelector('.burger__menu');
const menu = document.querySelector('.menu__ul');

burgerMenuBtn.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.toggle('active');
});
