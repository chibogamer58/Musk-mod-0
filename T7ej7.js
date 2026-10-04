function crearMatrizPalabras(texto) {
    const palabras = texto.split(' ');
    const matriz = [];
   for (let i = 0; i < palabras.length; i += 5) {
       const fila = palabras.slice(i, i + 5);
         matriz.push(fila);
    }
    return matriz;
}

function imprimirMatrizPalabras(texto) {
    const matriz = crearMatrizPalabras(texto);
    for (let i = 0; i < matriz.length; i++) {
        const inicio = (i === 0) ? '[' : ' ';
       const fin = (i === matriz.length - 1) ? ']' : ',';
       const filaFormateada = matriz[i].map(palabra => `"${palabra}"`).join(', ');
        console.log(`${inicio}[ ${filaFormateada} ]${fin}`);
    }
}
const entrada1 = "Mary tenía un corderito, su piel era blanca como la nieve"
imprimirMatrizPalabras(entrada1);
const entrada2 = "Soy una tetera"
imprimirMatrizPalabras(entrada2);