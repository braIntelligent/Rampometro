import * as CANNON from "cannon-es";

export const world = new CANNON.World();
world.gravity.set(0.5, -9.82, 0); // Gravedad hacia abajo

// Materiales
const defaultMaterial = new CANNON.Material("default");
const rampMaterial = new CANNON.Material("ramp");
const sphereMaterial = new CANNON.Material("sphere");

// Contacto entre la esfera y la rampa
const contactMaterial = new CANNON.ContactMaterial(sphereMaterial, rampMaterial, {
  friction: 0.5, // Fricción entre la esfera y la rampa
  restitution: 0.2, // Rebote reducido
});
world.addContactMaterial(contactMaterial);

export { defaultMaterial, rampMaterial, sphereMaterial };