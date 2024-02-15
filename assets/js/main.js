// LOGIN/SIGNUP DROPDOWN

let dropdowndiv = document.querySelector('.login-dropdown');
let loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener("click", function(event) {
    dropdowndiv.classList.toggle('d-none');
    console.log("hello");
    event.stopPropagation(); // Prevents the click event from propagating to the document
});

document.addEventListener("click", function(event) {
    // Check if the clicked element is outside of the dropdown div
    if (!dropdowndiv.contains(event.target) && event.target !== loginBtn) {
        dropdowndiv.classList.add('d-none'); // Hide the dropdown div
    }
});









const TopHeaderHeight = document.querySelector('.topnavbar').offsetHeight;
const SubHeaderHeight = document.querySelector('.sub-navbar').offsetHeight;

document.documentElement.style.setProperty('--top-header-height',`${TopHeaderHeight}px`)
document.documentElement.style.setProperty('--sub-header-height',`${SubHeaderHeight}px`)
