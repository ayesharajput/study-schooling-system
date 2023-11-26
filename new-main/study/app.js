var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//   =========================================nav bar =======================================
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarLinks = document.getElementById('navbar-links');
    
    mobileMenu.addEventListener('click', function () {
        navbarLinks.classList.toggle('show');
        mobileMenu.classList.toggle('active');
    });
});
// ====================================back to t0p ========================

document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top-btn');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});

