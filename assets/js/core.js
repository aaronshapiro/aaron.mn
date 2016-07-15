function logoVisibility() {
    if ($(window).scrollTop() > 128) {
        $('.logo').addClass('logo-visible');
    } else {
        $('.logo').removeClass('logo-visible');
    }
};

$(document).ready(function() {

    logoVisibility();

    $(window).scroll(function() {
        logoVisibility();
    })
    
});