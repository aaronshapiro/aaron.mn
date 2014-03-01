$(document).ready(function() {

    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.info-link').click(function() {
        if ($('.info-wrapper').hasClass('hidden')) {
            $('.info-wrapper')
                .removeClass('hidden')
                .addClass('bounce-in-right')
                .on(animationEnd, function() {
                    $('.info-wrapper')
                        .removeClass('bounce-in-right')
                        .off(animationEnd);
                    $('.info-mask')
                        .removeClass('hidden');
                });
            $('.info-wrapper .info').addClass('fade-in').removeClass('fade-out');
        }
        return false;
    });

    $('.info-close').click(function() {
        if (!$('.info-wrapper').hasClass('hidden')) {
            $('.info-wrapper')
                .addClass('bounce-out-right')
                .on(animationEnd, function() {
                    $(this)
                        .addClass('hidden')
                        .removeClass('bounce-out-right')
                        .off(animationEnd);
                    $('.info-mask').addClass('hidden');
                });
            $('.info-wrapper .info').addClass('fade-out').removeClass('fade-in');
        }
        return false;
    });

    $(window).resize(function() {
        console.log($(window).width());
    });

});

