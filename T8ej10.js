function esSecuenciaValida(secuencia) {
  let pila = [];
  let parejas = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < secuencia.length; i++) {
    let caracter = secuencia[i];

    if (caracter === '(' || caracter === '[' || caracter === '{') {
      pila.push(caracter);
    } else if (caracter === ')' || caracter === ']' || caracter === '}') {
      if (pila.length === 0 || pila.pop() !== parejas[caracter]) {
        return false;
      }
    }
  }

  return pila.length === 0;
}

let secuencia1 = "[()]{}()";
console.log("Introduce una secuencia: " + secuencia1);
if (esSecuenciaValida(secuencia1)) {
  console.log("Secuencia correcta.");
} else {
  console.log("Secuencia incorrecta.");
}

let secuencia2 = "[(]{)}";
console.log("Introduce una secuencia: " + secuencia2);
if (esSecuenciaValida(secuencia2)) {
  console.log("Secuencia correcta.");
} else {
  console.log("Secuencia incorrecta.");
}