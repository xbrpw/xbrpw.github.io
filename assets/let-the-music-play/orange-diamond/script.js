const aspect = window.innerWidth / window.innerHeight;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x444444);
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
let time = 0;

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambient = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambient);
const hemi = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(hemi);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 4;

let diamond;

function animate() {
  requestAnimationFrame(animate);

  if (diamond) {
    diamond.rotation.y += 0.01;
  }

  time += 0.02;

  controls.update();

  renderer.render(scene, camera);
};

const gltfLoader = new THREE.GLTFLoader();
gltfLoader.setCrossOrigin('anonymous');
const dracoLoader = new THREE.DRACOLoader();
// dracoLoader.setDecoderPath("js/libs/draco/");
gltfLoader.setDRACOLoader(dracoLoader);
gltfLoader.load("https://assets.codepen.io/439000/diamond2.glb", function (data) {
  gltf = data;
  diamond = gltf.scene;
  diamond.scale.set(1, 1, 1);
  diamond.position.set(0, 0, 0);
  diamond.castShadow = true;
  diamond.receiveShadow = true;

  const mat = new THREE.MeshPhysicalMaterial({
    map: null,
    color: 0xFFFFFF,
    metalness: 0,
    roughness: 0,
    opacity: 0.3,
    side: THREE.FrontSide,
    transparent: true,
    envMapIntensity: 7,
    premultipliedAlpha: true,
    reflectivity: 2.15
    // shininess: 15,
  });
  console.log(diamond);
  diamond.children[1].material = mat;

  scene.add(diamond);

  new THREE.RGBELoader()
  // .setPath( 'textures/equirectangular/' )
  .load('https://assets.codepen.io/439000/neon_photostudio_1k.hdr', texture => {

    texture.mapping = THREE.EquirectangularReflectionMapping;

    mat.envMap = texture;
    mat.needsUpdate = true;

    console.log('hdr loaded');

  });

  animate();
});