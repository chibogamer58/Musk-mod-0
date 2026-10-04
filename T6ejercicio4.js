const readline = require("readline-sync");
const numero = readline.question("Introduce un número: ");
const num = parseInt(numero);

if (isNaN(num)) {
  console.log("Por favor, introduce un número válido.");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
  }
}