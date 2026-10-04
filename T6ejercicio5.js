const readline = require("readline-sync"); // ¡Corregidas las comillas aquí!
const frase = readline.question("Introduce tu frase: ");

let contador = 0;
const fraseminunscula = frase.toLowerCase();

for (let i = 0; i < fraseminunscula.length; i++) {
  if (fraseminunscula[i] === "a" || fraseminunscula[i] === "e" || fraseminunscula[i] === "i" || fraseminunscula[i] === "o" || fraseminunscula[i] === "u") {
    contador++;
  }
} // ¡Aquí cerramos el bucle for!

console.log("El número de vocales es " + contador);