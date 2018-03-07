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
  if (nav.className === "topnav") {
      nav.className += " responsive";
  } else {
      nav.className = "topnav";
  }
}

function e() {
console.log('transition end')
}

window.addEventListener('scroll', fixNav);
window.addEventListener('click', toggleNavBar);