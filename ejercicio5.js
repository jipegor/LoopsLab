const usuarios = [
    {
        nombre: "Zira",
        movimientos: [20000, -5000, -10000]
    },
    {
        nombre: "Run",
        movimientos: [50000, -12000, -8000, -15000]
    },
    {
        nombre: "Tommy",
        movimientos: [100000, -30000, 1000, -5000, -20000]
    }
];

let nombreMasRetiros = "";
let maxRetiros = -1;

for (let i = 0; i < usuarios.length; i++) {
    let usuario = usuarios[i];
    let cantidadRetiros = 0;

    for (let j = 0; j < usuario.movimientos.length; j++) {
        if (usuario.movimientos[j] < 0) {
            cantidadRetiros += 1;
        }
    }

    console.log(usuario.nombre + " tiene " + cantidadRetiros + " retiro(s)");

    if (cantidadRetiros > maxRetiros) {
        maxRetiros = cantidadRetiros;
        nombreMasRetiros = usuario.nombre;
    }
}

console.log("El que más retiros hizo: " + nombreMasRetiros + " (" + maxRetiros + ")");