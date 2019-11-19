// $(function () {
//     $('.section-close').on('click', function () {
//         $('.section-pop-up').toggleClass('section__disabled');
//     });
// });


$(function () {
    $('.toggler-button, .section-close').on('click', function () {
        $('.section-pop-up').toggleClass('section__enable');
    });
});
