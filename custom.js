jQuery.noConflict();
document.addEventListener("DOMContentLoaded", function () {
  let video = document.querySelector("video");
  video.play().catch(error => console.log("Autoplay failed:", error));
});

// FAQ 
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function() {
        const faqItem = this.parentElement;
        faqItem.classList.toggle('active');

        // Close other open answers
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            }
        });

        // Adjust icon
        const plusMinus = this.querySelector('span');
        plusMinus.textContent = faqItem.classList.contains('active') ? '−' : '+';
    });
});
// END FAQ 

jQuery(document).ready(function($) { 
    // Event handler for tab clicks
    $('.tabbedPanels  .tabs a').click(function() {
        $('.panel').hide(); 
        $('.tabs a.active').removeClass('active'); 
        $(this).addClass('active'); 
        var panel = $(this).attr('href'); 
        $(panel).fadeIn(500); 
        return false;
    });
    $('.tabs li:first a').click();

$('.showMoreBtn').on('click', function() {
    // Find the next element with the ID based on the button clicked
    const moreContentId = $(this).closest('li').prev().attr('id');
    $('#' + moreContentId).toggle(); // Toggle visibility of the respective content

    const buttonText = $(this).text() === 'Show More' ? 'Show Less' : 'Show More'; // Change button text
    $(this).text(buttonText); // Update button text
});

$('#toggle-open').on('click', function(){
  $(this).toggleClass("active");
  $("#mega-menu-full-image").toggleClass("hidden");
});




    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 150) {
            $("#main-navbar").addClass("navbar-scroll");
        } else {
            $("#main-navbar").removeClass("navbar-scroll");
        }
    });

    // -- TESTIMONIALS ---------
    

    $("#toggle-button-quality-of-work").hover(function() {
        $(".review_open").toggleClass("active");
    });

    $("#toggle-button-communication").hover(function() {
        $(".communication_open").toggleClass("active");
    });
     
    var swiper_review = new Swiper(".custom_review_section", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".custom_review_section .swiper-pagination",
            type: "progressbar"
        },
        navigation: {
            nextEl: ".custom_review_section .button-next",
            prevEl: ".custom_review_section .button-prev"
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
    // --END TESTIMONIALS -- 
    


    // PROJECT SLIDER
    var project_slider = new Swiper(".project_slider", {
        slidesPerView: 1,
        loop: true,  // Enables looping
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: ".swiper-pagination", // The class for the pagination container
            clickable: true,          // Makes the dots clickable
        },
    });

    // END PROJECT SLIDER

    // -- BRAND SECTION --
    const swiper = new Swiper('.sample-slider', {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 0,
            pauseOnMouseEnter: true,       
            disableOnInteraction: false,   
        },
        speed: 3000,          
        slidesPerView: 10,    
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },
        },
    });
    // --END BRAND SECTION --
});
