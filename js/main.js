(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
     
    });
      });
})(jQuery);


function acceptCookie(){
  document.getElementsByClassName("cookie")[0].style.display="none";
}

(function($){
  $(function() {
    $('.nav__item').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
     
    });
      });
})(jQuery);