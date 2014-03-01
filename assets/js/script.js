$(document).ready(function() {
    $('.info-link').click(function() {
        $('.info-wrapper').addClass('info-wrapper-open');
        return false;
    });
    $('.info-wrapper').click(function() {
        if ($(this).hasClass('info-wrapper-open')) {
            $(this)
                .addClass('info-wrapper-closing')
                .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this)
                        .removeClass('info-wrapper-open info-wrapper-closing')
                        .off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
                });
        }
        return false;
    });
});

