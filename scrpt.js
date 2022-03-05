const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelectorAll('.header .container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    
});

menu_item.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
   });

// document.addEventListener('scroll', () => {
// var scroll_position = window.scrollY;
// if (scroll_position > 250){
//     header.style.backgroundColor = 'rgb(87, 92, 94)';
// } else {
//     header.style.backgroundColor ='transparent';
// }
// });