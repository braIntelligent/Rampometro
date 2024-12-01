import * as THREE from "three";
import scene from "../basic/scene";

export const createSphere = (currentSphere, high = 1) => {
  if (currentSphere) {
    scene.remove(currentSphere);
    currentSphere.geometry.dispose();
    currentSphere.material.dispose();
  }

  const geometry = new THREE.SphereGeometry(0.5, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(-0.75, high+ 0.5, 0.75);
  scene.add(sphere);
  return sphere
};
