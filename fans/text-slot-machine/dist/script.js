/* -------------------------------------- */
/* ------------  Settings  -------------- */
/* -------------------------------------- */

text = 'MACIEL P';  // The message displayed
chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';  // All possible Charactrers
scale = 50;  // Font size and overall scale
breaks = 0.002;  // Speed loss per frame
endSpeed = 0.04;  // Speed at which the letter stops
firstLetter = 180;  // Number of frames untill the first letter stopps (60 frames per second)
delay = 30;  // Number of frames between letters stopping



canvas = document.querySelector('canvas');
ctx = canvas.getContext('2d');

text = text.split('');
chars = chars.split('');
charMap = [];
offset = [];
offsetV = [];

for(var i=0;i<chars.length;i++){
  charMap[chars[i]] = i;
}

for(var i=0;i<text.length;i++){
  var f = firstLetter+delay*i;
  offsetV[i] = endSpeed+breaks*f;
  offset[i] = -(1+f)*(breaks*f+2*endSpeed)/2;
}

(onresize = function(){
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
})();

requestAnimationFrame(loop = function(){
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.globalAlpha = 1;
var my_gradient=
  ctx.createLinearGradient(0,0,0,170);  
my_gradient.addColorStop(0, "#111");
my_gradient.addColorStop(0.1, "#222");
  my_gradient.addColorStop(0.2, "rgb(29, 13, 13)");
my_gradient.addColorStop(0.3, "rgba(44, 18, 18, 0.692)");
  my_gradient.addColorStop(0.4, "rgba(44, 18, 18, 0.692)");
  my_gradient.addColorStop(0.5, "rgb(29, 13, 13)");
    my_gradient.addColorStop(0.6, "#111");
  my_gradient.addColorStop(0.7, "rgb(29, 13, 13)");
  my_gradient.addColorStop(0.8, "rgb(29, 13, 13)");
    my_gradient.addColorStop(0.9, "rgba(44, 18, 18, 0.692)");
  my_gradient.addColorStop(0.8, "#222");
  my_gradient.addColorStop(1, "rgb(29, 13, 13)");
ctx.fillStyle = my_gradient;


  
  ctx.fillRect(0,(canvas.height-scale)/2,canvas.width,scale);
  for(var i=0;i<text.length;i++){
    ctx.fillStyle = '#ccc';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.setTransform(1,0,0,1,Math.floor((canvas.width-scale*(text.length-1))/2),Math.floor(canvas.height/2));
    var o = offset[i];
    while(o<0)o++;
    o %= 1;
    var h = Math.ceil(canvas.height/2/scale)
    for(var j=-h;j<h;j++){
      var c = charMap[text[i]]+j-Math.floor(offset[i]);
      while(c<0)c+=chars.length;
      c %= chars.length;
      var s = 1-Math.abs(j+o)/(canvas.height/2/scale+1)
      ctx.globalAlpha = s
      ctx.font = scale*s + 'px Montserrat'
      ctx.fillText(chars[c],scale*i,(j+o)*scale);
    }
    offset[i] += offsetV[i];
    offsetV[i] -= breaks;
    if(offsetV[i]<endSpeed){
      offset[i] = 0;
      offsetV[i] = 0;
    }
  }
  
  requestAnimationFrame(loop);
});