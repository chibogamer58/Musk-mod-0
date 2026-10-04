function ordenacionBurbuja(lista) {
  let n = lista.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (lista[j] > lista[j + 1]) {
        let temp = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = temp;
      }
    }
  }
  return lista;
}

function generarArrayAleatorio(tamano) {
  let array = [];
  for (let i = 0; i < tamano; i++) {
    array.push(Math.floor(Math.random() * tamano));
  }
  return array;
}

let cantidad = 100000;
let numeros = generarArrayAleatorio(cantidad);

let inicio = Date.now();
ordenacionBurbuja(numeros);
let fin = Date.now();

let segundos = Math.round((fin - inicio) / 1000);
console.log(`El algoritmo bubble sort ha tardado ${segundos} segundos en ordenar ${cantidad} elementos.`);