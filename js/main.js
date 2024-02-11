"use strict";

let header = document.querySelector("header");

console.log(header);

const eventoScroll = addEventListener("scroll", function () {
  if (scrollY > 30) {
    header.className = "header sticky";
  } else {
    header.className = "";
  }
});
