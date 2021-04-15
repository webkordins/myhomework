"use strict";

$(function () {
  $('#phone').mask("+38 (099) 999 99 99");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  $('.hamburger, #menu_shadow').click(function () {
    $(".hamburger").toggleClass("is-active");
    $("body").toggleClass("open");
  });
  $('.mobile_menu a').click(function () {
    $(".hamburger").removeClass("is-active");
    $("body").removeClass("open");
  });
  $('.mobile_menu a, .menu__link').click(function (e) {
    e.preventDefault();
    var top = $($(this).attr("href")).offset().top;
    $("html, body").animate({
      scrollTop: top
    }, 500);
  });
});