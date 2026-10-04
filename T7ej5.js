function obtenerRepetidos(elementos) {
    const repetidos = [];

    for (let i = 0; i < elementos.length; i++) {
        const elemento = elementos[i];

        if (elementos.indexOf(elemento) !== i && !repetidos.includes(elemento)) {
            repetidos.push(elemento);
        }
    }

    return repetidos;
}

function verificarElementosUnicos(elementos) {
    const repetidos = obtenerRepetidos(elementos);

    if (repetidos.length === 0) {
        console.log("Todos los elementos son únicos");
    } else {
        console.log(`Los elementos repetidos son ${repetidos.join(', ')}`);
    }
}
const entrada1 = "uva,manzana,pera,plátano";
verificarElementosUnicos(entrada1.split(','));
const entrada2 = "1,5,22,5,37,22,2,0";
verificarElementosUnicos(entrada2.split(','));