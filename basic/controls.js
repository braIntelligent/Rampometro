import { OrbitControls } from "three/examples/jsm/Addons.js";
import camera from "./camera";
import renderer from "./renderer";

export const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 3;
controls.maxDistance = 30;