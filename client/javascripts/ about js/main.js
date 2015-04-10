// /*jshint jquery:true */
// /*global $:true */

// var $ = jQuery.noConflict();

// $(document).ready(function($) {
//     "use strict";
//     /* global google: false */


//     /* ==============================================
//         Full height home-section
//         =============================================== */

//         var windowHeight = $(window).height(),
//         topSection = $('#home-section');
//         topSection.css('height', windowHeight);

//         $(window).resize(function(){
//             var windowHeight = $(window).height();
//             topSection.css('height', windowHeight);       
//         });

//     /* ==============================================
//         Collapse menu on click
//         =============================================== */

//         $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
//             if($(window).width() < 768 )
//                 $('.navbar-collapse').collapse('hide');
//         });

//     /* ==============================================
//         Scrollspy
//         =============================================== */

//         $('body').scrollspy({
//          target: '#navigation-nav',
//            offset: 150      //px/
//        });

//     /* ==============================================
//         Morphext - text rotator
//         =============================================== */

//         $("#text-rotator").Morphext({
//             // The [in] animation type. Refer to Animate.css for a list of available animations.
//             animation: "fadeInDown",
//             // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
//             separator: ",",
//             // The delay between the changing of each phrase in milliseconds.
//             speed: 4000
//         });

//     /* ==============================================
//         Smooth Scroll on anchors
//         =============================================== */  

//         $('a[href*=#]:not([href=#])').click(function() {
//             if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//               var target = $(this.hash);
//               target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//               if (target.length) {
//                 $('html,body').animate({
//                   scrollTop: target.offset().top -50
//               }, 1000);
//                 return false;
//             }
//         }
//     });

//     /* ==============================================
//         Backstrech - home section backgroud
//         =============================================== */

//         $("#home-section").backstretch("images/temp/home-bg.jpg");


//     /* ==============================================
//         Counter increment
//         =============================================== */

//         function countUp() {   
//             var dataperc;   
//             $('.statistic-percent').each(function(){
//                 dataperc = $(this).attr('data-perc'),
//                 $(this).find('.percentfactor').delay(6000).countTo({
//                     from: 0,                 // number to begin counting
//                     to: dataperc,      
//                     speed: 1000,             // ms
//                     refreshInterval: 10,
//                 });  
//             });
//         }

//         $('.statistic-percent').waypoint(function() {
//             countUp();
//         },
//         {
//             offset: '95%',                 
//             triggerOnce: true
//         });


//     /* ==============================================
//         Animated content
//         =============================================== */

//         $('.animated').appear(function(){
//             var el = $(this);
//             var anim = el.data('animation');
//             var animDelay = el.data('delay');
//             if (animDelay) {

//                 setTimeout(function(){
//                     el.addClass( anim + " in" );
//                     el.removeClass('out');
//                 }, animDelay);

//             }

//             else {
//                 el.addClass( anim + " in" );
//                 el.removeClass('out');
//             }    
//         },{accY: -150});  


//     /* ==============================================
//         Parallax
//         =============================================== */

//         $.stellar({
//             horizontalScrolling: false,
//             verticalOffset: 0
//         });

//     /* ==============================================
//         Easy PieChart
//         =============================================== */

//         var PieChart = $('.skill-item');
//         PieChart.appear(function() {
    
//             $(function() {
//                 $('.chart').easyPieChart({
//                     easing: 'easeOutBounce',
//                     onStep: function(from, to, percent) {
//                         $(this.el).find('.percent').text(Math.round(percent));
//                     }
//                 });
//                 var chart = window.chart = $('.chart').data('easyPieChart');
//                 $('.js_update').on('click', function() {
//                     chart.update(Math.random()*200-100);
//                 });
//             });
//         });

//     /* ==============================================
//         MIXITUP PORTFOLIO
//         =============================================== */ 

//         $('.home-projects').mixItUp();

//     /* ==============================================
//         BxSlider Testimonial
//         =============================================== */ 

//         $(".testimonials-slider").bxSlider({
//             adaptiveHeight: true,
//             nextSelector: ".tc-arrows .tc-arrow-right",
//             prevSelector: ".tc-arrows .tc-arrow-left",
//             nextText: "<i class='fa fa-angle-right'></i>",
//             prevText: "<i class='fa fa-angle-left'></i>",
//             pager: false,
//                 auto: true,          // Boolean:  (true/false)
//                 pause: 5000,         // Milliseconds before progressing to next slide automatically. Use a falsey value to disable.
//                 mode: 'vertical',    // Choose fade, slide
//                 useCSS: false        // Boolean:  (true/false)
//             });

//     /* ==============================================
//         Placeholder
//         =============================================== */ 

//         $('input, textarea').placeholder();


//     /* ==============================================
//         MagnificPopup - lightbox effect
//         =============================================== */

//         // Example with multiple objects
//         $('.zoom').magnificPopup({
//             type: 'image',
//             gallery: {
//                 enabled: true
//             }
//         });

//         $('.video-pop-up').magnificPopup({
//             type: 'iframe',
//         });

//     /* ==============================================
//         OWL Carousel
//         =============================================== */

//         $(".owl-carousel").owlCarousel({
   
//             autoPlay: 3000, //Set AutoPlay to 3 seconds

//             items : 5,
//             itemsDesktop : [1199,3], //number of items displayed on resolution less then 1199px
//             itemsDesktopSmall : [979,3] //number of items displayed on resolution less then 979px

//         });

//     /* ==============================================
//         Responsive video
//         =============================================== */

//         $(".project-video, .entry-video").fitVids();


//     /* ==============================================
//         Contact Map
//         =============================================== */ 

//     var contact = {"lat":"51.51152", "lon":"-0.125198"}; //change coordinates map here

//     var mapContainer = $('.map');
//     mapContainer.gmap3({
//         action: 'addMarker',
//         marker:{
//             options:{
//                 icon : new google.maps.MarkerImage('images/marker.png')
//             }
//         },
//         latLng: [contact.lat, contact.lon],
//         map:{
//             center: [contact.lat, contact.lon],
//             zoom: 17
//         },
//     },
//     {action: 'setOptions', args:[{scrollwheel:false}]}
//     );

//     /* ==============================================
//         Contact Form
//         =============================================== */

//         $('#contactform').submit(function(){

//             var action = $(this).attr('action');

//             $("#alert").slideUp(750,function() {
//                 $('#alert').hide();

//                 $('#submit')
//                 .after('<img src="images/ajax-loader.gif" class="contactloader" />')
//                 .attr('disabled','disabled');

//                 $.post(action, {
//                     name: $('#name').val(),
//                     email: $('#email').val(),
//                     message: $('#message').val()
//                 },
//                 function(data){
//                     document.getElementById('alert').innerHTML = data;
//                     $('#alert').slideDown('slow');
//                     $('#contactform img.contactloader').fadeOut('slow',function(){$(this).remove();});
//                     $('#submit').removeAttr('disabled');
//                     if(data.match('success') !== null) {
//                         $('#name').val('');
//                         $('#email').val('');
//                         $('#message').val('');
//                     }
//                 }
//                 );

//             });

//             return false;

//         });

// });

//     /* ==============================================
//         Preloader
//         =============================================== */

//         $(window).load(function () {
//             "use strict";
//         // will first fade out the loading animation
//         $("#loading-animation").fadeOut();
//         // will fade out the whole DIV that covers the website.
//         $("#preloader").delay(600).fadeOut("slow");
//     });