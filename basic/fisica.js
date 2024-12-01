import * as CANNON from "cannon-es";

// Configuración del mundo de física
export const world = new CANNON.World();
world.gravity.set(0, -9.82, 0); // Gravedad (hacia abajo en el eje Y)

// Crear un cuerpo físico para la esfera
export const sphereBody = new CANNON.Body({
  mass: 1, // Masa de la esfera
  shape: new CANNON.Sphere(sphereRadius),
  position: new CANNON.Vec3(0.5, 1, 0), // Posición inicial
});
world.addBody(sphereBody);

// Crear un cuerpo físico para la rampa (como un plano inclinado)
export const rampBody = new CANNON.Body({
  mass: 0, // Masa 0 para hacerlo estático
  shape: new CANNON.Box(new CANNON.Vec3(4, 0.1, 1.5)), // Tamaño del cuerpo físico
  position: new CANNON.Vec3(2, 0.05, 0), // Ajustar según la rampa
});
rampBody.quaternion.setFromEuler(-Math.atan(0.08), 0, 0); // Inclinación de la rampa
world.addBody(rampBody);
