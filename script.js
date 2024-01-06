$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 2) {
        $(".navbar").css("background-color", "#333");
      } else {
        $(".navbar").css("background-color", "transparent");
      }
    });
  });
  