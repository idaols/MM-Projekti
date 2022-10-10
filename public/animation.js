"use strict";

// Counter
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "10/18/",
    theEvent = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > theEvent) {
    theEvent = dayMonth + nextYear;
  }

  const countDown = new Date(theEvent).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      // when the date is reached set everything to 0
      if (distance < 0) {
        document.getElementById("days").innerText = 0;
        document.getElementById("hours").innerText = 0;
        document.getElementById("minutes").innerText = 0;
        document.getElementById("seconds").innerText = 0;
      }
    }, 0);
})();

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
console.log(mobileNav);

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
