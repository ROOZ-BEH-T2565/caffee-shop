// var -> navbarLinks => all > .nav-menu .nav-link
// var -> menuOpenButton > #menu-open-button
// var -> menuCloseButton >#menu-close-button
const navbarLinks = document.querySelector(".nav-menu");
const navlinks = document.querySelectorAll(".nav-link");
const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");

// class -> show-mobile-menu
menuOpenButton.addEventListener("click", () => {
  navbarLinks.classList.add("open-menu");
  document.body.classList.add("show-mobile-menu");
});
// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => {
  navbarLinks.classList.remove("open-menu");
  document.body.classList.remove("show-mobile-menu");
});
// Close menu when nav link is clicked
navlinks.forEach((element) => {
  element.addEventListener("click", () => {
    navbarLinks.classList.remove("open-menu");
    document.body.classList.remove("show-mobile-menu");
  });
});
/* Initializing Swiper */

// class -> .slider-wrapper

// slider > item > loop > grabCursor > spaceBetween

// bullets > clickable > dynamicBullets

// Autoplay > autoplay > delay > disableOnInteraction

// Responsive > breakpoints > slidesPerView

const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination-bullet",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
