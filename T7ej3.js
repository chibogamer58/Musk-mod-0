function calcularLongitudCircunferencia(radio) {
    return 2 * Math.PI * radio;
}
function calcularAreaCirculo(radio) {
    return Math.PI * radio**2;
}
function imprimirDatosCirculo(radio) {
    const circunferencia = calcularLongitudCircunferencia(radio);
    const area = calcularAreaCirculo(radio);
    console.log(`La longitud de la circunferencia es: ${circunferencia}`);
    console.log(`El área del círculo es: ${area}`);
}   
imprimirDatosCirculo(10);