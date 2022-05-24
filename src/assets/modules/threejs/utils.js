import * as THREE from "three";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

/**
 * DEBUG
 */
// const gui = new dat.GUI();
// const objectGUI = (object, type = undefined) => {
//   if (!type || type == "position") {
//     gui.add(object.position, "x").name("position x").max(10).min(-10).step(0.1);
//     gui.add(object.position, "y").name("position y").max(10).min(-10).step(0.1);
//     gui.add(object.position, "z").name("position z").max(10).min(-10).step(0.1);
//   }

//   if (!type || type == "rotation") {
//     gui.add(object.rotation, "x").name("rotation x").max(10).min(-10).step(0.1);
//     gui.add(object.rotation, "y").name("rotation y").max(10).min(-10).step(0.1);
//     gui.add(object.rotation, "z").name("rotation z").max(10).min(-10).step(0.1);
//   }

//   if (!type || type == "scale") {
//     gui.add(object.scale, "x").name("scale x").max(10).min(-10).step(0.1);
//     gui.add(object.scale, "y").name("scale y").max(10).min(-10).step(0.1);
//     gui.add(object.scale, "z").name("scale z").max(10).min(-10).step(0.1);
//   }
// };

/**
 * LOADER
 */
const textureLoader = new THREE.TextureLoader();
const gltfLoader = new GLTFLoader();

/**
 * EXPORT
 */
// export { gui, objectGUI, textureLoader, gltfLoader };
export { textureLoader, gltfLoader };
