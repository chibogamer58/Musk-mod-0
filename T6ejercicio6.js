const readline = require("readline-sync")
const año = readline.question("Introduce un año: ")
const num = parseInt(año)
if (isNaN(num)) {
    console.log("El valor introducido no es un número válido.")
} else {
    if (num % 4 === 0 && num % 100 !== 0 || num % 400 === 0) {
        console.log("El año es bisiesto.")
    } else {
        console.log("El año no es bisiesto.")
    }
}