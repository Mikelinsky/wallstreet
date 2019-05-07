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

  let sec = $('.item').first();
  let canScroll = true;

  $(window).on('mousewheel DOMMouseScroll touchmove', (e) => { //usuwam zdarzenie scroll bo podczas płynnego przesuwania by się nam wywoływałą kilka razy ta funkcja, czego nie chcemy

    if (canScroll == false) return;
    canScroll = false;

    if (typeof e.originalEvent.detail == 'number' && e.originalEvent.detail !== 0) {
      if (e.originalEvent.detail > 0) {
        if (sec.nextAll('.item:first').length) {
          sec = sec.nextAll('.item:first')
        }
      }
      else if (e.originalEvent.detail < 0) {
        if (sec.prevAll('.item:first').length) {
          sec = sec.prevAll('.item:first')
        }
      }
    }
    else if (typeof e.originalEvent.wheelDelta == 'number') {
      if (e.originalEvent.wheelDelta < 0) {
        if (sec.nextAll('.item:first').length) {
          sec = sec.nextAll('.item:first')
        }

      } else if (e.originalEvent.wheelDelta > 0) {
        if (sec.prevAll('.item:first').length) {
          sec = sec.prevAll('.item:first')
        }
      }
    }
    if (window.scrollY > $('#section-2').offset().top) {//sprawdza czy wartosć naszego scrolla w osi Y jest większa niz pozycja góry diva #section-2 licząc od góry strony

    }
    else {
      //kod z scroll.html
      $([document.documentElement]).animate({
        scrollTop: sec.offset().top
      }, 500, function () {
        canScroll = true;
      });
    }
  });

});



