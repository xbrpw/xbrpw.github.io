// external js: flickity.pkgd.js

$( document ).ready(function() {
  AOS.init({delay:200,});
  var $carousel = $('.carousel').flickity({
    wrapAround: true,
    autoPlay: true
  });
$carousel.on( 'change.flickity', function( event, index ) {
  //$('.aos').hide();
});
$carousel.on( 'settle.flickity', function( event, index ) {
  AOS.refreshHard ();
   
});

});