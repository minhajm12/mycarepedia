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
