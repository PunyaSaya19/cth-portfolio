
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header .nav');
const header = document.querySelector('.header');
const section = document.getElementsByTagName('section');
const menu = document.querySelector(' .header .menu-toggle');
menuToggle.addEventListener('click', function(){
  navActive();

});
window.addEventListener('scroll', function(){
  scrollEvnt();
});

for (var i = 0; i < section.length; i++) {
  (window.innerWidth > 720)? paddingTop(10) : paddingTop(4);
}

// function
function navActive(){
  nav.classList.toggle('nav-active');
  menu.classList.toggle('menu-toggles');
}
function scrollEvnt(){
  (window.scrollY > 0) ? header.classList.add('header-active') : header.classList.remove('header-active');
}

function paddingTop(size ){
  section[i].style.paddingTop = `${header.clientHeight + size}px`;
}










