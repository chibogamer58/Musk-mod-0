function calcularAreaCirculo(radio) {
    return Math.PI * radio**2;
}
function imprimirAreaCirculo(radio) {
    const area = calcularAreaCirculo(radio);
    console.log(`El área del círculo es: ${area}`);
}
imprimirAreaCirculo(10);