$('.demo').minicolors({
  defaultValue: '#1a1a1a',
});

$("#button").click(function() {
  var mycolor = $(".demo").val();
  $("body,html").css("background-color", mycolor);

  localStorage.setItem("color", mycolor);
});

if (localStorage.getItem("color")) {
  $("body,html").css("background-color", localStorage.getItem("color"));
  $('.demo').minicolors("value", localStorage.getItem("color"));
}