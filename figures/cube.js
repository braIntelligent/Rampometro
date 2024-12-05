import * as THREE from "three";
import scene from "../basic/scene";

export const createBox = (currentBox, high = 1) => {
  if (currentBox) {
    scene.remove(currentBox);
    currentBox.geometry.dispose();
    currentBox.material.dispose();
  }

  const geometry = new THREE.BoxGeometry(1.5, high, 1.5);
  const material = new THREE.MeshBasicMaterial({ color: "darkgrey" });
  const geometryBox = new THREE.Mesh(geometry, material);
  geometryBox.position.set(-0.75, high / 2, 0.75);

  scene.add(geometryBox);
  return geometryBox;
};
