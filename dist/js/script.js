 document.addEventListener('DOMContentLoaded', function (e) {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.menu__close');
    const overlay = document.querySelector('.menu__overlay');
    const counter = document.querySelectorAll('.skills__ratings-counter');
    const line = document.querySelectorAll('.skills__ratings-line');
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
    counter.forEach((item,i) =>{
        line[i].style.width = item.innerHTML;
        console.log(item.innerHTML);
    });
 });
