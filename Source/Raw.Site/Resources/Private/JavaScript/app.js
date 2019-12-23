var iOS = false, p = navigator.platform;
if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
    iOS = true;
}

function resize() {
    winWidth = $(window).width();
    winHeight = $(window).width();

    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        if (scrollPos >= 300) {

        } else {

        }
    });
}

$(document).ready(function(){

    $('#toggle').click(function(){
        $(this).toggleClass('open');
    });

    $('.slick-carousel-inner').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });

    $('.slick-carousel-inner, .carousel').show();

    resize();
});

if (iOS == true) {
} else {
    $(window).resize(function() {
        resize();
    });
}
