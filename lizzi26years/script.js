let Engine = Matter.Engine,
Render = Matter.Render,
World = Matter.World,
Mouse = Matter.Mouse,
Bodies = Matter.Bodies,
Common = Matter.Common,
Vertices = Matter.Vertices,
Svg = Matter.Svg,
Constraint = Matter.Constraint,
Composites = Matter.Composites,
MouseConstraint = Matter.MouseConstraint;

// create an engine
let engine = Engine.create();
let idRAF = null;
function init() {
  let numm = Math.random();
  $("canvas").remove();

  cancelAnimationFrame(idRAF);
  let width = $(window).width();
  let height = $(window).height();
  let offset = -1;
  // module aliases

  engine.events = {};
  World.clear(engine.world);
  Engine.clear(engine);

  engine = Engine.create();

  engine.world.gravity.x = 0;
  engine.world.gravity.y = 0;
  let mouseConstraint = MouseConstraint.create(engine);
  World.add(engine.world, mouseConstraint);

  // create a renderer
  let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      wireframes: false,
      background: 'transparent',
      width: width,
      height: height,
      showDebug: false,
      showBroadphase: false,
      showBounds: false,
      showVelocity: false,
      showCollisions: false,
      showSeparations: false,
      showAxes: false,
      showPositions: false,
      showAngleIndicator: false,
      showIds: false,
      showShadows: false,
      showVertexNumbers: false,
      showConvexHulls: false,
      showInternalEdges: false,
      showMousePosition: false } });



  // create two boxes and a ground
  // add all of the bodies to the world
  World.add(engine.world, [
  Bodies.rectangle(width / 2, height / 2, 500, 46, {
    isStatic: true,
    render: {
      fillStyle: "transparent" } }),



  Bodies.rectangle(width / 2, height / 2 - 40, 180, 20, {
    isStatic: true,
    render: {
      fillStyle: "transparent" } }),


  Bodies.rectangle(width / 2, height / 2 + 40, 180, 20, {
    isStatic: true,
    render: {
      fillStyle: "transparent" } }),


  Bodies.rectangle(width / 2, height - offset, width, 1, {
    isStatic: true,
    render: {
      fillStyle: "#FFFFFF" } }),


  Bodies.rectangle(width / 2, offset, width, 1, {
    isStatic: true,
    render: {
      fillStyle: "#FFFFFF" } }),


  Bodies.rectangle(offset, height / 2, 1, height, {
    isStatic: true,
    render: {
      fillStyle: "#FFFFFF" } }),


  Bodies.rectangle(width - offset, height / 2, 1, height, {
    isStatic: true,
    render: {
      fillStyle: "#FFFFFF" } })]);




  for (let i = 0; i < 230; i++) {
    let radius = 2 + Math.random() * 20;
    World.add(engine.world, Bodies.circle(
    40 + Math.random() * width - 80,
    40 + Math.random() * 100,
    radius, {
      render: {
        fillStyle: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"][Math.round(Math.random() * 3)] } }));




  }


  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);

  let inc = 0;

  engine.world.gravity.y = 4;
  function update() {
    if (inc > 8) {
      engine.world.gravity.x = Math.cos(inc / 55);
      engine.world.gravity.y = Math.sin(inc / 55);
    }
    inc++;
    idRAF = requestAnimationFrame(update.bind(this));
  }

  update();
}
init();

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


$(window).on("resize", debounce(function () {
  init();
}.bind(this), 200));