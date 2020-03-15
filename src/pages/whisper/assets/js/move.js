$(document).ready(function () {
  $('#category li').hover(function () {
    $(this).addClass('current');
    var num = $(this).attr('data-index');
    $('.slider').css({ 'top': ((parseInt(num) - 1) * 40) + 'px' });
  }, function () {
    $(this).removeClass('current');
    $('.slider').css({ 'top': 0 });
  });
  $(window).scroll(function (event) {
    var winPos = $(window).scrollTop();
    if (winPos > 750)
      $('#categoryandsearch').addClass('fixed');
    else
      $('#categoryandsearch').removeClass('fixed');
  });
});
