const hamburger = document.querySelector(".hamburger-menu");
const dropdown = document.querySelector(".dropdown-list");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", function () {
  dropdown.classList.toggle("open");
});

closeMenu.addEventListener("click", function () {
  dropdown.classList.toggle("open");
});
