const readline = require("readline-sync");

const alturaTriangulo = readline.question("Introduce la altura del triangulo: ");

const altura = parseInt(alturaTriangulo);

if (isNaN(altura) || altura <= 0) {
  console.log("Por favor, introduce un número entero positivo válido.");
  
} else { for (let i = 1; i <= altura; i++) {
    const espacios = " ".repeat(altura - i);
    const asteriscos = "*".repeat(2 * i - 1);

    console.log(espacios + asteriscos);
  }
}