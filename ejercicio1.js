// Movimientos del mes 

const movimientos = [50000, -20000, 30000, -10000, 15000, -8900]

let total = 0;
let cantidadRetiros = 0;
for (let i = 0; i < movimientos.length; i++) {
    total = total + movimientos[i];

    if (movimientos[i] < 0) {
        cantidadRetiros = cantidadRetiros + 1;
    }
}
console.log("Total movido: ", total);
console.log("Cantidad de retiros: ", cantidadRetiros);