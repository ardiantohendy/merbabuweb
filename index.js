const iconMenu = document.querySelector(".headerMenu img");
const topMenu = document.querySelector(".top .topMenu");

iconMenu.addEventListener("click", function () {
  if (topMenu.style.top == "-100%") {
    topMenu.style.top = "0%";
  } else {
    topMenu.style.top = "-100%";
  }
});
