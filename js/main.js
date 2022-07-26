const burgerMenuBtn = document.querySelector('.bar');
const menu = document.querySelector('.menu__ul');

burgerMenuBtn.addEventListener('click', e => {
  e.preventDefault();
  if (!burgerMenuBtn.checked) {
    menu.classList.toggle('active');
  }
});
