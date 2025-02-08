// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
const brand = document.querySelector(".navbar-brand");
const link = document.querySelectorAll(".nav-link");

window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
    brand.classList.add("brandScrolled");
    for (const element of link) {
      element.classList.add("linkScrolled");
    }
  } else {
    header.classList.remove("navbarDark");
    brand.classList.remove("brandScrolled");
    for (const element of link) {
      element.classList.remove("linkScrolled");
    }
  }
};

// add unfocused effect to portfolio cards
function cardHover(card) {
  card.classList.remove("portfolio-card-unfocused");
}
function cardUnfocus(card) {
  card.classList.add("portfolio-card-unfocused");
}
