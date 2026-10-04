function esPalindromo(texto) {
    const textoLimpio = texto.toLowerCase().split(' ').join('');
    const textoInvertido = textoLimpio.split('').reverse().join('');
    return textoLimpio === textoInvertido;
}
function verificarPalindromo(texto) {
    if (esPalindromo(texto)) {
        console.log("Si es un palíndromo");
    } else {
        console.log("No es un palíndromo");
    }
}
const entrada1 = "Mary tenía un corderito";
verificarPalindromo(entrada1);
const entrada2 = "Dabale arroz a la zorra el abad";
verificarPalindromo(entrada2);
