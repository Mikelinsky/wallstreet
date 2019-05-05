/*scrolling behavior for mobile*/
let windowOnSecond = false;
let touchStart;
const positionOfFirst = $(".mainheader").offset().top;
const positionOfSecond = $(".small-carousel").offset().top;
console.log(positionOfFirst);
console.log(positionOfSecond);


function doScrolling() {
    $(document).on('touchstart', function (e) {
        e.preventDefault();
        //e.stopPropagation();
        touchStart = e.originalEvent.touches[0].clientY;
    });


    $(document).on('touchend', function (e) {
        e.preventDefault();
        //e.stopPropagation();
        var touchEnd = e.originalEvent.changedTouches[0].clientY;
        if (touchStart > touchEnd + 5) {
            let scrollPosition = window.pageYOffset;
            console.log(scrollPosition);
            //slide_down
            if ((scrollPosition === positionOfFirst) && (windowOnSecond === false)) {
                e.preventDefault();
                //e.stopPropagation();
                $("html, body").animate({ scrollTop: $(".small-carousel").offset().top }, 200);
                windowOnSecond = true;
                console.log("slide down");
                console.log(windowOnSecond);
            };


        } else if (touchStart < touchEnd - 5) {
            let scrollPosition = window.pageYOffset;
            console.log(scrollPosition);
            //slide_up
            if (scrollPosition <= positionOfSecond) {
                e.preventDefault();
                //e.stopPropagation();
                $("html, body").animate({ scrollTop: $(".mainheader").offset().top }, 200);
                windowOnSecond = false;
                console.log("slide up");
                console.log(windowOnSecond);
            }
        }
    });
};

if ($(window).width() <= 767) {
    doScrolling();
}

$(window).resize(function () {
    if ($(window).width() <= 767) {
        doScrolling();
    }
});