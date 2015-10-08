$(document).ready(function($) {

// $("#flip").click(function(){
//   $("#panel").slideToggle.(function() {
//     $(this).show();
//   });
// });
$('#flip').click(function() {
    $('#panel').slideToggle('fast',function() {    ///set of speed
        $(this).show();
    });
});
$("h4").mouseenter(function() {
  $(this).css("background-color", "#8FD8D8");
});
$(".project-image").click(function() {
  $(this).css("width", "300px");
});
$("#social-links a img").mouseenter(function() {
    $(this).css("background-color", "#6bd2db");
    $(this).css("border-radius", "10px");
})
$("#social-links a img").mouseleave(function() {
  $(this).css("background-color", "#FFF68F");
  $(this).css("border-radius", "10px");
});
$("#low-vision").click(function() {
  $("html").toggleClass("changeTextColors");
  $("h4").css("background-color", "#FFF");
  $("body").toggleClass('body-change');
});

$("#contact-button").click(function() {
  $(".reference-contact").show();
});




});
//1. The text under "Click for short bio" should not be visible unless the user clicks the flip id.
  // Hint: Google the jQuery slideToggle function


// 1. When hovering over the h4 tags (Objective, Experience, etc..), the inside of the dotted box should turn light blue and remain light blue.
//
// 1. When one of the project images is clicked, it should expand to 300px wide.
//
// 1. When hovering over the Twitter, Instagram, and LinkedIn buttons, the background behind the buttons should turn   #6bd2db. This has not been loaded into a CSS class and must be done within the function. Make sure you get those corners rounded so the color doesn't pop out in the corners! When you leave the image, the background should turn #FFF68F.
