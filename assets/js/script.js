$(document).ready(function() {

    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.info-link').click(function() {
        if (!$('.info-wrapper').hasClass('info-wrapper-open')) {
            $('.info-wrapper')
                .addClass('bounce-in-right info-wrapper-open')
                .on(animationEnd, function() {
                    $('.info-wrapper')
                        .removeClass('bounce-in-right')
                        .off(animationEnd);
                });
            $('.info-wrapper .info').addClass('fade-in').removeClass('fade-out');
        }
        return false;
    });

    $('.info-wrapper').click(function() {
        if ($(this).hasClass('info-wrapper-open')) {
            $(this)
                .addClass('bounce-out-right')
                .on(animationEnd, function() {
                    $(this)
                        .removeClass('info-wrapper-open bounce-out-right')
                        .off(animationEnd);
                });
            $('.info-wrapper .info').addClass('fade-out').removeClass('fade-in');
        }
        return false;
    });

    $(window).resize(function() {
        console.log($(window).width());
    });

});

