function estanParentesisBalanceados(texto) {
  let pila = [];

  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];

    if (caracter === '(') {
      pila.push(caracter);
    } else if (caracter === ')') {
      if (pila.length === 0) {
        return false;
      }
      pila.pop();
    }
  }

  return pila.length === 0;
}

let texto1 = "(()(()))";
console.log("Introduce un texto: " + texto1);
if (estanParentesisBalanceados(texto1)) {
  console.log("Están balanceados.");
} else {
  console.log("No están balanceados.");
}

let texto2 = ")(()()))";
console.log("Introduce un texto: " + texto2);
if (estanParentesisBalanceados(texto2)) {
  console.log("Están balanceados.");
} else {
  console.log("No están balanceados.");
}