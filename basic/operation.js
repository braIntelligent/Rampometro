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
    return "estas bajo la norma";
  } else {
    return "no estas bajo la norma";
  }
};

export const paintDetail = (trigonometricCalculation, inputs, response) => {
  inputs.unorderList.innerHTML = `<li>Distancia de la base: ${inputs.distance} ${inputs.distance >= 1 ? 'metros' : 'centimetros'}</li>
  <li>Altura del obstaculo: ${inputs.high} ${inputs.high >= 1 ? 'metros' : 'centimetros'}</li>
  <li>angulo en radianes: ${trigonometricCalculation.angleRadians} radianes</li>
  <li>angulo en grados: ${trigonometricCalculation.angleDegree}°</li>
  <li>pendiente: ${trigonometricCalculation.slope}%</li>
  <li>resolucion: <a target='_blank' href='https://www.ciudadaccesible.cl/wp-content/uploads/2021/04/Ficha-5-Rampas-2021.pdf'>${response}</a></li>
  `;
};
