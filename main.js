import { createGrid } from "./basic/grid";
import { redimensionar } from "./basic/redimensionar";
import { animate } from "./basic/animate";
import { createBox } from "./figures/cube";
import { createSphere } from "./figures/sphere";
import { createPrism } from "./figures/prims";
import * as CANNON from "cannon-es";

// CREAR GRID
createGrid();

// CREAR CUBO
let currentBox = createBox();

//CREAR ESFERA
let currentSphere = createSphere();

// CREAR RAMPA
let currentPrism = createPrism();

// EVENTO
const handlerButton = () => {
  const hForm = document.getElementById("h-form");
  const dForm = document.getElementById("d-form");

  const high = parseFloat(hForm.value);
  const distance = parseFloat(dForm.value);

  currentSphere = createSphere(currentSphere, high);
  currentBox = createBox(currentBox, high);
  currentPrism = createPrism(currentPrism, distance, high);
};

// BOTON QUE MANEJA EVENTO
const button = document.getElementById("button-form");

button.addEventListener("click", (e) => {
  e.preventDefault();
  handlerButton();
});

window.addEventListener("resize", redimensionar);

animate(currentSphere, currentBox, currentPrism);



