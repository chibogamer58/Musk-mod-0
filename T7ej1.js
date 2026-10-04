function calcularLongitudCircunferencia(radio) {
   return 2 * Math.PI * radio;
}
function imprimirLongitudCircunferencia(radio) {
   const circunferencia = calcularLongitudCircunferencia(radio);
   console.log(`La longitud de la circunferencia es: ${circunferencia}`);
}
imprimirLongitudCircunferencia(5);