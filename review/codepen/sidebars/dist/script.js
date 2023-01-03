// templates panel
$('.create-template').click(function(){
  $('.main-sidebar').toggleClass('template-active');
})
// collapse, hover, show
$('.collapse-arrows').click(function(){
  $('.main-sidebar').toggleClass('collapse-active');
})
// pins panel
$('.your-pins').click(function(){
  $('.main-sidebar').toggleClass('pins-active');
})
// user panel
$('.user-stuff').click(function(){
  $('.main-sidebar').toggleClass('user-active');
})