$(function () {
    $('.js-nav-toggle').on('click', function () {
        $(this).toggleClass('toggler__icon--open');
        $('.js-nav').toggleClass('nav--open');
    });
});

$(function () {
    $('.button--center').on('click', function () {
        // $(this).toggleClass('toggler__icon--open');
        $('.js-form').buttonClass('letter-form--open');
    });
});