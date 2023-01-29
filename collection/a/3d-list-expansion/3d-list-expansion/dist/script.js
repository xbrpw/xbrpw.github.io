$("a.reset").click(function(e){
  e.preventDefault();

  $("div.top").removeClass("dot1");
  $("div.mid").removeClass("dot2");
  $("div.btm").removeClass("dot3");
  $("li.title-animate").removeClass("title-animate");

  setTimeout(function(){
    $("div.top").addClass("dot1");
    $("div.mid").addClass("dot2");
    $("div.btm").addClass("dot3");
    $("ul.titles li").addClass("title-animate");
  }, 500);
});