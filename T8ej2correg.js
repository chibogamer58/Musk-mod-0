function obtenerDiferencia(array1, array2) {
    let resultado = [];
    for (let i = 0; i < array1.length; i++) { 
        let elemento = array1[i];
        if (!array2.includes(elemento) && !resultado.includes(elemento)) {
            resultado.push(elemento);
        }
    }
    return resultado;
}
function generarArrayAleatorio(tamano, max) {
    let array = [];
    for (let i = 0; i < tamano; i++) {
        let numeroAleatorio = Math.floor(Math.random() * max) + 1;
        array.push(numeroAleatorio);
    }
    return array;
}
let array1 = generarArrayAleatorio(5, 10);
let array2 = generarArrayAleatorio(3, 10);
let diferencia = obtenerDiferencia(array1, array2);

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("La diferencia de ambos conjuntos es", diferencia);