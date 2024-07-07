document.addEventListener("DOMContentLoaded", function () {
  let review = document.getElementsByClassName("review-section-2")[0];
  let review_sp = Array.from(document.getElementsByClassName("review-section-2-span"));
  let div_wrapper = document.createElement("div");
  div_wrapper.setAttribute("class", "swiper-wrapper");
  let swiper = null;

  function initializeSwiper() {
    if (swiper !== null) {
      return; // Prevent reinitialization
    }

    review.classList.add("swiper");
    review_sp.forEach(span => span.classList.add("swiper-slide"));

    review_sp.forEach(span => div_wrapper.appendChild(span));
    review.appendChild(div_wrapper);

    swiper = new Swiper(".swiper", {
      direction: "horizontal",
      spaceBetween: 20,
      rtl: true,
      slidesPerView: 1,

      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },

      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
  }

  function destroySwiper() {
    if (swiper === null) {
      return; // Prevent destruction if Swiper is not initialized
    }

    swiper.destroy(true, true);
    swiper = null;

    review.classList.remove("swiper");
    review_sp.forEach(span => span.classList.remove("swiper-slide"));

    review_sp.forEach(span => review.appendChild(span));
    div_wrapper.remove();
  }

  function handleResize() {
    if (window.innerWidth <= 750) {
      initializeSwiper();
    } else {
      destroySwiper();
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize(); // Initial check on page load



});
