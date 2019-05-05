jQuery(document).ready(function () {
  /*main slider init*/
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: 'true',
    grabCursor: true
  });

  /*small-carousel init*/
  var swiper = new Swiper('.small-carousel__container', {
    pagination: {
      el: '.swiper-pagination-smCarousel',
    },
    navigation: {
      nextEl: '.swiper-button-next-smCarousel',
      prevEl: '.swiper-button-prev-smCarousel',
    },
    loop: 'true',
    slidesPerView: 5,
    grabCursor: true,
    breakpoints: {
      // when window width is <= 320px
      575: {
        slidesPerView: 1
      },
      // when window width is <= 480px
      767: {
        slidesPerView: 2
      },
      // when window width is <= 640px
      991: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });

  /*article carousel init*/
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    grabCursor: true,
    breakpoints: {
      767: {
        slidesPerView: 2
      }
    }
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    pagination: {
      el: ".article-carousel__pagination",
    },
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    slidesPerView: 1,
    navigation: {
      nextEl: '.article-carousel-button-next',
      prevEl: '.article-carousel-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
    grabCursor: true
  });

  /*show login form*/
  $(".carousel-body__btn").on("click", function () {
    $(".carousel-body__login-box").hide(500);
    $(".carousel-body__form-box").show(500);
  });

  $(".carousel-body__btn-mobile").on("click", function () {
    $(".carousel-body__login-box-mobile").hide(500);
    $(".carousel-body__form-box-mobile").show(500);
  });

  /*navigation menu*/
  
  if ($(window).width() <= 991) {
    $('.navigation').addClass("navigation--border");
  } else {
    $('.navigation').removeClass("navigation--border");
  }

  function hideBorder() {
    let navigationHeight = $('.navigation').height();
    if (navigationHeight === 0) {
      $('.navigation').removeClass('navigation--border');
    } else if (navigationHeight > 0) {
      $('.navigation').addClass('navigation--border');
    }
  };

  $(".navbar-toggler").on('click', hideBorder);

  /*button up*/
  jQuery(function scrollUp() {
    $('.up-button').on("click", function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });
  });

  
});







