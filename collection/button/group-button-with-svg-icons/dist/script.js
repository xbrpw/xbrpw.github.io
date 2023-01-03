// Based on this dribbble: https://dribbble.com/shots/694671-Buttons-Free-PSD

$( ".button-group > div" ).click(function() {
  $('.button-group > div.active').not(this).removeClass('active');
  $( this ).toggleClass( "active" );
});