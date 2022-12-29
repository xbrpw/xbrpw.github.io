function draw() {
  $("#wrap, body").addClass('hide');
  $(".refresh").addClass("loading");
  setTimeout(function() {
    $("#wrap, body").removeClass("hide");
    $(".refresh").removeClass("loading");
    $(".row").removeClass();
    $("#wrap > div").addClass("row");
    $(".cell").removeClass();
    $("#wrap .row > div").addClass("cell");
    if ($("body").hasClass("darkmode")){
      $(".cell").addClass("darkmode");
    }
    $(wrap)
        .get(0)
        .style.setProperty("--hue", (Math.floor(Math.random() * 2) * 100) + 'deg');
    $("#wrap .cell").each(function() {
      $(this).addClass("cell" + Math.floor(Math.random() * 16 + 1));
$(this).parent().removeClass();     $(this).parent().addClass("row full" + Math.floor(Math.random() * 22 + 1));
    });
    $(".cell").each(function() {

      $(this)
        .parent()
        .get(0)
        .style.setProperty("--size", Math.floor(Math.random() * 2 + 1));

      
      $(this)
        .parent()
        .get(0)
        .style.setProperty("--angle", ((Math.floor(Math.random() * 2) + 1) * 180) + "deg");
      
    });
  }, 2000);
  
  
}

$(".darkmode").click(function(){
  $("body").toggleClass("darkmode");
  $(this).toggleClass("active");
  draw();
})

$(".refresh").on("click", function() {
    draw();
  });

$(document).ready(function(){
  $("#wrap").removeClass('hide');
  draw();
})