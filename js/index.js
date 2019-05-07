$(document).ready(function () {

  /*transforming header*/
  function changeElements() {

    let positionOfScroll = window.pageYOffset;

    if (positionOfScroll >= 500) {

      //change nav
      $(".mainheader").addClass("mainheader--height");
      $(".carousel-body__middle").addClass("carousel-body__middle--hidden");
      $(".carousel-body__top").addClass("carousel-body__top--padding");
      $(".carousel-body__logo").addClass("carousel-body__logo--size");
      $(".navbar").addClass("navbar--padding");
      $(".nav-link").addClass("nav-link--font-size");
      $(".carousel-body__login-col").removeClass("carousel-body__login-col--align");
      $(".carousel-body").addClass("carousel-body--height");
      if ($(window).width() <= 991) {
        $('.navigation').addClass("navigation--border");
      };
    } else {

      //rechange nav
      $(".mainheader").removeClass("mainheader--height");
      $(".carousel-body__middle").removeClass("carousel-body__middle--hidden");
      $(".carousel-body__top").removeClass("carousel-body__top--padding");
      $(".carousel-body__logo").removeClass("carousel-body__logo--size");
      $(".navbar").removeClass("navbar--padding");
      $(".nav-link").removeClass("nav-link--font-size");
      $(".carousel-body__login-col").addClass("carousel-body__login-col--align");
      $(".carousel-body").removeClass("carousel-body--height");

    }
  };

  changeElements();

  $(function watchScroll() {
    window.addEventListener('scroll', changeElements);
  });

  /* smooth scroll for mobile */

  let windowOnSecond = false;
  let positionOfSecond = $(".small-carousel").offset().top;
  let scrollPosition;
  let lastScrollPosition = 0;


  $(document).ready(function () {

    function watchScroll() {
      scrollPosition = window.pageYOffset;

    
      if (scrollPosition > lastScrollPosition) {
        /*detect scroll direction-DOWN*/
        if ((scrollPosition < positionOfSecond) && (windowOnSecond === false)) {
          $("html, body").animate({ scrollTop: $(".small-carousel").offset().top }, 1000, function () {canScroll = true});
          windowOnSecond = true;
          console.log(scrollPosition);
        }
      } else {
        /*detect scroll direction-UP*/
        if ((scrollPosition <= positionOfSecond) && (windowOnSecond === true)) {
          $("html, body").animate({ scrollTop: $(".fantom-header").offset().top }, 1000, function () {canScroll = true});
          windowOnSecond = false;
          console.log(scrollPosition);
        }
      }
      lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
    }
    watchScroll();



    if ($(window).width() <= 767) {
      $(window).on('scroll', _.debounce(watchScroll, 200, { leading: true }));
    }
    $(window).resize(function () {
      if ($(window).width() <= 767) {
        $(window).on('scroll', _.debounce(watchScroll, 200, { leading: true }));
        positionOfSecond = $(".second-section").offset().top;
      }
    });
  });

});



