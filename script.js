const app = new Vue({
    el: '#app',
    data: {
        activeSection: "all"
    },
    updated(){
        console.log('updated');
        swiper.update();
    }
});

const topSlider = new Vue({
    el: '#top-slider',
    updated(){
        console.log('updated');
        swiper.update();
    }
});

const reviewsSlider = new Vue({
    el: '#rewiews-slider',
    updated(){
        console.log('updated');
        swiper.update();
    }
});

const sterilizationSlider = new Vue({
    el: '#sterilization-slider',
    updated(){
        console.log('updated');
        swiper.update();
    }
});

const swiper = new Swiper('.swiper-two', {
    slidesPerView: 3,
    grid: {
        rows: 3,
    },
    spaceBetween: 0,
    breakpoints: {
        576: {
            slidesPerView: 4,
            grid: {
                rows: 2,
            },
        },
        768: {
            slidesPerView: 5,
            grid: {
                rows: 2,
            },
        },
        992: {
            slidesPerView: 6,
            grid: {
                rows: 2,
            },
        },
        1200: {
            slidesPerView: 7,
            grid: {
                rows: 2,
            },
        },
        1400: {
            slidesPerView: 8,
            grid: {
                rows: 2,
            },
        },
    },
});

const top_swiper = new Swiper(".swiper-one", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    speed: 500,
    autoplay: {
        delay: 5e3,
        disableOnInteraction: !1
    },
  });

  const rewiews_swiper = new Swiper(".swiper-three", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    speed: 500,
    autoplay: {
        delay: 5e3,
        disableOnInteraction: !1
    },
  });

  const sterilization_swiper = new Swiper(".swiper-sterilization", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    speed: 500,
    autoplay: {
        delay: 5e3,
        disableOnInteraction: !1
    },
  });