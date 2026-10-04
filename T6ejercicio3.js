const readline = require("readline-sync");
const numero = readline.question("ingrese el numero: ");
const num = parseInt(numero);

if (isNaN(num) || num < 0) {
  console.log("Por favor ingrese un número válido y que no sea negativo.");
} else {
  let factorial= 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log(`El factorial de ${num} es ${factorial}`);
}
