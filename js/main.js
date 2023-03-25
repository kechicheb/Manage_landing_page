const toggle = document.querySelector("#toggle-btn");
const menu = document.querySelector("#menu");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});
