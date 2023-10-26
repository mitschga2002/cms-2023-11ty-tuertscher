import * as MainNav from "./lib/mainnav.js";
window.MainNav = MainNav;

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("open");
    nav.classList.toggle("open");
  });
});
