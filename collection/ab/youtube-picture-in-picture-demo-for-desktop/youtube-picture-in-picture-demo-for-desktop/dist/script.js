var win = $(window),
    content = $('.content-wrap');

win.on('scroll', function() {
  if (win.scrollTop() > 0) content.addClass('PiP');
  else content.removeClass('PiP');
});

$('a').on('click', function(e) {
  e.preventDefault()
});

$('.vid-thumb').each(function() {
  var self = $(this),
      src = self.prop('src');
  
  self.css('background-image', 'url(' + src + ')').prop('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
});