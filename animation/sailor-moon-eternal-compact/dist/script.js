var colorsArray = ['#FFD700', '#DAA520', '#B8860B', '#FFFACD'];
$('.heart-frags').each(function(){
  for(var i=0; i<colorsArray.length; i++){
    var randColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    function randColfx(){
      return randColor
    }
    $(this).velocity({fill: randColfx(colorsArray[i])},{loop: true, duration: 1500});
  }
});
$('.circ-frags').each(function(){
  for(var i=0; i<colorsArray.length; i++){
    var randColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    function randColfx(){
      return randColor
    }
    $(this).velocity({fill: randColfx(colorsArray[i])},{loop: true, duration: 1500});
  }
});