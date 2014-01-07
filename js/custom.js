$(document).ready(function() {
  $(".navbar-default .nav li").click(function(e) {
    $(".navbar-default .nav li").removeClass('active');
    $(this).addClass('active');
  })
});