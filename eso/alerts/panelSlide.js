// JQUERY TOGGLE 

$("#toggle_button").click(function () {
  $("#hamburger , #side-nav").toggleClass("is-active");

});

// TOGGLE PANEL WITH ESCAPE KEY

$(document).keydown(function (e) {
  "use strict";
  if (e.keyCode === 27) {
    if ($("#side-nav").hasClass("is-active")) {
      $("#hamburger , #side-nav").toggleClass("is-active");
    }
  }

});

// TOGGLE ACTIVE CLASS ON MENU ITEMS

$(function () {
  $(".inner-nav-container ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

