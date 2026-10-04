const readLine = require("readline-sync");
let numero;

while (true) {
  const entrada = readLine.question("Introduce un número del 0 al 10: ");
  numero = parseInt(entrada);

  if (!isNaN(numero) && numero >= 0 && numero <= 10) {
    break;
  }
}
const numLetras = [
  "cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez"];
console.log(numLetras[numero]);