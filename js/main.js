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

function showSymu() {
  document.getElementsByClassName("symu")[0].style.cssText = "display:block; z-index: 100;"; 
  document.getElementsByClassName("shadow")[0].style.display="block";
}

function hideSymu() {
  document.getElementsByClassName("symu")[0].style.display = "none";
  document.getElementsByClassName("shadow")[0].style.display="none";

}

(function($){
  $(function() {
    $('.nav__item').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
     
    });
      });
})(jQuery);
