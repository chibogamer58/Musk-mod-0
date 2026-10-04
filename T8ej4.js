function sonAnagramas(palabra1, palabra2) {
    let str1 = palabra1.toLowerCase();
    let str2 = palabra2.toLowerCase();
    if (str1.length !== str2.length) {
        return false;
    }
    let frecuencias = new Map();
    for (let i = 0; i < str1.length; i++) {
        let caracter = str1[i];
        if (frecuencias.has(caracter)) {
            frecuencias.set(caracter, frecuencias.get(caracter) + 1);
            } else {
                frecuencias.set(caracter, 1);
            }
    }
    for (let i = 0; i < str2.length; i++) {
        let caracter = str2[i];
        if (!frecuencias.has(caracter)) {
            return false; 
        }
        frecuencias.set(caracter, frecuencias.get(caracter) - 1);
        if (frecuencias.get(caracter) === 0) {
            frecuencias.delete(caracter); 
        } 
    }
    return frecuencias.size === 0;
}
let palabra1 = "amor"; 
let palabra2 = "roma";

console.log("Introduce una palabra: " + palabra1); 
console.log("Introduce otra palabra: " + palabra2);

if (sonAnagramas(palabra1, palabra2)) {
    console.log("Las palabras son anagramas.");
} else {
    console.log("Las palabras no son anagramas.");
}