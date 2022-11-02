 document.addEventListener('DOMContentLoaded', function (e) {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.menu__close');
    const overlay = document.querySelector('.menu__overlay');
    console.log(menu);
    console.log(hamburger);
    hamburger.addEventListener('click', function(){
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';

    });
    close.addEventListener('click', function(){
        menu.classList.remove('active');
        document.body.style.overflow = 'scroll';
    });
    overlay.addEventListener('click', function(){
        menu.classList.remove('active');
        document.body.style.overflow = 'scroll';
    });
 });
