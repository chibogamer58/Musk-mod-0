function generarMatrizCuadrada(n) {
  const matriz = [];
  let contador = 1;
  for (let i = 0; i < n; i++) {
    const fila = [];
    for (let j = 0; j < n; j++) {
      fila.push(contador);
      contador++;
    }
    matriz.push(fila);
  }
  return matriz;
}

function imprimirMatrizCuadrada(n) {
  const matriz = generarMatrizCuadrada(n);
  for (let i = 0; i < matriz.length; i++) {
    const inicio = (i === 0) ? '[' : ' ';
    const fin = (i === matriz.length - 1) ? ']' : ',';
    console.log(`${inicio}[ ${matriz[i].join(', ')} ]${fin}`);
  }
}

// Ejecución con n = 3
imprimirMatrizCuadrada(3);