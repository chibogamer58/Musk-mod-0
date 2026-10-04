function obtenerPalabrasRepetidas(texto) {
    let textoLimpio = texto.toLowerCase();
    textoLimpio = textoLimpio.replace(/[,.]/g, "");
    let palabras = textoLimpio.split("");
    let palabrasVistas = []; 
    let palabrasRepetidas = [];
    for (let i = 0; i < palabras.length; i++) {
        let palabraActual = palabras[i];
        if (palabraActual.trim() === "") {
            continue;
        }
        if (palabrasVistas.includes(palabraActual) && !palabrasRepetidas.includes(palabraActual)) {
            palabrasRepetidas.push(palabraActual);
            } else {
                palabrasVistas.push(palabraActual); 
             } 
            }
            return palabrasRepetidas;
            }
            let textoEntrada = "Recordar es fácil para quien tiene memoria, olvidar es difícil para quien tiene corazón";
            let resultado = obtenerPalabrasRepetidas(textoEntrada);
            console.log("Se repiten las siguientes palabras: " + resultado.join(", "));