$( document ).ready(function() {

var resize = function() {
    var x = $(window).height();
    var y = x - 120 - 482;
    if (y > 0) {
        $('.divider').css({ marginTop: y});
    }
}

$(window).resize(resize);
resize();

$("#learnmore").click(function() {
    $('html, body').animate({
        scrollTop: $("#more-info").offset().top
    }, 200);
});

});

