let menu_open = document.querySelector(".menuopen");
let menucanvs = document.querySelector(".menucnvs");

menu_open.addEventListener("click", function (event) {
  menucanvs.classList.toggle("menucnvs-active");
  event.stopPropagation();
});

// Close Menu
let menu_close = document.querySelector(".menuclose");
menu_close.addEventListener("click", function () {
  document.querySelector(".menucnvs").classList.remove("menucnvs-active");
});

document.addEventListener("click", function (event) {
  // Check if the clicked element is outside of the dropdown div
  if (!menucanvs.contains(event.target) && event.target !== menu_open) {
    menucanvs.classList.remove("menucnvs-active"); // Hide the dropdown div
  }
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
