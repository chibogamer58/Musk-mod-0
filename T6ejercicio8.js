const readline = require("readline-sync");
const alturaRectangulo = readline.question("Introduce la altura del rectangulo: ");
const anchoRectangulo = readline.question("Introduce el ancho del rectangulo: ");
const altura = parseInt(alturaRectangulo);
const ancho = parseInt(anchoRectangulo);

if (isNaN(altura) || altura <= 0 || isNaN(ancho) || ancho <= 0) {
  console.log("Introduce números enteros positivos válidos.");
  process.exit(1);
} else {  
  for (let i = 1; i <= altura; i++) {
    if (i === 1 || i === altura) {
      console.log("*".repeat(ancho));
    } else {
      if (ancho > 1) {
        console.log("*" + " ".repeat(ancho - 2) + "*");
      } else {
        console.log("*"); 
      }
    }
  }
}