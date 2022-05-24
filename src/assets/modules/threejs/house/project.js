import * as THREE from "three";
import * as _u from "../utils";
import * as cubeHouse from "./cube-house";
import * as projectList from "./project-list";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";

const canvasParameters = {
  width: 0,
  height: 0,
};

let scene = new THREE.Scene();
let canvas;
let canvasDiv;

let renderer;
let camera;
let controls;

const raycaster = new THREE.Raycaster();
const configs = { active: null, exitable: true };

/**
 * INIT
 */
let initFinished = false;
const init = (docCanvas, docCanvasDiv) => {
  canvas = docCanvas;
  canvasDiv = docCanvasDiv;
  canvasDiv.style.width = "100vw";
  canvasDiv.style.height = "80vh";
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
    55,
    canvasParameters.width / canvasParameters.height,
    0.1,
    100
  );

  camera.position.set(0.4, 3, -0.9);
  camera.rotation.y = -Math.PI / 2;
  renderer.setClearColor(0xffffff, 1);

  controls = new PointerLockControls(camera, canvas);
  scene.add(controls.getObject());

  controls.maxPolarAngle = 2.2;
  controls.minPolarAngle = Math.PI / 2 - 0.3;

  const instrDiv = document?.querySelector("#instructions");
  if (instrDiv) {
    controls.addEventListener("lock", function () {
      instrDiv.style.display = "none";
    });

    controls.addEventListener("unlock", () => {
      if (configs.exitable) instrDiv.style.display = "block";
    });
  }
  initFinished = true;
};

const lock = (unlock) => {
  if (controls) {
    if (unlock) {
      controls.unlock();
      configs.exitable = false;
    } else {
      controls.lock();
      configs.exitable = true;
    }
  }
};

/**
 * RESIZE
 */
let canvasPosition;
const resize = () => {
  if (initFinished) {
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
  }
};

/**
 * House
 */
scene.add(cubeHouse.planePx);
scene.add(cubeHouse.planeNx);
scene.add(cubeHouse.planePy);
scene.add(cubeHouse.planeNy);
scene.add(cubeHouse.planeNz);
scene.add(cubeHouse.planePz);

/**
 * Desk
 */
const deskGroup = new THREE.Group();

/**
 * Laptop
 */
_u.gltfLoader.load("/models/laptop/scene.gltf", (gltf) => {
  let param = { size: 0.05, color: 0xff0000 };
  gltf.scene.scale.set(param.size, param.size, param.size);
  gltf.scene.position.set(0.4, 1.78, 0);
  gltf.scene.name = "Laptop";
  gltf.scene.traverse((o) => {
    if (o.isMesh) {
      o.name = "Laptop";
    }
  });
  deskGroup.add(gltf.scene);
});

/**
 * Smartphone
 */
_u.gltfLoader.load(
  "/models/smartphone__low_poly__free_download/scene.gltf",
  (gltf) => {
    let param = { size: 0.008, color: 0xff0000 };
    gltf.scene.scale.set(param.size, param.size, param.size);
    gltf.scene.position.set(1.7, 1.78, 0);
    gltf.scene.rotation.x = -1.45;
    gltf.scene.rotation.y = -0.65;
    gltf.scene.name = "Smartphone";
    gltf.scene.traverse((o) => {
      if (o.isMesh) {
        if (o.name == "mesh_3") {
          o.scale.set(0, 0, 0);
        } else {
          o.name = "Smartphone";
        }
      }
    });
    deskGroup.add(gltf.scene);
  }
);

/**
 * Papers
 */
_u.gltfLoader.load("/models/scattered_papers/scene.gltf", (gltf) => {
  let param = { size: 1.9, color: 0xff0000 };
  gltf.scene.scale.set(param.size, param.size, param.size);
  gltf.scene.position.set(-1.2, 1.8, 0.7);
  gltf.scene.name = "Papers";
  gltf.scene.traverse((o) => {
    if (o.isMesh) {
      o.name = "Papers";
    }
  });
  deskGroup.add(gltf.scene);
});

/**
 * Light
 */
const light = new THREE.PointLight(0xffffff, 2, 20, 0.6);
light.position.set(0.2, 4, -0.2);
scene.add(light);

const amblight = new THREE.AmbientLight(0xffffff, 2); // soft white light
scene.add(amblight);

/**
 * Desk
 */
