console.log('funnny bunnny')

$(function () {
    $('.cookies__submit').on('click', function () {
        $('.cookies').toggleClass('cookies-disabled');
    });
});

$(function () {
    $('.toggler-button, .section-close').on('click', function () {
        $('.pop-up-relativ, .section-pop-up').toggleClass('section__enable');
    });
});


$(function () {
    $('.section-block__submit, .hire-me-close').on('click', function () {
        $('.hire-me-relativ, .section-hire-me').toggleClass('section__enable');
    });
});


