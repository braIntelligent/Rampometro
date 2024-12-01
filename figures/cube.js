import * as THREE from "three";
import * as CANNON from "cannon-es";
import scene from "../basic/scene";
import { world } from "../basic/physics";

export const createBox = (currentBox, high = 1) => {
  if (currentBox) {
    scene.remove(currentBox.mesh);
    world.removeBody(currentBox.body);
  }

  const geometry = new THREE.BoxGeometry(1.5, high, 1.5);
  const material = new THREE.MeshBasicMaterial({ color: "darkgrey" });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(-0.75, high / 2, 0.75);
  scene.add(mesh);

  const shape = new CANNON.Box(new CANNON.Vec3(1.5 / 2, high / 2, 1.5 / 2));
  const body = new CANNON.Body({
    mass: 0, // Masa de la esfera
    position: new CANNON.Vec3(-0.75, high / 2, 0.75),
    shape: shape,
  });

  world.addBody(body);

  return { mesh, body };
};
