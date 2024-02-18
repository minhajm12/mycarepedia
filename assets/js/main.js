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
















// DOCTORS SLIDER

$(document).ready(function(){
    $('.doctors-items').owlCarousel({
        // margin: 20, // Adjust margin if needed
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000, // Adjust autoplay timeout if needed
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1300:{
                items: 3
            }
            // 1500:{
            //     items: 3
            // }
        }
    });
});








// TESTIMONIAL SLIDER

$(document).ready(function(){
    $('.testimonials').owlCarousel({
        margin: 20, // Adjust margin if needed
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000, // Adjust autoplay timeout if needed
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1300:{
                items: 3
            }
            // 1500:{
            //     items: 3
            // }
        }
    });
});