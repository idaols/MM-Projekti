"use strict";

//Reveal elements animation

const reveal = () => {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 20;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);

//Hide scrollbar when mobilenav is open

let mobileNav = document.querySelector("#navbar-default");
const navBut = document.querySelector(".navBut");

const stopScroll = () => {
  if (mobileNav.classList.contains("hidden")) {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.height = "100%";
    document.body.style.overflow = "auto";
  }
};

navBut.addEventListener("click", stopScroll);
