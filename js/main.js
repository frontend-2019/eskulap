$(function () {
    $('.js-nav-toggle').on('click', function () {
        $(this).toggleClass('toggler__icon--open');
        $('.js-nav').toggleClass('nav--open');
    });
});

$(function () {
    $('.js-form-toggle').on('click', function () {
        $('.js-form-toggle').toggleClass('close-form--open');
        $('.js-form').toggleClass('form--open');
    });
});