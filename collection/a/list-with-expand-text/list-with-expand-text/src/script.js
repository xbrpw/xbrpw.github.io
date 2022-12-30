$(window).on('load', function(){
   $('li').on('mouseenter', function(){
     var height = $(this).find('span').height();
     
     $(this).find('p').css('height', height);
     
     $(this).on('mouseleave', function(){
        $(this).find('p').css('height', 0);
     });
   });
});