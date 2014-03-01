$(document).ready(function() {

    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.info-link').click(function() {
        $('.info-wrapper').addClass('info-wrapper-open');
        $('.info-wrapper .info').addClass('fadeIn').removeClass('fadeOut');
        return false;
    });
    $('.info-wrapper').click(function() {
        if ($(this).hasClass('info-wrapper-open')) {
            $(this)
                .addClass('info-wrapper-closing')
                .on(animationEnd, function() {
                    $(this)
                        .removeClass('info-wrapper-open info-wrapper-closing')
                        .off(animationEnd);
                });
            $('.info-wrapper .info').addClass('fadeOut').removeClass('fadeIn');
        }
        return false;
    });
});

