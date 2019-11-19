// $(function () {
//     $('.section-close').on('click', function () {
//         $('.section-pop-up').toggleClass('section__disabled');
//     });
// });


$(function () {
    $('.block__toggler, .section-close').on('click', function () {
        $('.section-pop-up').toggleClass('section__enable');
    });
});
