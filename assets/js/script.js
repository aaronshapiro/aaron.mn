$(document).ready(function() {

    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.info-link').click(function() {
        if (!$('.info-wrapper').hasClass('info-wrapper-visible')) {
            $('.info-wrapper')
                .removeClass('hidden')
                .addClass('bounce-in-right info-wrapper-visible')
                .on(animationEnd, function() {
                    $('.info-wrapper').off(animationEnd);
                    $('.info-mask')
                        .addClass('info-mask-visible')
                        .removeClass('hidden');
                });
            $('.info-wrapper .info').addClass('fade-in').removeClass('fade-out');
        }
        return false;
    });

    $('.info-close').click(function() {
        if ($('.info-wrapper').hasClass('info-wrapper-visible')) {
            $('.info-wrapper')
                .addClass('bounce-out-right')
                .on(animationEnd, function() {
                    $(this)
                        .addClass('hidden')
                        .removeClass('info-wrapper-visible bounce-out-right')
                        .off(animationEnd);
                    $('.info-mask')
                        .addClass('hidden')
                        .removeClass('info-mask-visible');
                });
            $('.info-wrapper .info').addClass('fade-out').removeClass('fade-in');
        }
        return false;
    });

    $(window).resize(function() {
        console.log($(window).width());
    });

});

