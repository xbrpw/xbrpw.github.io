var giftamount = 4;
var gw = $('.gift').outerWidth(true);
var giftcenter = gw/2;
var cycle = 7;

var containercenter = $('.boxwrapper').outerWidth(true)/2;
for(var i = 0; i <=4; i++)
{
  var giftduplicate = $('.giftwrapper').children().clone(true,true);
   $('.giftwrapper').append(giftduplicate);   
}    

$('.button').click(function(){
  var btn = $(this);
  btn.hide();
  var randomgift = 3;
  var distance = giftamount * gw * cycle + containercenter + (randomgift*gw) - giftcenter;
  
  $( ".giftwrapper" ).css({left: "0"});
  
  $('.giftwrapper').animate({left: "-="+distance},3000,function(){
    alert('You Won Gift' + randomgift); 
    btn.show();                  
   });
});