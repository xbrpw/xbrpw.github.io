var container, camera, scene, renderer, mesh;

var nodes = [];
var nodeInfo = [];
var lines = [];
var lineInfo = [];
var glowNodes = new Set();
var lastNodes = new Set();
var glowLines = new Set();

var iter = 0;
var origin = null;

var loader = new THREE.TextureLoader();

// load a resource
THREE.ImageUtils.crossOrigin = '';
var texture = THREE.ImageUtils.loadTexture('https://dulinimendis.github.io/glow.png');


init();
animate();
glow();

function init() {

  container = document.getElementById('canvas');
  scene = new THREE.Scene();
  const CANVAS_WIDTH = container.offsetWidth;
  const CANVAS_HEIGHT = container.offsetHeight;

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  renderer.setClearColor(0xffffff, 0);
  renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
  container.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 500);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 500;
  camera.lookAt(scene.position);
  scene.add(camera);

  for (let i = 0; i < 150; i++) {
    //sphere position
    let distX = Math.random() * 1500 - 750;
    let distY = Math.random() * 400 - 200;
    let distZ = Math.random() * 50;

    //sphere circular travel info
    let travelInfo = {
      direction: Math.random() > 0.5 ? 1 : -1,
      pathRadius: Math.random() * 25,
      x: distX,
      y: distY,
      z: distZ,
      conNodes: new Set(),
      lines: new Set(),
      glow: false
    };

    //sphere creation
    mesh = new THREE.Mesh(
      new THREE.CircleGeometry(Math.random() * 3 + 3, 64),
      new THREE.MeshBasicMaterial({
        color: "#ffbf80",
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: 0.1
      })
    );

    mesh.position.set(travelInfo.x + travelInfo.pathRadius * Math.cos(iter), travelInfo.y + travelInfo.pathRadius * Math.sin(iter), distZ);

    scene.add(mesh);
    nodes.push(mesh);
    nodeInfo.push(travelInfo);
  }

  let lineCount = 0;
  let threshold = window.innerWidth>500?75:100;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (Math.sqrt(Math.pow(nodeInfo[i].x - nodeInfo[j].x, 2) + Math.pow(nodeInfo[i].y - nodeInfo[j].y, 2)) < threshold) {

        nodeInfo[i].conNodes.add(j);
        nodeInfo[j].conNodes.add(i);
        nodeInfo[i].lines.add(lineCount);
        nodeInfo[j].lines.add(lineCount);

        lineCount += 1;
        var material = new THREE.LineBasicMaterial({
          color: "#ffbf80",
          transparent: true,
          blending: THREE.AdditiveBlending,
          opacity: 0.1
        });

        var geometry = new THREE.Geometry();
        geometry.vertices.push(
          new THREE.Vector3(nodeInfo[i].x + nodeInfo[i].pathRadius * Math.cos(iter),
            nodeInfo[i].y + nodeInfo[i].pathRadius * Math.sin(iter), nodeInfo[i].z),
          new THREE.Vector3(nodeInfo[j].x + nodeInfo[j].pathRadius * Math.cos(iter),
            nodeInfo[j].y + nodeInfo[j].pathRadius * Math.sin(iter), nodeInfo[j].z)
        );

        var line = new THREE.Line(geometry, material);
        scene.add(line);
        lines.push(line);
        lineInfo.push({
          start: i,
          end: j,
          glow: false
        });
      }
    }
  }

}

function animate() {
  iter += 0.003;
  if (iter == 2)
    iter = 0;

  for (let i = 0; i < nodes.length; i++) {
    //sphere circular travel

    nodes[i].position.x = nodeInfo[i].x + nodeInfo[i].pathRadius * Math.cos(nodeInfo[i].direction * iter * Math.PI);
    nodes[i].position.y = nodeInfo[i].y + nodeInfo[i].pathRadius * Math.sin(nodeInfo[i].direction * iter * Math.PI);

  };

  for (let i = 0; i < lines.length; i++) {

    lines[i].geometry.vertices[0].x = nodeInfo[lineInfo[i].start].x +
      nodeInfo[lineInfo[i].start].pathRadius *
      Math.cos(nodeInfo[lineInfo[i].start].direction * iter * Math.PI);
    lines[i].geometry.vertices[0].y = nodeInfo[lineInfo[i].start].y +
      nodeInfo[lineInfo[i].start].pathRadius *
      Math.sin(nodeInfo[lineInfo[i].start].direction * iter * Math.PI);
    lines[i].geometry.vertices[1].x = nodeInfo[lineInfo[i].end].x +
      nodeInfo[lineInfo[i].end].pathRadius *
      Math.cos(nodeInfo[lineInfo[i].end].direction * iter * Math.PI);
    lines[i].geometry.vertices[1].y = nodeInfo[lineInfo[i].end].y +
      nodeInfo[lineInfo[i].end].pathRadius *
      Math.sin(nodeInfo[lineInfo[i].end].direction * iter * Math.PI);
    lines[i].geometry.verticesNeedUpdate = true;
  }

  requestAnimationFrame(animate);

  renderer.render(scene, camera);

}

function makeSprite() {
  let sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: texture,
      color: "#fff",
      transparent: true,
      blending: THREE.AdditiveBlending
    })
  );
  sprite.scale.set(200, 200, 1.0);

  return sprite;
}

function glow() {

  if (origin == null) {

    origin = parseInt(Math.random() * nodes.length);
    nodes[origin].add(makeSprite(origin));
    nodes[origin].material.opacity = 0.5;
    glowNodes.add(origin);
    lastNodes.add(origin);

    setTimeout(function() {
      requestAnimationFrame(glow);
    }, 1000 / 15);

  } else if (lastNodes.size > 0) {

    let newLastNodes = new Set();
    lastNodes.forEach(function(d) {
      let conNodes = nodeInfo[d].conNodes;
      conNodes.forEach(function(d) {
        if (!glowNodes.has(d)) {
          nodes[d].material.opacity = 0.5;
          nodes[d].add(makeSprite());
          glowNodes.add(d);
          newLastNodes.add(d);
        }
      });
      let conLines = nodeInfo[d].lines;
      conLines.forEach(function(d) {
        if (!glowLines.has(d)) {
          lines[d].material.opacity = 0.5;
          glowLines.add(d);
        }
      });
    });
    lastNodes = newLastNodes;
    setTimeout(function() {
      requestAnimationFrame(glow);
    }, 1000 / 15);
  } else {

    dim();
  }

}

var dimCounter = 0;

function dim() {

  if (dimCounter < 50) {

    setTimeout(function() {
      glowNodes.forEach(function(d) {
        if (nodes[d].material.opacity > 0.1)
          nodes[d].material.opacity = nodes[d].material.opacity - 0.02;
        nodes[d].children.forEach(function(c) {
          c.material.opacity = c.material.opacity - 0.02;
        });
      });
      glowLines.forEach(function(d) {
        if (lines[d].material.opacity > 0.1)
          lines[d].material.opacity = lines[d].material.opacity - 0.02;
      });
      dimCounter += 1;
      dim();

      if (dimCounter == 50) {
        dimCounter = 0;
        origin = null;

        glowNodes.forEach(function(d) {
          nodes[d].children.forEach(function(c) {
            c.parent.remove(c);
          });

        });
        glowNodes = new Set();
        glowLines = new Set();
        setTimeout(function() {

          requestAnimationFrame(glow);
        }, 1000 / 50);
      } else
        return;
    }, 1000 / 15);
  }

}