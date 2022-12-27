const global = {
  scene: null,
  camera: null,
  renderer: null,
  world: null,
  loadManager: null,
  jsonLoader: null,
  texLoader: null,
  debugger: null,
  debug: false };


const environment = {
  tube: null };


const physix = {
  body: null,
  updates: [] };


const mesh = {
  container: null,
  jsonData: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/304639/plus-skin.json',
  texSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/304639/birch.jpg',
  geometry: null,
  plus: null,
  texture: null };


const init = () => {
  initScene();
  initLight();
  initWorld();
  clonePlus();
  cloneBasket();
  initLoader();
  loadModel();
  loadTexture();
};

const initScene = () => {
  global.scene = new THREE.Scene();

  global.camera = new THREE.PerspectiveCamera(
  10,
  window.innerWidth / window.innerHeight,
  0.0001,
  10000);

  global.camera.position.set(60, 60, 50);
  global.camera.lookAt(global.scene.position);
  global.scene.add(global.camera);

  global.renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    logarithmicDepthBuffer: true });

  global.renderer.setSize(window.innerWidth, window.innerHeight);

  document.
  querySelector("[data-stage]").
  appendChild(global.renderer.domElement);
};

const initLight = () => {
  const lightTop = new THREE.PointLight(0xffffff, 0.4, 100, 1);
  lightTop.position.set(15, 40, -10);
  global.scene.add(lightTop);

  const lightBottom = new THREE.PointLight(0xffffff, 0.4, 100, 1);
  lightBottom.position.set(10, -30, 10);
  global.scene.add(lightBottom);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  global.scene.add(ambientLight);

};

const initLoader = () => {
  global.loadManager = new THREE.LoadingManager();
  global.jsonLoader = new THREE.JSONLoader(global.loadManager);
  global.texLoader = new THREE.TextureLoader(global.loadManager);
  global.texLoader.setCrossOrigin('anonymous');
  global.loadManager.onLoad = function () {
    createTube();
    createBasket();
    createPlus(animate);
  };

};

const loadModel = () => {
  global.jsonLoader.load(mesh.jsonData, function (geometry) {
    mesh.geometry = geometry;
  });
};

const loadTexture = () => {
  global.texLoader.load(mesh.texSrc, function (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    mesh.texture = texture;
  });
};

const initWorld = () => {
  global.world = new CANNON.World();
  global.world.broadphase = new CANNON.NaiveBroadphase();
  global.world.gravity.set(0, -50, 0);
  global.world.solver.iterations = 10;

  global.debugger = new THREE.CannonDebugRenderer(global.scene, global.world);
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createBall = () => {
  let mass = 10.0;
  let radius = 0.4;
  let x = 0.1;
  let y = 7.2;
  let z = 0;

  let shape = new CANNON.Sphere(radius * 1.1);

  let body = new CANNON.Body({
    mass: mass,
    shape: shape,
    linearDamping: 0.0,
    angularDamping: 0.0 });

  body.position.set(x, y, z);
  global.world.add(body);

  const colors = [0x47debd, 0xffffff, 0x7821ec, 0x2e044e];
  const color = colors[getRandomInt(0, 3)];

  let material = new THREE.MeshStandardMaterial({
    emissive: 0x333333,
    emissiveIntensity: 0.3,
    color: color,
    roughness: 0.9,
    metalness: 0.1 });


  let ball = new THREE.Mesh(
  new THREE.SphereGeometry(radius, 32, 32),
  material);

  ball.position.set(x, y, z);
  global.scene.add(ball);

  let array = [body, ball];
  physix.updates.push(array);
};

const updatePhysix = () => {

  for (let i = 0; i < physix.updates.length; i++) {
    physix.updates[i][1].position.copy(physix.updates[i][0].position);
    physix.updates[i][1].quaternion.copy(physix.updates[i][0].quaternion);
  }
};

const clonePlus = () => {
  const offset = 3;
  const radius = 1.1;

  physix.body = new CANNON.Body({
    mass: 0,
    linearDamping: 0.0,
    angularDamping: 0.0 });

  let sphere = new CANNON.Sphere(radius);

  const pos = [
  [-offset, 0, 0],
  [offset, 0, 0],
  [0, -offset, 0],
  [0, offset, 0],
  [0, 0, -offset],
  [0, 0, offset]];


  for (let i = 0; i < pos.length; i++) {
    physix.body.addShape(sphere, new CANNON.Vec3(
    pos[i][0], pos[i][1], pos[i][2]));

  }

  const rot = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]];


  for (let i = 0; i < rot.length; i++) {
    let cylinder = new CANNON.Cylinder(radius, radius, radius * 6, 16);
    let q = new CANNON.Quaternion();
    q.setFromAxisAngle(
    new CANNON.Vec3(rot[i][0], rot[i][1], rot[i][2]),
    Math.PI * 0.5);

    cylinder.transformAllPoints(new CANNON.Vec3(), q);
    physix.body.addShape(cylinder);
  }

  physix.body.position.set(0, 0, 0);
  physix.body.aabbNeedsUpdate = true;
  global.world.add(physix.body);
};

