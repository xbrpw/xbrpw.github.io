var coords = [];

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var div_coords = document.getElementById("coords");
var clipping_path = new Path2D();

var scale = 2;
canvas.width = 400 * scale;
canvas.height = 400 * scale;

document.onmousemove = move;
document.ontouchmove = move;

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

var touchDown = 0;
document.body.ontouchstart = function() { 
  ++touchDown;
}
document.body.ontouchend = function() {
  --touchDown;
}

function under() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "80px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("¡Felicidades!", canvas.width / 2, canvas.height / 2);
}
under();

function over(){
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "80px Roboto";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("¿Hoy es tu cumple?", canvas.width / 2, canvas.height / 2);
}
over();

function move(e){
  if(e.type == 'touchmove'){
      var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
      var touch = evt.touches[0] || evt.changedTouches[0];
      x = touch.pageX;
      y = touch.pageY;
  } else if (e.type == 'mousemove') {
      x = e.clientX;
      y = e.clientY;
  }

  if(mouseDown || touchDown){
    var b = canvas.getBoundingClientRect();
    x = (x - b.left) * scale;
    y = (y - b.top) * scale;

    ctx.save();
    ctx.beginPath();
    clipping_path.fillStyle = "rgba(0, 0, 0, 0)";
    clipping_path.arc(x, y, 100, 0, 2 * Math.PI);
    clipping_path.closePath();
    ctx.clip(clipping_path);
    under();
    ctx.restore();
  }
}