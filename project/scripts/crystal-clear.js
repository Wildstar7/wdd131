document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');

    hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked');
        mainNav.classList.toggle('show');
    });
});