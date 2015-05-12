
function main() {

(function () {
   'use strict';
   // Contact form toggle hide/show
    $(document).ready(function() {
      $("#show").click(function() {
        $("#contact").slideToggle("slow,swing");
      });
    });

    // Wow animation
      new WOW().init();

    // Header carousel slider
      $('#banner').carousel({
        interval: 7000
      });
    
    // Header/Vision carousel slider
      $('#carousel-vision').carousel({
        interval: 30000
      });


    // jQuery for page scrolling feature - requires jQuery Easing plugin
      $(function() {
        $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
            }, 900, 'easeInOutExpo');
          event.preventDefault();
        });
      });

    // Highlight the top nav as scrolling occurs
      $('body').scrollspy({
          target: '.navbar-fixed-top' ,
          offset: 75
      });
}());

}
main();


$(document).ready(function ($) {

    // delegate calls to data-toggle="lightbox"
    $(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            onShown: function() {
                if (window.console) {
                    return console.log('Checking our the events huh?');
                }
            },
            onNavigate: function(direction, itemIndex) {
                if (window.console) {
                    return console.log('Navigating '+direction+'. Current item: '+itemIndex);
                }
            }
        });
    });

    //Programatically call
    $('#open-image').click(function (e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });
    $('#open-youtube').click(function (e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });

    $(document).delegate('*[data-gallery="navigateTo"]', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            onShown: function() {
                var a = this.modal_content.find('.modal-footer a');
                if(a.length > 0) {
                    a.click(function(e) {
                        e.preventDefault();
                        this.navigateTo(2);
                    }.bind(this));
                }
            }
        });
    });
});


var arrayImages = new Array(
    "img/banner/RP-003-banner-1600px.jpg",
    "img/banner/RP-004-banner-1600px.jpg",
    "img/banner/RP-005-banner-1600px.jpg",
    "img/banner/RP-006-banner-1600px.jpg",
    "img/banner/RP-007-banner-1600px.jpg",
    "img/banner/RP-008-banner-1600px.jpg",
    "img/banner/RP-009-banner-1600px.jpg",
    "img/banner/RP-002-banner-1600px.jpg",
    "img/banner/RP-001-banner-1600px.jpg"
);

$.qPreloadImages({
    images: arrayImages,
    complete: function() {

        console.log("done");
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});

        $.each( arrayImages, function(index,value){
            var img = $('<img class="dynamic">');
            img.attr('src', value);
            img.prependTo('.thumbnail').hide().fadeIn(2000);
        }); // each END
    }
 });

