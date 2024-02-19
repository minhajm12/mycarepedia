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
        nav:true,
        autoplay: true,
        autoplayTimeout: 5000, // Adjust autoplay timeout if needed
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:3
            }
        }
    });
});








// TESTIMONIAL SLIDER
$(document).ready(function(){
    $('.testimonials').owlCarousel({
        margin: 20, // Adjust margin if needed
        loop: true,
        nav:true,
        autoplay: true,
        autoplayTimeout: 5000, // Adjust autoplay timeout if needed
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:3
            }
        }
    });
});
































// BLOG SLIDER
$(document).ready(function(){
    $('.blogmain').owlCarousel({
        margin: 20, // Adjust margin if needed
        loop: true,
        nav:true,
        autoplay: true,
        autoplayTimeout: 5000, // Adjust autoplay timeout if needed
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:3
            }
        }
    });
});










// SEARCH RESULT

let SearchBtn = document.querySelector('.search-btn')
let SearchResult = document.querySelector('.searchresult-sec')

SearchBtn.addEventListener("click", function(){
    SearchResult.classList.toggle('d-none')
})






// SEARCH RESULT SLIDER
$(document).ready(function(){
    $('.search-results-main').owlCarousel({
        margin: 20, // Adjust margin if needed
        loop: true,
        nav:true,
        dots:false,
        // autoplay: true,
        // autoplayTimeout: 5000, // Adjust autoplay timeout if needed
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});