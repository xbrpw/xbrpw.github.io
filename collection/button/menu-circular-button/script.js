$('.menu-open').click(function(e) {
  $(e.delegateTarget).parent().addClass('open');
});

$('.menu-close').click(function(e) {
  $(e.delegateTarget).parent().removeClass('open');
});