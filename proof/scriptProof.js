// ================================
// PREMIUM PACKAGE SLIDER
// ================================

const packageSwiper = new Swiper(".packageSwiper", {

    // Loop
    loop: true,

    // Speed
    speed: 900,

    // Center Active Slide
    centeredSlides: true,

    // Space Between Cards
    spaceBetween: 30,

    // Grab Cursor
    grabCursor: true,

    // Auto Height
    autoHeight: false,

    // Autoplay
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    // Pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Keyboard
    keyboard: {
        enabled: true,
    },

    // Responsive
    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 25
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        }

    }

});

// ================================
// CARD HOVER EFFECT
// ================================

const cards = document.querySelectorAll(".package-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((rect.height / 2 - y) / rect.height) * 8;

        card.style.transform = `
            perspective(1000px)
            rotateY(${rotateY}deg)
            rotateX(${rotateX}deg)
            translateY(-12px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

// ================================
// SCROLL REVEAL
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});