import camera from "./camera";
import { controls } from "./controls";
import { world } from "./physics";
import renderer from "./renderer";
import scene from "./scene";

export const animate = (currentSphere, currentBox, currentPrism) => {
  const loop = () => {
    requestAnimationFrame(loop);

    world.step(1/60)

    world.solver.iterations = 10;

    // Sincronizar la esfera
    if (currentSphere && currentSphere.body) {
      currentSphere.mesh.position.copy(currentSphere.body.position);
      currentSphere.mesh.quaternion.copy(currentSphere.body.quaternion);
    }

    // Sincronizar el cubo
    if (currentBox && currentBox.body) {
      currentBox.mesh.position.copy(currentBox.body.position);
      currentBox.mesh.quaternion.copy(currentBox.body.quaternion);
    }

    // Sincronizar la rampa (si es estática, no hace falta actualizar su posición/rotación)
    if (currentPrism && currentPrism.body) {
      currentPrism.mesh.position.copy(currentPrism.body.position);
      currentPrism.mesh.quaternion.copy(currentPrism.body.quaternion);
    }

    // Actualizar controles y renderizar la escena
    controls.update();
    renderer.render(scene, camera);
  };

  loop();
};
