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

function buscarPrimosEnRango(limite) { 
  console.log(`Buscando todos los números primos entre 1 y ${limite}...`); 
  
  const inicio = Date.now(); 
  const primos = []; 
  
  for (let i = 2; i <= limite; i++) { 
    if (esPrimo(i)) { 
      primos.push(i); 
    } 
  } 
  
  const fin = Date.now(); 
  const tiempoMs = fin - inicio; 
  
  console.log(`\n¡Búsqueda completada!`); 
  console.log(`Se encontraron ${primos.length} números primos.`); 
  console.log(`Tiempo de ejecución: ${tiempoMs} ms.`); 
  console.log(`Muestra de los primeros 10 primos: [${primos.slice(0, 10).join(', ')}...]`); 
  console.log(`Muestra de los últimos 5 primos: [${primos.slice(-5).join(', ')}]`); 
} 

buscarPrimosEnRango(100000);