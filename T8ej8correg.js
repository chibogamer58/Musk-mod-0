function esPrimo(numero) {
  if (isNaN(numero) || !Number.isInteger(numero) || numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

let numeroEntrada = 1009;
console.log("Introduce un número: " + numeroEntrada);
if (esPrimo(numeroEntrada)) {
  console.log(`${numeroEntrada} es primo.`);
} else {
  console.log(`${numeroEntrada} no es primo.`);
}