const createBasket = () => {
  const radius = 4;
  const thickness = 0.2;
  const basket = new THREE.Object3D(0, 0, 0);

  const material = new THREE.MeshStandardMaterial({
    emissive: 0xf7d514,
    emissiveIntensity: 0.2,
    color: 0xf7d514,
    bumpMap: mesh.texture,
    bumpScale: 0.9,
    roughness: 0.9,
    metalness: 0.1,
    side: THREE.DoubleSide });


  for (let i = 0; i < 2; i++) {
    let s = i * thickness;
    const geometry = new THREE.CylinderGeometry(radius - s, radius - s, 3, 64, 1, true);
    const cylinder = new THREE.Mesh(geometry, material);
    basket.add(cylinder);
  }

  let ringGeometry = new THREE.RingGeometry(radius - thickness, radius, 64, 1);
  const ring = new THREE.Mesh(ringGeometry, material);
  ring.position.set(0, 1.5, 0);
  ring.rotation.set(Math.PI * 0.5, 0, 0);
  basket.add(ring);

  let circleGeometry = new THREE.CircleGeometry(radius - thickness, 64);
  var circle = new THREE.Mesh(circleGeometry, material);
  circle.position.set(0, 0, 0);
  circle.rotation.set(Math.PI * 0.5, 0, 0); //
  basket.add(circle);

  basket.position.set(10, -3, 0);
  global.scene.add(basket);
};

const cloneBasket = () => {
  const radius = 4;
  const thickness = 0.1;
  const offset = 10;
  const units = 16;
  const theta = Math.PI * 2 / units;

  const body = new CANNON.Body({ mass: 0 });
  const cylinder = new CANNON.Cylinder(radius, radius, thickness, 16);
  const q = new CANNON.Quaternion();
  q.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), Math.PI * 0.5);
  cylinder.transformAllPoints(new CANNON.Vec3(), q);
  body.addShape(cylinder);
  body.position.set(offset, -3, 0);
  global.world.add(body);

  for (let i = 0; i < 16; i++) {
    let angle = theta * i;
    let x = radius * Math.cos(angle);
    let z = radius * Math.sin(angle);
    let unit = new CANNON.Body({ mass: 0 });
    let box = new CANNON.Box(new CANNON.Vec3(thickness, 3, theta * 2));
    unit.addShape(box);
    unit.position.set(x + offset, -4.5, z);
    unit.quaternion.setFromEuler(0, -theta * i, 0);
    global.world.add(unit);
  }
};

const createPlus = callback => {
  mesh.container = new THREE.Group();
  global.scene.add(mesh.container);

  const material = new THREE.MeshStandardMaterial({
    emissive: 0xf7d514,
    emissiveIntensity: 0.2,
    color: 0xf7d514,
    bumpMap: mesh.texture,
    bumpScale: 0.9,
    roughness: 0.9,
    metalness: 0.1 });


  mesh.plus = new THREE.Mesh(mesh.geometry, material);
  mesh.container.add(mesh.plus);

  const array = [mesh.plus, physix.body];
  physix.updates.push(array);

  callback();
};

const createTube = () => {
  const geometry = new THREE.CylinderGeometry(0.6, 0.6, 20, 32);
  const material = new THREE.MeshStandardMaterial({
    emissive: 0xf7d514,
    emissiveIntensity: 0.2,
    color: 0xf7d514,
    bumpMap: mesh.texture,
    bumpScale: 0.9,
    roughness: 0.9,
    metalness: 0.1 });

  environment.tube = new THREE.Mesh(geometry, material);
  environment.tube.position.set(0.1, 18, 0);
  global.scene.add(environment.tube);
};

const animate = () => {
  const time = 0.8;
  const timeStep = 1.0 / 100.0;
  let rotate = { x: 0 };

  const tl = new TimelineMax({
    repeat: -1,
    onUpdate: () => {
      global.world.step(timeStep);
      render();
    } });


  for (let i = 1; i < 5; i++) {
    tl.to(environment.tube.position, time * 0.5, {
      y: 17,
      ease: Power4.easeIn,
      onComplete: () => {
        createBall();
      } }).

    to(environment.tube.position, time * 0.5, {
      y: 18,
      ease: Power4.easeOut }).

    to(mesh.plus.rotation, time, {
      z: -Math.PI * i * 0.5,
      ease: Power4.easeIn });

  }

};

window.addEventListener("resize", resizeHandler);

const render = () => {
  updatePhysix();
  if (global.debug) global.debugger.update();
  global.renderer.render(global.scene, global.camera);
};

function resizeHandler() {
  global.renderer.setSize(window.innerWidth, window.innerHeight);
  global.camera.aspect = window.innerWidth / window.innerHeight;
  global.camera.updateProjectionMatrix();
}

init();