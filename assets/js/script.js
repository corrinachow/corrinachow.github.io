const nav = document.querySelector('.topnav');
const hamburger = document.querySelector('.hamburger');
let topOfNav = nav.offsetTop;

function fixNav() {
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

function toggleNavBar() {
  nav.classList.toggle('responsive');
}

function resizeSocial() {
  if (window.innerWidth > 480) {
    document.getElementById('social-links').style.height = document.getElementById('intro-text').clientHeight + 'px';
  } else if (window.innerWidth < 480) {
    document.getElementById('social-links').style.height = 1.5 + 'em'
  }
}

window.addEventListener('scroll', fixNav);
hamburger.addEventListener('click', toggleNavBar);
window.addEventListener('resize', resizeSocial);
document.addEventListener("DOMContentLoaded", resizeSocial);



