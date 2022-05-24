import * as THREE from "three";
import * as _u from "../utils";

/**
 * CUBE (4 planes)
 */
const createplane = (texture) => {
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1, 1, 100, 100),
    material
  );
  plane.geometry.setAttribute(
    "uv2",
    new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
  );
  return plane;
};

const dimensions = {
  width: 10,
  height: 8,
  wallHeight: 5,
};
const textures = {
  nx: _u.textureLoader.load("/textures/envmap/nx.jpg"),
  px: _u.textureLoader.load("/textures/envmap/px.jpg"),
  ny: _u.textureLoader.load("/textures/envmap/ny.jpg"),
  py: _u.textureLoader.load("/textures/envmap/py.jpg"),
  nz: _u.textureLoader.load("/textures/envmap/nz.jpg"),
  pz: _u.textureLoader.load("/textures/envmap/pz.jpg"),
};

/**
 * NX
 */
const planeNx = createplane(textures.nx);
planeNx.scale.set(dimensions.width, dimensions.wallHeight, 1);
planeNx.rotation.y = Math.PI / 2;
planeNx.position.x = -dimensions.height / 2;
planeNx.position.y = dimensions.wallHeight / 2;

/**
 * PX
 */
const planePx = createplane(textures.px);
planePx.scale.set(dimensions.width, dimensions.wallHeight, 1);
planePx.rotation.y = -Math.PI / 2;
planePx.position.x = dimensions.height / 2;
planePx.position.y = dimensions.wallHeight / 2;

/**
 * NY
 */
const planeNy = createplane(textures.ny);
planeNy.scale.set(dimensions.width, dimensions.height, 1);
planeNy.rotation.x = -Math.PI / 2;
planeNy.rotation.z = Math.PI / 2;

/**
 * PY
 */
const planePy = createplane(textures.py);
planePy.scale.set(dimensions.width, dimensions.height, 1);
planePy.rotation.x = Math.PI / 2;
planePy.rotation.z = Math.PI / 2;
planePy.position.y = dimensions.wallHeight;

/**
 * NZ
 */
const planeNz = createplane(textures.nz);
planeNz.scale.set(dimensions.height, dimensions.wallHeight, 1);
planeNz.rotation.y = Math.PI * 2;
planeNz.position.z = -dimensions.width / 2;
planeNz.position.y = dimensions.wallHeight / 2;

/**
 * PZ
 */
const planePz = createplane(textures.pz);
planePz.scale.set(dimensions.height, dimensions.wallHeight, 1);
planePz.rotation.y = Math.PI;
planePz.position.z = dimensions.width / 2;
planePz.position.y = dimensions.wallHeight / 2;

export { planeNx, planePx, planeNy, planePy, planeNz, planePz };
