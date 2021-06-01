const main_title = document.querySelector(".main-title");
const header = document.querySelector("header");
const description = document.querySelector("#new span");
const effect_2 = document.querySelector(".effect_2")

let header_height = header.offsetHeight;

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;

  main_title.style.opacity = - scroll / (header_height / 2) +1;

  description.style.opacity = - scroll / (header_height / 1) + 1.5;

  effect_2.style.opacity = scroll / (header_height) + 1;
})
