function quickSort(lista) {
  if (lista.length <= 1) {
    return lista;
  }
  
  let indiceMedio = Math.floor(lista.length / 2);
  let pivote = lista[indiceMedio];
  let menores = [];
  let mayores = [];
  
  for (let i = 0; i < lista.length; i++) {
    if (i === indiceMedio) continue;
    
    if (lista[i] < pivote) {
      menores.push(lista[i]);
    } else {
      mayores.push(lista[i]);
    }
  }
  
  return [...quickSort(menores), pivote, ...quickSort(mayores)];
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
let numerosOrdenados = quickSort(numeros);
let fin = Date.now();

let segundos = ((fin - inicio) / 1000).toFixed(1);
console.log(`El algoritmo quicksort ha tardado ${segundos} segundos en ordenar ${cantidad} elementos.`);