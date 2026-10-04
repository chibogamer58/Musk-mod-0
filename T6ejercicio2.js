const readLine = require("readline-sync")
const numero1 = readLine.question("ingrese un numero: ")
const numero2 = readLine.question("ingrese otro numero: ")
const numero3 = readLine.question("ingrese otro numero: ")
const num1 = parseInt(numero1)
const num2 = parseInt(numero2)
const num3 = parseInt(numero3)
if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
console.log("al menos uno de los números es par")
} else {
console.log("ninguno de los números es par")
}