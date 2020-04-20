(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('button.main-nav__toggle');
    const navList = document.querySelector('.main-nav__list');

    if (burgerMenu && navList) {
      burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('main-nav__toggle--opened');
        navList.classList.toggle('main-nav__list--opened');
      });
    }
  });
})();
