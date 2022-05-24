import * as THREE from "three";
import * as _u from "./utils";
import gsap from "gsap";

const generateBox = (name, texture, position) => {
  const cubeGeometry = new THREE.BoxGeometry(1.4, 0.9, 0.02);
  const cubeMaterial1 = new THREE.MeshBasicMaterial({
    map: _u.textureLoader.load(texture),
  });
  const cubeMaterial2 = new THREE.MeshBasicMaterial({
    color: 0xb9a48e,
    map: _u.textureLoader.load("/textures/jason-dent-itA0ybdIDTs-unsplash.jpg"),
  });
  const cubeMaterials = [
    cubeMaterial2,
    cubeMaterial2,
    cubeMaterial2,
    cubeMaterial2,
    cubeMaterial1,
    cubeMaterial2,
  ];
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
  cube.position.set(position.x, position.y, position.z);
  cube.name = name;
  return cube;
};

const canvasParameters = {
  width: 0,
  height: 0,
};

/**
 * SCENE CERTIFICATES
 */
let scene = new THREE.Scene();
let canvas = document.querySelector("canvas.certificate-canvas");
let canvasDiv = document.querySelector("#certificate-canvas-div");

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
 * CUBES
 */
const configs = {
  cubes: [
    {
      name: "unice",
      texture: "/textures/unice-dipl.jpg",
      position: { x: -1.5, y: 0.8, z: 0 },
    },
    {
      name: "w3d",
      texture: "/textures/w3d-dipl.jpg",
      position: { x: 0, y: 0.8, z: 0 },
    },
    {
      name: "comdata",
      texture: "/textures/comdata-dipl.jpg",
      position: { x: 1.5, y: 0.8, z: 0 },
    },
    {
      name: "itu",
      texture: "/textures/itu-dipl.jpg",
      position: { x: -0.8, y: -0.8, z: 0 },
    },
    {
      name: "eufonie",
      texture: "/textures/eufonie-dipl.jpg",
      position: { x: 0.8, y: -0.8, z: 0 },
    },
  ],
  active: null,
};
const cube1 = generateBox(
  configs.cubes[0].name,
  configs.cubes[0].texture,
  configs.cubes[0].position
);
const cube2 = generateBox(
  configs.cubes[1].name,
  configs.cubes[1].texture,
  configs.cubes[1].position
);
const cube3 = generateBox(
  configs.cubes[2].name,
  configs.cubes[2].texture,
  configs.cubes[2].position
);
const cube4 = generateBox(
  configs.cubes[3].name,
  configs.cubes[3].texture,
  configs.cubes[3].position
);
const cube5 = generateBox(
  configs.cubes[4].name,
  configs.cubes[4].texture,
  configs.cubes[4].position
);

const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

const cubes = [
  { ...cube1, originalPosition: configs.cubes[0].position },
  { ...cube2, originalPosition: configs.cubes[1].position },
  { ...cube3, originalPosition: configs.cubes[2].position },
  { ...cube4, originalPosition: configs.cubes[3].position },
  { ...cube5, originalPosition: configs.cubes[4].position },
];
scene.add(cube1, cube2, cube3, cube4, cube5);

/**
 * ACTIONS
 */
const mouse = new THREE.Vector2();

const onScroll = () => {
  canvasPosition = canvas.getBoundingClientRect();
};

const onMouseMove = (event) => {
  // mouse.x = ((event.clientX - (canvasPosition.x - document?.documentElement?.clientWidth)) / canvas.width) * 2 - 1;
  mouse.x = ((event.clientX - canvasPosition.x) / canvas.width) * 2 - 1;
  mouse.y = -((event.clientY - canvasPosition.y) / canvas.height) * 2 + 1;
};

const raycaster = new THREE.Raycaster();
let clickable = true;
const certificatesClick = () => {
  /* RAYCAST */
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);
  for (let i = 0; i < intersects.length; i++) {
    if (intersects[0].object?.name) {
      if (!configs.active && clickable) {
        configs.active = cubes.find(
          (e) => e.name == intersects[0].object?.name
        );
        cubes.forEach((e) => {
          gsap.to(e.position, {
            duration: 1,
            z: -4,
          });
        });
        gsap.to(configs.active.position, {
          duration: 1,
          x: 0,
          y: 0,
          z: 0.6,
        });
        gsap.to(configs.active.rotation, {
          y: Math.PI * 2,
          repeat: -1,
          ease: "none",
          duration: 8,
        });
      } else if (configs.active) {
        clickable = false;
        if (configs.active) {
          gsap.killTweensOf(configs.active.rotation);
          gsap.to(configs.active.rotation, { y: 0 });
        }
        cubes.forEach((e, i) => {
          gsap.to(e.position, {
            duration: 1,
            x: e.originalPosition.x,
            y: e.originalPosition.y,
            z: e.originalPosition.z,
            onComplete: () => {
              if (i === cubes.length - 1) {
                clickable = true;
                // configs.active = null;
              }
            },
          });
        });
        configs.active = null;
      }
    }
  }
  return configs.active;
};

/**
 * ANIMATIONS
 */
const animate = (clock) => {};

/**
 * INIT
 */
const init = () => {
  canvas = document.querySelector("canvas.certificate-canvas");
  canvasDiv = document.querySelector("#certificate-canvas-div");
  canvasDiv.style.width = "45em";
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
  // renderer.setClearColor(0x00b140, 1);
  renderer.setClearColor(0xffffff, 1);
};

export {
  scene,
  renderer,
  camera,
  resize,
  animate,
  certificatesClick,
  onMouseMove,
  onScroll,
  init,
  configs
};
