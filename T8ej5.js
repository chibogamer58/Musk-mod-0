function invertirPalabra(palabra) {
  let pila = [];
  let palabraInvertida = "";

  for (let i = 0; i < palabra.length; i++) {
    pila.push(palabra[i]);
  }

  while (pila.length > 0) {
    palabraInvertida += pila.pop();
  }

  return palabraInvertida;
}

let palabra = "amor";
console.log("Introduce una palabra: " + palabra);
let resultado = invertirPalabra(palabra);
console.log(`La palabra invertida es "${resultado}".`);