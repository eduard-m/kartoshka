"use strict";

var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".header-menu");
var navLink = document.querySelector(".link");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle('lock-scroll');
}

function linkChange() {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
  document.body.classList.remove("lock-scroll");
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    loop: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 3000
  });
});