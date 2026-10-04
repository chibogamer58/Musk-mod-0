function calcularSuma(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}
function calcularMedia(numeros) {
    let suma = calcularSuma(numeros);
    return suma / numeros.length;
}
function imprimirSumaYMedia(numeros) {
    let suma = calcularSuma(numeros);
    let media = calcularMedia(numeros);
    console.log("Suma: " + suma);
    console.log("Media: " + media);
}
const entrada = "10,2,5,33,1,27"; 
const numeros = entrada.split(',').map(Number); 
imprimirSumaYMedia(numeros);