"use strict";

$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 740) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });
});