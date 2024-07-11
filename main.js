document.addEventListener("DOMContentLoaded", function () {
  let burger_menu = document.getElementById("burgure-menu");
  let burger_menu_div = document.getElementsByClassName("burgure-menu-div")[0];
  let burgure_menu_div_close = document.getElementsByClassName("burgure-menu-div-close")[0];




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



burger_menu.addEventListener("click",burger_menu_function);
function burger_menu_function(){
  burger_menu_div.classList.add("show-menu");
  document.querySelector("header").style.opacity = ".6";
  document.querySelector("main").style.opacity = ".6";
  document.querySelector("footer").style.opacity = ".6";
}


burgure_menu_div_close.addEventListener("click",close_menu_function);
function close_menu_function(){
  burger_menu_div.classList.remove("show-menu");
  document.querySelector("header").style.opacity = "1";
  document.querySelector("main").style.opacity = "1";
  document.querySelector("footer").style.opacity = "1";
}




});
