export const getValues = () => {
  const highForm = document.getElementById("h-form");
  const distanceForm = document.getElementById("d-form");
  const unorderList = document.getElementById("unorded-list");

  const high = parseFloat(highForm.value);
  const distance = parseFloat(distanceForm.value);
  return { high, distance, unorderList };
};

export const calculation = (high, distance) => {
  const slope = ((high / distance) * 100).toFixed(2);
  const angleRadians = Math.atan(high / distance).toFixed(2);
  const angleDegree = (Math.atan(high / distance) * (180 / Math.PI)).toFixed(2);
  return { slope, angleRadians, angleDegree };
};

export const question = (slope, distance) => {
  if ((slope <= 8 && distance <= 10) || (slope <= 12 && distance <= 1.5)) {
    const isTrue = "<a style='color:cyan;' target='_blank' href='https://www.ciudadaccesible.cl/wp-content/uploads/2021/04/Ficha-5-Rampas-2021.pdf'>Estas bajo norma</a>"
    return isTrue
  } else {
    const isFalse = "<a style='color:red' target='_blank' href='https://www.ciudadaccesible.cl/wp-content/uploads/2021/04/Ficha-5-Rampas-2021.pdf'>no estas bajo norma</a>"
    return isFalse
  }
};

export const render = (trigonometricCalculation, value, response) => {
  value.unorderList.innerHTML = `
    <li class="align">Distancia de la base: ${value.distance} ${value.distance >= 1 ? "metros" : "centimetros"}</li>
    <li class="align">Altura del obstaculo: ${value.high} ${value.high >= 1 ? "metros" : "centimetros"}</li>
    <li class="align">angulo en radianes: ${trigonometricCalculation.angleRadians} radianes</li>
    <li class="align">angulo en grados: ${trigonometricCalculation.angleDegree}°</li>
    <li class="align">pendiente: ${trigonometricCalculation.slope}%</li>
    <li class="align">resolucion: ${response}</li>`
};
