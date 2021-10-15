$(document).ready(function () {
  console.log("ready!");

  $(".textandimage img").click(function () {
    $(this).toggleClass("enlarge");
  });

  $(".title").click(function () {
    $(".title").toggleClass("smalltitle");
  });





});