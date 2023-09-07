const titulo = document.createElement('h1');
titulo.innerText = 'Convertir Pesos a Dólares';

const pesosInput = document.createElement('input');
pesosInput.type = 'number';
pesosInput.placeholder = 'Ingresa la cantidad en pesos';

const convertButton = document.createElement('button');
convertButton.innerText = 'Convertir';
convertButton.addEventListener('click', convertirDivisa);

const resultadoParrafo = document.createElement('p');

document.body.appendChild(titulo);
document.body.appendChild(pesosInput);
document.body.appendChild(convertButton);
document.body.appendChild(resultadoParrafo);

function convertirDivisa() {
  const pesos = parseFloat(pesosInput.value);
  if (!isNaN(pesos)) {
    const tasaCambio = 0.056; // Tasa de cambio ficticia
    const dolares = pesos * tasaCambio;
    resultadoParrafo.innerText = `${pesos} pesos son aproximadamente ${dolares.toFixed(2)} dólares.`;
  } else {
    resultadoParrafo.innerText = 'Por favor ingresa una cantidad válida en pesos.';
  }
}