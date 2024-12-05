import * as THREE from "three";
import scene from "../basic/scene";

export const createPrism = (currentPrism, distance = 6, high = 1) => {
  if (currentPrism) {
    scene.remove(currentPrism);
    currentPrism.geometry.dispose();
    currentPrism.material.dispose();
  }
  const Shape = new THREE.Shape();
  Shape.moveTo(0, 0); 
  Shape.lineTo(distance, 0);
  Shape.lineTo(0, high); 
  Shape.lineTo(0, 0);

  const extrudeSettings = {
    depth: 1.5,
    bevelEnabled: false,
  };

  const geometry = new THREE.ExtrudeGeometry(Shape, extrudeSettings);
  const material = new THREE.MeshBasicMaterial({ color: "grey" });
  const geometryPrism = new THREE.Mesh(geometry, material);
  scene.add(geometryPrism);
  return geometryPrism;
};
