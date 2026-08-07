
document.getElementById("sendBtn").addEventListener("click", () => {
    const msg = document.getElementById("successMsg");
    msg.classList.add("show");

    setTimeout(() => {
        msg.classList.remove("show");
    }, 3000);
});





// SCOPED ISOLATED JAVASCRIPT (Prevents global function/variable collisions)
(function initPhotoPackagesModule() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var wrapper = document.getElementById('photoPkgWrapper');
    var dots = document.querySelectorAll('.photoPkg_dot');

    if (!wrapper || !dots.length) return;

    // Update active dot indicator on swipe
    function photoPkg_updateActiveDot() {
      var scrollLeft = wrapper.scrollLeft;
      var cardWidth = wrapper.querySelector('.photoPkg_card').offsetWidth;
      var activeIndex = Math.round(scrollLeft / cardWidth);

      dots.forEach(function (dot, idx) {
        if (idx === activeIndex) {
          dot.classList.add('photoPkg_dot_active');
        } else {
          dot.classList.remove('photoPkg_dot_active');
        }
      });
    }

    // Scroll listener for dot indicator
    wrapper.addEventListener('scroll', photoPkg_updateActiveDot, { passive: true });

    // Click on dots to jump to slide
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var index = parseInt(this.getAttribute('data-index'), 10);
        var card = wrapper.querySelectorAll('.photoPkg_card')[index];
        if (card) {
          wrapper.scrollTo({
            left: card.offsetLeft - (wrapper.offsetWidth - card.offsetWidth) / 2,
            behavior: 'smooth'
          });
        }
      });
    });
  });
})();
