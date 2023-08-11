//---------------------------------Generales
function anclaanimada() {
  //redirigir anclas de forma animada
  $(".scroll").on('click', function (e) {
    e.preventDefault();
    var codigo = $(this).attr("href");
    $("html,body").animate({scrollTop: $(codigo).offset().top}, 600);
  });
}

function togglemenu() {
  if ($(window).width() < 1200) {
    $('header .navbar-toggler').on('click', function () {
      $('body').toggleClass('header-active');
    });
  }
}

function ctaFixed() {
    var btnFix = $('.btn-fixed');
    var btnFix_offset = btnFix.offset();

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > btnFix_offset.top) {
        btnFix.addClass('active-fixed');
      } else {
        btnFix.removeClass('active-fixed');
      }
    });
}

function close(){
  $('.wrapper-action').on('click', function () {
    $(this).parents('.menu').toggleClass('selected');
  });
}


/*jQuery Global Functions*/
$(document).ready(function () {
  close();
});
