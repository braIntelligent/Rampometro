import * as THREE from "three";
import * as CANNON from "cannon-es";
import scene from "../basic/scene";
import { world } from "../basic/physics";

export const createPrism = (currentPrism, distance = 6, high = 1) => {
  // Eliminar el prisma anterior si existe
  if (currentPrism) {
    scene.remove(currentPrism.mesh); // Remover el mesh de la escena
    world.removeBody(currentPrism.body); // Remover el cuerpo del mundo físico
  }

  // Crear la geometría visual de Three.js
  const Shape = new THREE.Shape();
  Shape.moveTo(0, 0); // Punto A (origen)
  Shape.lineTo(distance, 0); // Punto B (base)
  Shape.lineTo(0, high); // Punto C (altura)
  Shape.lineTo(0, 0); // Cerrar el triángulo

  const extrudeSettings = {
    depth: 1.5, // Profundidad del prisma
    bevelEnabled: false, // Sin bordes biselados
  };

  const geometry = new THREE.ExtrudeGeometry(Shape, extrudeSettings);
  const material = new THREE.MeshBasicMaterial({
    color: "grey",
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, -extrudeSettings.depth / 2);
  scene.add(mesh);

  // Crear la forma física en Cannon.js
  const vertices = [
    new CANNON.Vec3(0, 0, 0), // Punto A
    new CANNON.Vec3(distance, 0, 0), // Punto B
    new CANNON.Vec3(0, high, 0), // Punto C
    new CANNON.Vec3(0, 0, -1.5), // Punto A (profundidad)
    new CANNON.Vec3(distance, 0, -1.5), // Punto B (profundidad)
    new CANNON.Vec3(0, high, -1.5), // Punto C (profundidad)
  ];

  const faces = [
    [0, 1, 2], // Triángulo frontal
    [3, 5, 4], // Triángulo trasero
    [0, 2, 5, 3], // Cara inclinada
    [1, 4, 5, 2], // Cara lateral derecha
    [0, 3, 4, 1], // Cara inferior
  ];

  const shape = new CANNON.ConvexPolyhedron({
    vertices,
    faces,
  });

  const body = new CANNON.Body({
    mass: 0, // Masa 0 para que sea estática
    position: new CANNON.Vec3(0,0,0),
    shape: shape,
  });

  world.addBody(body);

  return { mesh, body };
};
