import * as THREE from "three";
import * as _u from "./utils";
import testVertexShader from "!raw-loader!./shaders/vertex.glsl";
import testFragmentShader from "!raw-loader!./shaders/fragment.glsl";

const canvasParameters = {
  width: 0,
  height: 0,
};

/**
 * SCENE CERTIFICATES
 */
let scene = new THREE.Scene();
let canvas;
let canvasDiv;

let renderer;
let camera;
/**
 * RESIZE
 */
let canvasPosition;
const resize = () => {
  canvasPosition = canvas.getBoundingClientRect();
  canvasParameters.height = canvasDiv.clientHeight;
  canvasParameters.width = canvasDiv.clientWidth;
  canvas.height = canvasDiv.clientHeight;
  canvas.width = canvasDiv.clientWidth;

  // Update camera
  camera.aspect = canvasParameters.width / canvasParameters.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(canvasParameters.width, canvasParameters.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

/**
 * OBJECT
 */
const geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);

const count = geometry.attributes.position.count;
const randoms = new Float32Array(count);

for (let i = 0; i < count; i++) {
  randoms[i] = Math.random();
}

geometry.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 1));

let material = null;

/**
 * ACTIONS
 */
const mouse = new THREE.Vector2();

const onScroll = () => {
  canvasPosition = canvas.getBoundingClientRect();
};

const onMouseMove = (event) => {
  mouse.x = ((event.clientX - canvasPosition.x) / canvas.width) * 2 - 1;
  mouse.y = -((event.clientY - canvasPosition.y) / canvas.height) * 2 + 1;
};

/**
 * ANIMATIONS
 */
const animate = (clock) => {
  const elapsedTime = clock.getElapsedTime();
  if (material) {
    material.uniforms.u_time.value = elapsedTime;
  }
};

/**
 * INIT
 */
const init = () => {
  canvas = document.querySelector("canvas.bio-canvas");
  canvasDiv = document.querySelector(".profile-decor");
  // canvasDiv.style.width = "45em";
  canvasParameters.height = canvasDiv.clientHeight;
  canvasParameters.width = canvasDiv.clientWidth;
  canvas.height = canvasDiv.clientHeight;
  canvas.width = canvasDiv.clientWidth;

  canvasPosition = canvas.getBoundingClientRect();

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
  });
  renderer.physicallyCorrectLights = true;
  renderer.toneMappingExposure = 3;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(canvasParameters.width, canvasParameters.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  camera = new THREE.PerspectiveCamera(
    75,
    canvasParameters.width / canvasParameters.height,
    0.1,
    100
  );
  camera.position.z = 2;
  renderer.setClearColor(0x222629, 1);
  //   renderer.setClearColor(0xffffff, 1);

  material = new THREE.RawShaderMaterial({
    vertexShader: testVertexShader,
    fragmentShader: testFragmentShader,
    uniforms: {
      u_resolution: { value: new THREE.Vector2(canvas.width, canvas.height) },
      u_time: { value: 0 },
    },
  });

  // Mesh
  const mesh = new THREE.Mesh(geometry, material);
  mesh.scale.set(10, 10, 1);
  scene.add(mesh);
};

export {
  scene,
  renderer,
  camera,
  resize,
  animate,
  onMouseMove,
  onScroll,
  init,
};
