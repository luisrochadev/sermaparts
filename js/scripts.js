$(document).ready(function() {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    
    $("#customer-carousel").owlCarousel();

    $(window).scroll(function () {
    var topDivHeight = $("#par-one").height();
    var viewPortSize = $(window).height();

    var triggerAt = 1250;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('#par-one').addClass('animated fadeIn');
    }
});

    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -64
    }, 500);
    return false;
});

    

  }); // end of document ready
 // end of jQuery name space
