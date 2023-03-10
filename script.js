document.querySelector(".menu__btn").addEventListener("click", () => {
  document.querySelector(".header__nav-mobile").classList.toggle("active");
});

document.querySelector(".search__btn").addEventListener("click", () => {
  document.querySelector(".search__box-text").classList.toggle("active");
});

$(".slider").slick({
  dots: true,
  infinite: true,
  // autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
