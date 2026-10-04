const readline = require("readline-sync");

const numeroSecreto = Math.floor(Math.random() * 10) + 1;

let intentos = 0;

console.log("He pensado un número del 1 al 10. ¡Intenta adivinarlo!");

while (true) {
  const numero = readline.question("Adivina: ");
  const adivina = parseInt(numero);
  
  intentos++;


  if (adivina === numeroSecreto) {
    console.log(`¡Correcto! Has necesitado ${intentos} intentos`);
    break; // Detiene el juego
  } else {
    console.log("¡Fallo!");
  }
}