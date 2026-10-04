function contarFrecuenciaCaracteres(texto) {
    let textoMinusculas = texto.toLowerCase();
    let frecuencias = new Map();
    for (let i = 0; i < textoMinusculas.length; i++) {
        let caracter = textoMinusculas[i];
        if (frecuencias.has(caracter)) {
            let cuentaActual = frecuencias.get(caracter);
            frecuencias.set(caracter, cuentaActual + 1);
        } else {
            frecuencias.set(caracter, 1);
        }
    }
    return frecuencias;
}
let textoEntrada = "Hola mundo";

console.log("Introduce un texto: " + textoEntrada);
console.log("Mapa de frecuencias:");
console.log(contarFrecuenciaCaracteres(textoEntrada));