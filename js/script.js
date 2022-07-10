// scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // field of view (extent of the scene that is seen on the display)
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near
  1000 // far
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

// render the scene with camera
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material); // takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around
scene.add(cube);

camera.position.z = 5;

// animate
function animate() {
  // renderer to draw the scene every time the screen is refreshed
  requestAnimationFrame(animate);

  // this will be run every frame (normally 60 times per second), and give the cube a nice rotation animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
