// navbar fixed fo scroll fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

const humberger = document.querySelector("#humberger");
const navMenu = document.querySelector("#nav-menu");

// humberger
humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  navMenu.classList.toggle("hidden");
});

