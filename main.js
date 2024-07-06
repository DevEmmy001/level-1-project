const nav__hamburger = document.querySelector(".nav__hamburger");
const navLinks = document.querySelectorAll("a.nav_links");
let menuOpen = false;
nav__hamburger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  console.log(menuOpen);
  navLinks.forEach((link) => {
    if (menuOpen) {
      link.classList.remove("nav_links");
    } else {
      link.classList.add("nav_links");
    }
  });
});
