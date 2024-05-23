// home_slider
let swiper = new Swiper(".homeSwiper", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".home-button-next",
      prevEl: ".home-button-prev",
    },
});
// home_slider

// home_slider
let swiper2 = new Swiper(".nftSwiper", {
    spaceBetween: 40,
    centeredSlides: true,
    initialSlide: 1,
    navigation: {
      nextEl: ".nft-button-next",
      prevEl: ".nft-button-prev",
    },
    breakpoints: {
        768: {
          loop: false,
          slidesPerView: 2.40,
          centeredSlides: false,
          initialSlide: 0,
        },
        993: {
          loop: false,
          centeredSlides: false,
          slidesPerView: 5,
          initialSlide: 0,
        },
    },
});
// home_slider