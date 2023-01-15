let SCENE;
let CAMERA;
let RENDERER;
let COMPOSER;


main();


function main() {
  init();
  animate();
}


function init() {
  initScene();
  initCamera();
  initRenderer();
  initComposer();
  initEventListeners();

  createObjects();

  document.querySelector('.canvas-container').appendChild(RENDERER.domElement);
}


function initScene() {
  SCENE = new THREE.Scene();

  initLights();
}


function initLights() {
  const point = new THREE.PointLight(0xff6666, 2.5, 300, 1);
  point.position.set(0, 100, 50);
  point.castShadow = true;
  point.shadow.mapSize.width = 2048;
  point.shadow.mapSize.height = 2048;
  SCENE.add(point);

  const ambient = new THREE.AmbientLight(0x130000);
  SCENE.add(ambient);
}


function initCamera() {
  CAMERA = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
  CAMERA.position.z = 100;
}


function initRenderer() {
  RENDERER = new THREE.WebGLRenderer({ alpha: true });
  RENDERER.setPixelRatio(window.devicePixelRatio);
  RENDERER.setSize(window.innerWidth, window.innerHeight);
  RENDERER.shadowMap.enabled = true;
  RENDERER.shadowMapSort = true;
  RENDERER.setClearColor(0x0f0000, 1);
  RENDERER.sortObjects = false;
}


function initComposer() {
  COMPOSER = new THREE.EffectComposer(RENDERER);
  COMPOSER.setSize(window.innerWidth, window.innerHeight);

  const renderPass = new THREE.RenderPass(SCENE, CAMERA);
  COMPOSER.addPass(renderPass);

  const bloomPass = new THREE.UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight), 0.5, 1, 0.1);
  COMPOSER.addPass(bloomPass);

  const shaderPass = new THREE.ShaderPass({
    uniforms: {
      uRender: { value: COMPOSER.renderTarget2 },
      uTime: { value: 0.0 } },

    vertexShader: `
            varying vec2 vUv;

            void main() {
                vUv = uv;

                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
    fragmentShader: `
            uniform sampler2D uRender;
            uniform float uTime;

            varying vec2 vUv;

            float rand(vec2 seed);

            void main() {
                float randomValue = rand(vec2(floor(vUv.y * 20.0), uTime));

                vec4 color;

                if (randomValue < 0.02) {
                    color = texture2D(uRender, vec2(vUv.x + randomValue - 0.01, vUv.y));
                } else {
                    color = texture2D(uRender, vUv);
                }
                
                color -= vec4(rand(vec2(vUv.x + vUv.y, uTime)) / 10.0, 0.0, 0.0, 0.0);

                gl_FragColor = color;
            }

            float rand(vec2 seed) {
                return fract(sin(dot(seed, vec2(12.9898,78.233))) * 43758.5453123);
            }` });


  COMPOSER.addPass(shaderPass);

  shaderPass.renderToScreen = true;
}


function initEventListeners() {
  window.addEventListener('resize', onWindowResize);
  document.addEventListener('mousemove', onMouseMove);

  onWindowResize();
}


function onWindowResize() {
  CAMERA.aspect = window.innerWidth / window.innerHeight;
  CAMERA.updateProjectionMatrix();

  RENDERER.setSize(window.innerWidth, window.innerHeight);
  COMPOSER.setSize(window.innerWidth, window.innerHeight);
}


function onMouseMove(e) {
  CAMERA.rotation.y = -Math.sin((e.clientX - window.innerWidth / 2) / 4000);
  CAMERA.rotation.x = -Math.sin((e.clientY - window.innerWidth / 2) / 4000);
}


function animate() {
  requestAnimationFrame(animate);

  SCENE.traverse(child => {
    if (child.isMesh) {
      const shader = child.material.userData.shader;

      if (shader) {
        shader.uniforms.uTime.value = performance.now() / 1000;
      }
    }
  });

  COMPOSER.passes.forEach(pass => {
    if (pass instanceof THREE.ShaderPass) {
      pass.uniforms.uTime.value = performance.now() / 1000;
    }
  });

  render();
}


function render() {
  const t = performance.now() / 5000;
  const deltaX = (Math.sin(t) + Math.sin(2 * t + 1) + Math.sin(3 * t)) / 50;
  const deltaY = (Math.sin(t + 1) - Math.sin(3 * t)) / 50;
  CAMERA.rotation.x += deltaX;
  CAMERA.rotation.y += deltaY;

  COMPOSER.render(SCENE, CAMERA);

  CAMERA.rotation.x -= deltaX;
  CAMERA.rotation.y -= deltaY;
}


function onBeforeCompile(shader) {
  shader.uniforms.uTime = { value: 0.0 };

  shader.vertexShader = shader.vertexShader.replace(
  `#include <uv_pars_vertex>`,
  `varying vec2 vUv;
            uniform float uTime;`);


  shader.vertexShader = shader.vertexShader.replace(
  `#include <uv_vertex>`,
  `vUv = uv;`);


  shader.fragmentShader = shader.fragmentShader.replace(
  `varying vec3 vViewPosition;`,
  `varying vec3 vViewPosition;
            varying vec2 vUv;
            uniform float uTime;`);


  shader.fragmentShader = shader.fragmentShader.replace(
  `#include <map_fragment>`,
  `
            float magic = sin(2.0 * uTime + vUv.x * 30.0 * 3.1416);

            if (magic > 0.9) {
                float delta = magic - 0.9;
                diffuseColor += vec4(vec3(delta), 1.0);
            } else {
                if (sin(vUv.x * 1000.0 + 2.0 * uTime) < -0.9 || sin(40.0 * vUv.y) < -0.5) {
                    diffuseColor = vec4(0.0);
                }
            }`);


  this.userData.shader = shader;
}


