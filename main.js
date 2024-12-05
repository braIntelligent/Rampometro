import { createGrid } from "./basic/grid";
import { redimensionar } from "./basic/redimensionar";
import { animate } from "./basic/animate";
import { createBox } from "./figures/cube";
import { createPrism } from "./figures/prims";
import {
  calculation,
  getValues,
  question,
  render,
} from "./basic/operation";

// CREAR GRID
createGrid();

// CREAR CUBO
let currentBox = createBox();

// CREAR RAMPA
let currentPrism = createPrism();

//OBTENCION DE VALUES

// EVENTO
const handlerButton = () => {
  const value = getValues();

  if ((value.high <= 2 && value.high > 0) && (value.distance <= 10 && value.distance > 0)) {
    const trigonometry = calculation(value.high, value.distance);
    const response = question(trigonometry.slope, value.distance);
    render(trigonometry, value, response);
    currentBox = createBox(currentBox, value.high);
    currentPrism = createPrism(currentPrism, value.distance, value.high);
  } else {
    value.unorderList.innerHTML = `<li>Por favor, ingresa valores válidos para la altura y la distancia.</li>`;
    return;
  }
};

// BOTON QUE MANEJA EVENTO
const button = document.getElementById("button-form");

button.addEventListener("click", (e) => {
  e.preventDefault();
  handlerButton();
});

window.addEventListener("resize", redimensionar);

animate();
