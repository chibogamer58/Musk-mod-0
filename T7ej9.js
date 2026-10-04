function generarMatrizProductoIndices(n) {
    const matriz = [];
    for (let i = 0; i < n; i++) {
        const fila = [];
        for (let j = 0; j < n; j++) {
            fila.push(i * j);
        }
        matriz.push(fila);
    }
    return matriz;
}
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
       const inicio = (i === 0) ? '[' : ' ';
       const fin = (i === matriz.length - 1) ? ']' : ',';
         console.log(inicio + matriz[i].join(', ') + fin);
    }
}
const n = 3;
const matrizProductoIndices = generarMatrizProductoIndices(n);
imprimirMatriz(matrizProductoIndices);