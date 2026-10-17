const prompt = require('prompt-sync')();

const pinCorrect = "7034";

let intento = prompt("Ingresar PIN: ");

while (intento != pinCorrect) {
    console.log("PIN incorrecto :(");

    intento = prompt("Ingresar PIN nuevamente: ");
}

console.log("Bienvenido a Nequi");