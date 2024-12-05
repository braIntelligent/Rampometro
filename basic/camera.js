import * as THREE from "three";

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight
);
camera.position.set(3, 6, 15);

export default camera;
