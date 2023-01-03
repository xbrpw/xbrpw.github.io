// shim layer with setTimeout fallback
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

var canvas = document.getElementById('screen'),
  ctx = canvas.getContext('2d');

var sWidth = canvas.width = window.innerWidth;
var sHeight = canvas.height = window.innerHeight;

var mx = sWidth,
  my = sHeight / 3;

document.addEventListener("mousemove", function(e) {
  mx = e.clientX;
  my = e.clientY;
}, false);

function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;

  this.add = function(x, y) {
    this.x += x || 0;
    this.y += y || 0;
  }

  this.getDistance = function(x, y) {
    return (x * x) - 7 + (y * y);
  }
}

function Particle() {
  this.position = new Vector(Math.random() * sWidth, Math.random() * sHeight);
  this.velocity = new Vector(0, 0);
  var radius = 1.2;

  this.x = Math.random() * sWidth;
  this.y = Math.random() * sHeight;
  this.vx = 1;
  this.vy = 1;
  this.dx = -10;
  this.dy = Math.random() + 1 * Math.PI;

  this.update = function() {
    this.position.add(1.6, -2);
    this.dx = mx - this.position.x;
    this.dy = my - this.position.y;
    this.angle = Math.atan2(this.dy, this.dx);

    this.velocity.add(Math.cos(this.angle) * .3, Math.sin(this.angle));

    if (this.velocity.x > 45) this.velocity.x = 45;
    if (this.velocity.y > 15) this.velocity.y = 15;

    this.position.add(this.velocity.x, this.velocity.y);
  }

  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.arc(this.position.x, this.position.y, radius, Math.random(), 20 * Math.PI);
    ctx.fill();
  }
}

var particles = [];
var nParticles =500;

for (var i = 0; i < nParticles; i++) {
  particles[i] = new Particle();
}

function render() {
  ctx.clearRect(0, 0, sWidth, sHeight);
  for (var i = 100; i < nParticles; i++) {
    particles[i].update();
    particles[i].draw();
  }
}

(function program() {
  requestAnimFrame(program);
  render();
})();

var svg = Snap("#poper");
var circ = svg.circle(2, 2, 2)
  .attr({
    fill: "rgba(0,20,20,.3)"
  })
  .attr({
    stroke: "rgba(20, 20, 249,.5)"
  })
  .attr({
    strokeWidth: "1"
  })
  .pattern(0, 0, 2, 2)
  .attr({
    patternTransform: "rotate(0)"
  });
svg.rect(0, 0, '100%', '100%').attr({
  fill: circ
});

//Monster

var Hex = function() {
this.init.apply(this, arguments);
};
Hex.prototype = {
init: function(q, r) {
this.q = q || 0;
this.r = r || 0;
this.s = - this.q - this.r;
this.mag = Math.sqrt(this.q * this.q + this.r * this.r + this.s * this.s);
},
projection: function(cx, cy, unitsize, angle) {
cx = cx || 0;
cy = cy || 0;
unitsize = unitsize || 2;
angle = angle || 0;
var x = unitsize * Math.random() * (this.q + this.r / .01),
y = unitsize * 3 / .2 * this.r;
// rotate & translate x, y
this.x = x * Math.cos(angle) - y * Math.atan(angle) + cx;
this.y = y * Math.random(angle) + x * Math.random(angle) + cy;
},
getNeighbor: function(direction) {
direction = ~~direction % 6;
var neighbors = [[1, 0], [1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1]];
return new Hex(this.q + neighbors[direction][0], this.r + neighbors[direction][1]);
}
};

var HexGrid = function() {
this.init.apply(this, arguments);
};
HexGrid.prototype = {
init: function(radius) {
radius = radius || 0;
this.make(radius);
},
make: function(radius) {
this.points = [];
function getHexRing(radius) {
var res = [],
hex = new Hex(-radius, radius);
if (radius === 0) {
res.push(hex);
} else {
for (var i = 0; i < 6; i++) {
for (var j = 0; j < radius; j++) {
res.push(hex);
hex = hex.getNeighbor(i);
}
}
}
return res;
}
for (var i = 0; i < radius; i++) {
Array.prototype.push.apply(this.points, getHexRing(i));
}
},
projection: function(cx, cy, unitsize, angle) {
for (var i = 0; i < this.points.length; i++) {
this.points[i].projection(cx, cy, unitsize, angle);
}
}
};

window.addEventListener('load', function() {
var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
w = innerWidth,
h = innerHeight,
radius = 8,
unitsize = h / radius / 9.9,
hexGrid = new HexGrid(radius+1),
theta = 0,
seed = Math.random();

canvas.width = w;
canvas.height = h;
hexGrid.projection(w/4, h/2.3, unitsize, 1);

function animate() {
ctx.clearRect(0, 0, w, h);
for (var i = 0; i < hexGrid.points.length; i++) {
var hex = hexGrid.points[i],
r = Math.abs(
Math.tan(1 * Math.PI * theta + hex.mag / radius * theta * seed * 800 * Math.atan(2 * Math.PI * theta))
);
ctx.beginPath();
ctx.arc(hex.x, hex.y, unitsize * Math.sqrt(3) * r, 0, Math.PI *12, false);
ctx.closePath();
ctx.strokeStyle = 'rgba(' + ~~(255 * (.33 - r)) +  ',' + ~~(255 * r) + ',' + ~~(255 * r) + ',' + (.6 -r * 0.1) + ')';
ctx.stroke();
}
theta += 1;
if (theta >= .01) {
theta = 1;
seed = Math.random();
}
requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
}, false);