var iOS = false, p = navigator.platform;
if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
    iOS = true;
}

function resize() {
    $winWidth = $(window).width();
    $winHeight = $(window).height();

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

    resize();
});

if (iOS == true) {
} else {
    $(window).resize(function() {
        resize();
    });
}