_u.gltfLoader.load("/models/desk/scene.gltf", (gltf) => {
  let param = { size: 0.01, color: 0xff0000 };
  gltf.scene.scale.set(param.size, param.size, param.size);
  deskGroup.add(gltf.scene);

  gltf.scene.name = "Desk";
  // Color
  gltf.scene.traverse((o) => {
    if (o.isMesh) {
      switch (o.name) {
        case "Handle3_chrome_0":
          o.material = new THREE.MeshStandardMaterial({ color: 0xadb1b3 });
          break;
        case "Handle4_chrome_0":
          o.material = new THREE.MeshStandardMaterial({ color: 0xadb1b3 });
          break;
        case "Handle3_Mat_0":
          o.material = new THREE.MeshStandardMaterial({ color: 0x100c0c });
          break;
        case "Handle4_Mat_0":
          o.material = new THREE.MeshStandardMaterial({ color: 0x282020 });
          break;
        default:
          const deskTexture = _u.textureLoader.load(
            "/textures/models/desk.jpg"
          );
          const deskMaterial = new THREE.MeshStandardMaterial({
            color: 0xa1978d,
            map: deskTexture,
          });
          deskMaterial.metalness = 0;
          deskMaterial.roughness = 1;
          o.material = deskMaterial;
          break;
      }
      o.name = "Desk";
    }
  });
});

/**
 * Plane
 */
scene.add(
  projectList.portfolio,
  projectList.grazia,
  projectList.conference,
  projectList.skin,
  projectList.scraping,
  projectList.pimp,
  projectList.flutterSDK,
  projectList.dataAnalysis,
  projectList.bricks,
  projectList.tailora,
  projectList.puzzle,
  projectList.sirh,
  projectList.renovation,
  projectList.bets,
  projectList.assignments,
  projectList.events,
  projectList.gtmreno,
  projectList.fullroom,
  projectList.unity,
  projectList.formule1,
  projectList.bank,
  projectList.ml,
  projectList.stock,
  projectList.ecommerce
);

deskGroup.rotation.y = Math.PI / 2;
deskGroup.position.set(-2.9, 0, -0.5);
scene.add(deskGroup);

// interactions
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;

/**
 * CONTROLS
 */
const playIt = (play) => {
  if (initFinished) {
    controls.lock();
  }
};

/** camera control */
const onKeyDown = (event) => {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      moveForward = true;
      break;

    case "ArrowLeft":
    case "KeyA":
      moveLeft = true;
      break;

    case "ArrowDown":
    case "KeyS":
      moveBackward = true;
      break;

    case "ArrowRight":
    case "KeyD":
      moveRight = true;
      break;
  }
};
const onKeyUp = (event) => {
  switch (event.code) {
    case "ArrowUp":
    case "KeyW":
      moveForward = false;
      break;

    case "ArrowLeft":
    case "KeyA":
      moveLeft = false;
      break;

    case "ArrowDown":
    case "KeyS":
      moveBackward = false;
      break;

    case "ArrowRight":
    case "KeyD":
      moveRight = false;
      break;
  }
};

/**
 * RAYCASTER
 */
const lookAtElement = () => {
  /* RAYCAST */
  if (initFinished) {
    raycaster.setFromCamera(new THREE.Vector2(), camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    for (let i = 0; i < intersects.length; i++) {
      if (intersects[0].object?.name) {
        // console.log("catch", intersects[0].object?.name);
        if (configs.active != intersects[0].object?.name)
          configs.active = intersects[0].object?.name;
      }
    }
    if (intersects.length <= 0) configs.active = null;
  }
  // return configs.active;
};

/**
 * ANIMATION
 */
let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const animate = () => {
  if (initFinished) {
    lookAtElement();
    const time = performance.now();
    if (controls?.isLocked === true) {
      const delta = (time - prevTime) / 10000;

      velocity.x -= velocity.x * 10.0 * delta;
      velocity.z -= velocity.z * 10.0 * delta;

      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

      direction.z = Number(moveForward) - Number(moveBackward);
      direction.x = Number(moveRight) - Number(moveLeft);
      direction.normalize(); // this ensures consistent movements in all directions

      if (moveForward || moveBackward) {
        velocity.z -= direction.z * 400.0 * delta;
      } else if (!moveForward && !moveBackward) {
        velocity.z = 0;
      }
      if (moveLeft || moveRight) {
        velocity.x -= direction.x * 400.0 * delta;
      } else if (!moveLeft && !moveRight) {
        velocity.x = 0;
      }

      controls.moveRight(-velocity.x * delta);
      controls.moveForward(-velocity.z * delta);

      controls.getObject().position.y += velocity.y * delta;
      if (controls.getObject().position.y < 3) {
        controls.getObject().position.y = 3;
      }
      controls.getObject().position.x = clamp(
        controls.getObject().position.x,
        -1.93,
        2.3
      );
      controls.getObject().position.z = clamp(
        controls.getObject().position.z,
        -2.8,
        3
      );
    }
    prevTime = time;
  }
  return { activeObject: configs.active };
};

export {
  scene,
  renderer,
  camera,
  controls,
  resize,
  init,
  animate,
  playIt,
  onKeyDown,
  onKeyUp,
  lock,
};
