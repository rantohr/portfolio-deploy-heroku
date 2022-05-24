import * as THREE from "three";
import * as _u from "../utils";

const frameGenerator = (name, texture, position, rotation) => {
  const planeGeometry = new THREE.PlaneGeometry(1, 1.2);
  const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map: _u.textureLoader.load(texture),
  });
  const projectFrame = new THREE.Mesh(planeGeometry, planeMaterial);
  projectFrame.position.set(position.x, position.y, position.z);
  projectFrame.rotation.y = rotation ? rotation : -Math.PI / 2;
  projectFrame.name = name;
  return projectFrame;
};

export { frameGenerator };
