import * as THREE from "three";
import * as CANNON from "cannon-es";
import scene from "../basic/scene";
import { sphereMaterial, world } from "../basic/physics";

export const createSphere = (currentSphere, high = 1) => {
  if (currentSphere) {
    scene.remove(currentSphere.mesh);
    world.removeBody(currentSphere.body);
  }

  const geometry = new THREE.SphereGeometry(0.5, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, high + 0.5, 0.75);
  scene.add(mesh);

  const shape = new CANNON.Sphere(0.5);
  const body = new CANNON.Body({
    mass: 1, // Masa de la esfera
    position: new CANNON.Vec3(0, high + 2, 0.75),
    shape: shape,
    material: sphereMaterial,
  });

  world.addBody(body);

  return { mesh, body };
};
