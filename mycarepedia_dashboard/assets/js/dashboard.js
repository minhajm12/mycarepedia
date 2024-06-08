let menu_open = document.querySelector('.menuopen')
let menucanvs = document.querySelector(".menucnvs")

menu_open.addEventListener('click', function (event) {
      menucanvs.classList.toggle('menucnvs-active')
      event.stopPropagation();
})

// Close Menu
let menu_close = document.querySelector('.menuclose')
menu_close.addEventListener('click', function () {
      document.querySelector(".menucnvs").classList.remove('menucnvs-active')
})