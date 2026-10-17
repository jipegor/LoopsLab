const prompt = require('prompt-sync')();

let opcion;

do {
    console.log("\n--- Menu Nequi ---");
    console.log("1. Ver saldo");
    console.log("2. Enviar dinero");
    console.log("3. Recargar");
    console.log("4. Salir");

    opcion = prompt("Selecciona una opcion (1-4): ");

    if (opcion === "1") {
        console.log("Tu saldo disponible es: $2.000");
    } else if (opcion === "2") {
        console.log("Has seleccionado: Enviar dinero");
    } else if (opcion === "3") {
        console.log("Has seleccionado: Recargar cuenta");
    } else if (opcion === "4") {
        console.log("Gracias por usar Nequi. Hasta luego");
    } else {
        console.log("Opcion no valida. Ingresa una opción válida");
    }
} while (opcion !== "4");