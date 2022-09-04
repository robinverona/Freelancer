console.log('Hello World');


const mobileMenu = document.querySelector('.sidebar');
const mobileMenuButton = document.querySelector('#sidebar__button--open');
const mobileCloseMenuButton = document.querySelector('#sidebar-header__button--close');
console.log(mobileCloseMenuButton);

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('sidebar--hidden');

    mobileMenu.classList.add('sidebar--open');
});

  mobileCloseMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('sidebar--open');

    mobileMenu.classList.add('sidebar--hidden');
  })