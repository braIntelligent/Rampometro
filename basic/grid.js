import * as THREE from "three";
import scene from "./scene";

export const createGrid = () => {
  const GRID = new THREE.GridHelper(200, 200);
  scene.add(GRID)
};
