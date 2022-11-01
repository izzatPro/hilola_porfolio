 document.addEventListener('DOMContentLoaded', function (e) {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.menu__close');
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

    // const counters = document.querySelectorAll('.skills__ratings-counter'),
    //       lines = document.querySelectorAll('.skills__ratings-line span');
    //       counters.forEach((item, i) =>{
    //         lines[i].style.width = item.innerHTML;
    //       });

 });