function onBeforeCompile2(shader) {
  shader.uniforms.uTime = { value: 0.0 };

  shader.vertexShader = shader.vertexShader.replace(
  `#include <uv_pars_vertex>`,
  `varying vec2 vUv;
            uniform float uTime;`);


  shader.vertexShader = shader.vertexShader.replace(
  `#include <begin_vertex>`,
  `float delta = abs(sin(uTime / 5.0 + position.y / 20.0)) / 5.0;
            mat3 m = mat3(1.0 + delta, 0, 0, 0, 1.0 + delta, 0, 0, 0, 1.0 + delta);
            vec3 transformed = vec3(position) * m;
            vNormal = vNormal * m;`);


  this.userData.shader = shader;
}


function onBeforeCompile3(shader) {
  shader.uniforms.uTime = { value: 0.0 };

  shader.vertexShader = shader.vertexShader.replace(
  `#include <uv_pars_vertex>`,
  `varying vec2 vUv;
            uniform float uTime;`);


  shader.vertexShader = shader.vertexShader.replace(
  `#include <uv_vertex>`,
  `vUv = uv;`);


  shader.fragmentShader = shader.fragmentShader.replace(
  `varying vec3 vViewPosition;`,
  `varying vec3 vViewPosition;
            varying vec2 vUv;
            uniform float uTime;`);


  shader.fragmentShader = shader.fragmentShader.replace(
  `#include <map_fragment>`,
  `
            float magic = sin(uTime + vUv.x * 30.0 * 3.1416);

            if (magic > 0.9) {
                float delta = magic - 0.9;
                diffuseColor += vec4(vec3(delta), 1.0);
                
                if (magic > 0.99 && sin(vUv.y * 40.0) > 0.99) {
                    diffuseColor = vec4(1.0);
                }
            } else {
                if (sin(vUv.x * 1000.0 + uTime) < -0.9 || sin(40.0 * vUv.y) < -0.5) {
                    diffuseColor = vec4(0.0);
                }
            }`);


  this.userData.shader = shader;
}


function createObjects() {
  const geometry = new THREE.TorusKnotGeometry(30, 1, 100, 16);
  const geometry2 = new THREE.SphereGeometry(20, 20, 20);

  const material1 = new THREE.MeshPhysicalMaterial({
    color: 0xff6666,
    reflectivity: 0.05,
    roughness: 0.7,
    transparent: true,
    side: THREE.FrontSide });


  const material2 = new THREE.MeshPhysicalMaterial({
    color: 0xff6666,
    reflectivity: 0.01,
    roughness: 0.8,
    transparent: true,
    side: THREE.BackSide });


  const material3 = new THREE.MeshPhysicalMaterial({
    color: 0xff6666,
    reflectivity: 0.05,
    roughness: 0.7,
    transparent: true,
    side: THREE.FrontSide });


  const material4 = new THREE.MeshPhysicalMaterial({
    color: 0x060000,
    reflectivity: 0.05,
    roughness: 0.7,
    transparent: true,
    side: THREE.BackSide });


  material1.onBeforeCompile = onBeforeCompile;
  material2.onBeforeCompile = onBeforeCompile;
  material3.onBeforeCompile = onBeforeCompile2;
  material4.onBeforeCompile = onBeforeCompile3;

  const sphere1 = new THREE.Mesh(geometry2, material3);
  SCENE.add(sphere1);

  const sphere2 = new THREE.Mesh(geometry2, material4);
  sphere2.scale.set(7, 7, 7);
  SCENE.add(sphere2);

  const t1 = new THREE.Mesh(geometry, material1);
  const t2 = new THREE.Mesh(geometry, material2);
  SCENE.add(t2);
  SCENE.add(t1);

  const t3 = new THREE.Mesh(geometry, material1);
  const t4 = new THREE.Mesh(geometry, material2);
  t3.rotation.set(0, Math.PI / 2, 0);
  t3.scale.set(0.7, 0.7, 0.7);
  SCENE.add(t3);
  SCENE.add(t4);

  const t5 = new THREE.Mesh(geometry, material1);
  const t6 = new THREE.Mesh(geometry, material2);
  t5.rotation.set(0, Math.PI, 0);
  t6.scale.set(0.5, 0.5, 0.5);
  SCENE.add(t5);
  SCENE.add(t6);

  t1.castShadow = true;
  t3.castShadow = true;
  t5.castShadow = true;
  t1.receiveShadow = true;
  t3.receiveShadow = true;
  t5.receiveShadow = true;
  sphere1.castShadow = true;
  sphere1.receiveShadow = true;
}