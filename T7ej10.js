function transponerMatriz(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    const matrizTranspuesta = [];
    for (let i = 0; i < columnas; i++) {
        const nuevaFila = [];
        for (let j = 0; j < filas; j++) {
            nuevaFila.push(matriz[j][i]);
        }
        matrizTranspuesta.push(nuevaFila);
    }
    return matrizTranspuesta;
}
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        const inicioFila = (i === 0) ? '[' : ' ';
        const finFila = (i === matriz.length - 1) ? ']' : ', ';
        console.log(inicioFila + matriz[i].join(', ') + finFila);
    }
}
const matrizEntrada = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matriz de entrada:");
imprimirMatriz(matrizEntrada);
const matrizTranspuesta = transponerMatriz(matrizEntrada);
console.log("\nMatriz traspuesta:");
imprimirMatriz(matrizTranspuesta);