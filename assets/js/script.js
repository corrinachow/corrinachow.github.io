function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    const start = new Date().getTime(),
        timer = setInterval(function () {
            const step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from))+unit;
            } else {
                elem.style[style] = (from + step * (to - from))+unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    prop ? elem[style] = from+unit : elem.style[style] = from+unit;
}

window.addEventListener('click', function (e) {
  if (e.target.nodeName == "A") {
    console.log(e.target)
    var target = document.querySelector(e.target.hash);
    animate(document.documentElement, "scrollTop", "", e.pageY, target.offsetTop - 20, 250, true);
  }
});

const nav = document.querySelector('.topnav')
let topOfNav = nav.offsetTop;

window.addEventListener('scroll', function fixNav() {
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
  document.body.style.padding = 0;
});

function toggleNavBar() {
  nav.classList.toggle('collapse');
}

window.onload = function() {
  const copyrightYear = document.getElementById('copyright-year');
  const d = new Date();
  copyrightYear.innerHTML = d.getFullYear();
}

nav.addEventListener('click', toggleNavBar);


