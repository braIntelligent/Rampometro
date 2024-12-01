import * as THREE from "three";

const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight
);
camera.position.set(2, 4, 15);

export default camera;
