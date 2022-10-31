 document.addEventListener('DOMContentLoaded', function (e) {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.menu__close');
    console.log(menu);
    console.log(hamburger);
    hamburger.addEventListener('click', function(){
        menu.classList.add('active');
    });
    close.addEventListener('click', function(){
        menu.classList.remove('active');
    });
 });
