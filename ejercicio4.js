const movimientos = [
    { tipo: "recarga", valor: 50000 },
    { tipo: "vacio", valor: 0 },
    { tipo: "retiro", valor: -20000 },
    { tipo: "pago_comercio", valor: -15000 },
    { tipo: "vacio", valor: 0 },
    { tipo: "pago_comercio", valor: -30000 }
];

let valorRetiro = null;

for (let i = 0; i < movimientos.length; i++) {
    let movimiento = movimientos[i];

    if (movimiento.valor === 0) {
        continue;
    }

    if (movimiento.tipo === "retiro") {
        valorRetiro = movimiento.valor;
        console.log("Primer retiro encontrado en el índice: " + i);
        break;
    }
}

if (valorRetiro === null) {
    console.log("No hubo retiros");
} else {
    console.log("Valor del retiro: $" + valorRetiro);
}