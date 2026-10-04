const readline = require("readline-sync");
const numero = readline.question("Ingrese un número: ");
const num = parseInt(numero);
if (isNaN(num)) {
  console.log("No es un número");
} else {
  let signo;
  if (num >= 0) {
    signo = "positivo";
  } else {
    signo = "negativo";
  }
  let paridad;
  if (num % 2 === 0) {
    paridad = "par";
  } else {
    paridad = "impar";
  }
  let union;
  if (paridad === "impar") {
    union = "e";
  } else {
    union = "y";
  }
  console.log(`El número es ${signo} ${union} ${paridad}`);
}
